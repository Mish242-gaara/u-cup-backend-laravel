#!/bin/sh

# Vérifier que les répertoires de logs existent (créés dans Dockerfile)
# et créer les fichiers de log s'ils n'existent pas
[ -d /var/log/supervisor ] || mkdir -p /var/log/supervisor
[ -d /var/log/nginx ] || mkdir -p /var/log/nginx
[ -d /var/log/php-fpm ] || mkdir -p /var/log/php-fpm
[ -d /var/log/laravel ] || mkdir -p /var/log/laravel

[ -f /var/log/supervisor/supervisord.log ] || touch /var/log/supervisor/supervisord.log
[ -f /var/log/nginx.log ] || touch /var/log/nginx.log
[ -f /var/log/nginx-error.log ] || touch /var/log/nginx-error.log
[ -f /var/log/php-fpm.log ] || touch /var/log/php-fpm.log
[ -f /var/log/php-fpm-error.log ] || touch /var/log/php-fpm-error.log
[ -f /var/log/laravel-worker.log ] || touch /var/log/laravel-worker.log
[ -f /var/log/laravel-worker-error.log ] || touch /var/log/laravel-worker-error.log
[ -f /var/log/laravel-schedule.log ] || touch /var/log/laravel-schedule.log
[ -f /var/log/laravel-schedule-error.log ] || touch /var/log/laravel-schedule-error.log

# S'assurer que les permissions sont correctes
chown -R www-data:www-data /var/log/supervisor /var/log/nginx /var/log/php-fpm /var/log/laravel
chmod -R 775 /var/log/supervisor /var/log/nginx /var/log/php-fpm /var/log/laravel

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