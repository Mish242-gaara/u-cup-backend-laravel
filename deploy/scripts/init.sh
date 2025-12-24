#!/bin/sh

# Créer les répertoires de logs nécessaires
mkdir -p /var/log/supervisor
mkdir -p /var/log/nginx
mkdir -p /var/log/php-fpm
mkdir -p /var/log/laravel

touch /var/log/supervisor/supervisord.log
touch /var/log/nginx.log
touch /var/log/nginx-error.log
touch /var/log/php-fpm.log
touch /var/log/php-fpm-error.log
touch /var/log/laravel-worker.log
touch /var/log/laravel-worker-error.log
touch /var/log/laravel-schedule.log
touch /var/log/laravel-schedule-error.log

# Configuration initiale
export DB_SSLMODE=require

# Générer la clé d'application
APP_KEY=$(php artisan key:generate --show)
echo "APP_KEY=$APP_KEY" >> .env
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