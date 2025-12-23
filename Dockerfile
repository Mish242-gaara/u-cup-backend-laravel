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

# NOUVEAU : Copier le fichier .env.render comme base de configuration
COPY .env.render .env

# 5. INSTALLATION DES DÉPENDANCES COMPOSER
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# NOUVELLE ÉTAPE : Assurer les permissions pour les dossiers de cache/logs de Laravel
RUN chmod -R 775 storage bootstrap/cache

# 6. DÉMARRAGE DU SERVEUR
# CORRECTION COMPLÈTE : Force DB_SSLMODE=require pour TOUTES les commandes,
# utilise DATABASE_URL pour la configuration, et génère/sauvegarde APP_KEY
CMD set -e && \
    # Configurer l'environnement pour utiliser DATABASE_URL et forcer SSL
    export DB_SSLMODE=require && \
    export DB_CONNECTION=pgsql && \
    # Mapper DATABASE_URL (fournie par Render) vers DB_URL (attendue par Laravel)
    export DB_URL=${DATABASE_URL:-postgres://localhost/laravel} && \
    # Générer la clé d'application et la sauvegarder dans .env
    APP_KEY=$(php artisan key:generate --show) && \
    echo "APP_KEY=$APP_KEY" >> .env && \
    echo "DB_SSLMODE=require" >> .env && \
    # Nettoyer et recacher la configuration avec les bonnes variables
    php artisan config:clear && \
    php artisan config:cache && \
    php artisan view:cache && \
    # Exécuter les migrations avec SSL forcé
    php artisan migrate --force && \
    # Démarrer le serveur
    php artisan serve --host=0.0.0.0 --port=$PORT