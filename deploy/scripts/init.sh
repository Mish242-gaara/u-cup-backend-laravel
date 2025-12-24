#!/bin/sh

# Vérifier que les répertoires de logs existent (créés dans Dockerfile)
# et créer les fichiers de log s'ils n'existent pas
echo "Creating log directories..."
mkdir -p /var/log/supervisor
mkdir -p /var/log/nginx
mkdir -p /var/log/php-fpm
mkdir -p /var/www/html/storage/logs

# Create symlinks for tmp logs to storage logs
echo "Creating log symlinks..."
ln -sf /tmp/laravel-worker.log /var/www/html/storage/logs/worker.log
ln -sf /tmp/laravel-worker-error.log /var/www/html/storage/logs/worker-error.log
ln -sf /tmp/laravel-schedule.log /var/www/html/storage/logs/schedule.log
ln -sf /tmp/laravel-schedule-error.log /var/www/html/storage/logs/schedule-error.log
ln -sf /tmp/supervisord.log /var/log/supervisor/supervisord.log

[ -f /var/log/supervisor/supervisord.log ] || touch /var/log/supervisor/supervisord.log
[ -f /var/log/nginx.log ] || touch /var/log/nginx.log
[ -f /var/log/nginx-error.log ] || touch /var/log/nginx-error.log
[ -f /var/log/php-fpm.log ] || touch /var/log/php-fpm.log
[ -f /var/log/php-fpm-error.log ] || touch /var/log/php-fpm-error.log

# S'assurer que les permissions sont correctes
echo "Setting permissions..."
chown -R www-data:www-data /var/log/supervisor /var/log/nginx /var/log/php-fpm /var/www/html/storage
chmod -R 775 /var/log/supervisor /var/log/nginx /var/log/php-fpm /var/www/html/storage

# Configuration initiale
export DB_SSLMODE=require

# Générer la clé d'application
APP_KEY=$(php artisan key:generate --show)
echo "APP_KEY=$APP_KEY" >> .env

# Configuration correcte de la base de données
echo "DB_CONNECTION=pgsql" >> .env
echo "DB_HOST=dpg-d54ii8umcj7s73es0220-a.oregon-postgres.render.com" >> .env
echo "DB_PORT=5432" >> .env
echo "DB_DATABASE=ucup_database" >> .env
echo "DB_USERNAME=ucup_database_user" >> .env
echo "DB_PASSWORD=o2HvDyIDWtgPrijOJ4aehI10mjJaWs9E" >> .env
echo "DB_SSLMODE=require" >> .env

# Nettoyer et recacher la configuration
php artisan config:clear
php artisan config:cache
php artisan view:cache

# Attendre que la base de données soit prête avec une approche plus robuste
echo "Attente de la disponibilité de la base de données..."
for i in {1..60}; do
    if php artisan migrate:status > /dev/null 2>&1; then
        echo "Base de données prête!"
        break
    fi
    echo "Tentative $i/60..."
    sleep 5
done

# Exécuter les migrations et le seeding avec gestion des erreurs
echo "Exécution des migrations..."
php artisan migrate:fresh --seed --force || {
    echo "Échec des migrations, tentative avec disable-foreign-keys..."
    php artisan migrate:fresh --seed --force --disable-foreign-keys
}

# Démarrer Supervisor en tant qu'utilisateur spécifique
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisor.conf -n