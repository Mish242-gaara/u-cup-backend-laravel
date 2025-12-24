#!/bin/bash

# Render deployment script for Laravel
set -e

echo "Starting deployment..."

# Navigate to the app directory
cd /var/www/html

echo "Installing dependencies..."
composer install --no-interaction --no-dev --optimize-autoloader

echo "Setting up environment..."
cp .env.production .env

# Generate application key if needed
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

echo "Running migrations..."
php artisan migrate --force --no-interaction

echo "Caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

echo "Setting up storage permissions..."
chown -R www-data:www-data storage
chown -R www-data:www-data bootstrap/cache
chmod -R 775 storage
chmod -R 775 bootstrap/cache

echo "Optimizing application..."
php artisan optimize

echo "Starting Supervisor..."
supervisord -c /etc/supervisor/supervisord.conf

echo "Deployment completed successfully!"