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
    && docker-php-ext-install pdo pdo_pgsql zip \
    && apk del .build-deps

# 3. INSTALLATION DE COMPOSER
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. COPIE DU CODE SOURCE
COPY . .

# NOUVEAU : Créer le fichier .env. 'touch' garantit que le fichier existe pour 'key:generate'.
RUN touch .env

# 5. INSTALLATION DES DÉPENDANCES COMPOSER
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# NOUVELLE ÉTAPE : Assurer les permissions pour les dossiers de cache/logs de Laravel
RUN chmod -R 775 storage bootstrap/cache

# 6. DÉMARRAGE DU SERVEUR
# Le CMD reste inchangé et est correct
CMD set -e && \
    php artisan key:generate --force && \
    php artisan config:clear && \
    php artisan config:cache && \
    php artisan view:cache && \
    php artisan migrate --force && \
    php artisan serve --host=0.0.0.0 --port=$PORT