# 1. UTILISATION D'UNE IMAGE PHP ALPINE STABLE (8.3)
FROM php:8.3-fpm-alpine

# Définir le répertoire de travail
WORKDIR /app

# 2. INSTALLATION DES DÉPENDANCES SYSTÈME, EXTENSIONS PHP ET NETTOYAGE
RUN apk add --no-cache --virtual .build-deps \
    autoconf \
    gcc \
    g++ \
    make \
    libzip-dev \
    postgresql-dev \
    && apk add --no-cache \
    git \
    libpq \
    libzip \
    unzip \
    postgresql-client \
    nginx \
    supervisor \
    && docker-php-ext-install pdo pdo_pgsql zip \
    && apk del .build-deps

# 3. INSTALLATION DE COMPOSER
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. COPIE DU CODE SOURCE
COPY . .

# 5. INSTALLATION DES DÉPENDANCES COMPOSER
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# 6. CONFIGURATION DES PERMISSIONS
RUN chown -R www-data:www-data /app/storage /app/bootstrap/cache
RUN chmod -R 775 /app/storage /app/bootstrap/cache

# 7. CONFIGURATION NGINX
COPY deploy/config/nginx.conf /etc/nginx/nginx.conf

# 8. CONFIGURATION SUPERVISOR
COPY deploy/config/supervisor.conf /etc/supervisor/conf.d/supervisor.conf

# 9. CRÉATION DU SCRIPT D'INITIALISATION
RUN echo '#!/bin/sh

# Configuration initiale
export DB_SSLMODE=require

# Générer la clé d\'application
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
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisor.conf' > /usr/local/bin/init.sh && \
    chmod +x /usr/local/bin/init.sh

# 10. DÉMARRAGE AVEC LE SCRIPT D'INITIALISATION
CMD ["/usr/local/bin/init.sh"]