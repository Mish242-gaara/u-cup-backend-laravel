#!/bin/sh

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

# Exécuter les migrations et le seeding
php artisan migrate:fresh --seed --force

# Démarrer Supervisor
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisor.conf