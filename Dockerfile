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
# NOTE : Les variables critiques (DB_*, APP_KEY) seront définies par Render/CMD
RUN touch .env

# 5. INSTALLATION DES DÉPENDANCES COMPOSER
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# NOUVELLE ÉTAPE : Assurer les permissions pour les dossiers de cache/logs de Laravel
RUN chmod -R 775 storage bootstrap/cache

# 6. DÉMARRAGE DU SERVEUR (Correction complète : utilise ENTRYPOINT/CMD)
# Utiliser /bin/sh pour exécuter la chaîne de commandes séquentielles
ENTRYPOINT ["/bin/sh", "-c"]

# CMD : La logique complexe est désormais une chaîne unique exécutée par l'ENTRYPOINT
CMD export DB_SSLMODE=require && \
    # Générer la clé d'application, stocker la clé et le DB_SSLMODE dans .env (pour le serveur)
    APP_KEY=$(php artisan key:generate --show) && \
    echo "APP_KEY=$APP_KEY" >> .env && \
    echo "DB_SSLMODE=require" >> .env && \
    
    # Nettoyer et recacher la configuration avec les variables du shell et du .env
    php artisan config:clear && \
    php artisan config:cache && \
    php artisan view:cache && \
    
    # Exécuter la réinitialisation de la base de données de démo et le seeding
    php artisan migrate:fresh --seed --force && \
    
    # Démarrer le serveur
    php artisan serve --host=0.0.0.0 --port=$PORT