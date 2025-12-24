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
echo "Setting up environment configuration..."
if [ ! -f .env ]; then
    if [ -f /usr/local/bin/.env.render ]; then
        cp /usr/local/bin/.env.render .env
    else
        # Create a minimal .env file
        cat > .env << 'EOF'
APP_NAME=Laravel
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL=https://u-cup-backend-laravel.onrender.com

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=pgsql
DB_HOST=dpg-d54ii8umcj7s73es0220-a.oregon-postgres.render.com
DB_PORT=5432
DB_DATABASE=ucup_database
DB_USERNAME=ucup_database_user
DB_PASSWORD=o2HvDyIDWtgPrijOJ4aehI10mjJaWs9E

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=database
SESSION_DRIVER=file
SESSION_LIFETIME=120
EOF
    fi
fi

# Générer la clé d'application si elle n'existe pas
if grep -q "^APP_KEY=" .env; then
    if [ -z "$(grep "^APP_KEY=" .env | cut -d '=' -f 2)" ]; then
        APP_KEY=$(php artisan key:generate --show)
        sed -i "s/^APP_KEY=.*/APP_KEY=$APP_KEY/" .env
    fi
else
    APP_KEY=$(php artisan key:generate --show)
    echo "APP_KEY=$APP_KEY" >> .env
fi

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

# Vérifier la configuration avant de démarrer
echo "Testing database connection..."
if ! php artisan migrate:status > /dev/null 2>&1; then
    echo "Database connection failed, trying to wait..."
    sleep 10
fi

# Nettoyer et recacher la configuration
echo "Clearing and caching configuration..."
php artisan config:clear
php artisan config:cache
php artisan view:cache
php artisan route:cache

# Démarrer Supervisor en tant qu'utilisateur spécifique
echo "Starting Supervisor..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisor.conf -n