# 1. UTILISATION D'UNE IMAGE PHP ALPINE STABLE (8.3)
FROM php:8.3-fpm-alpine

# Définir le répertoire de travail
WORKDIR /app

# 2. INSTALLATION DES DÉPENDANCES SYSTÈME, EXTENSIONS PHP ET NETTOYAGE
# Ces étapes sont combinées pour un cache Docker efficace et une image finale légère.
RUN apk add --no-cache --virtual .build-deps \
        autoconf \
        gcc \
        g++ \
        make \
        libzip-dev \
        postgresql-dev \
    # Installe les dépendances d'exécution
    && apk add --no-cache \
        git \
        libpq \
        libzip \
        unzip \
        postgresql-client \
    \
    # Installer les extensions PHP. Maintenant, les packages *-dev sont présents pour la compilation.
    && docker-php-ext-install pdo pdo_pgsql zip \
    \
    # Nettoyage: Supprimer les dépendances de compilation (libzip-dev, postgresql-dev, gcc, etc.)
    # pour réduire la taille finale de l'image.
    && apk del .build-deps

# 3. INSTALLATION DE COMPOSER
# Copie le binaire Composer depuis une image officielle (rapide)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. COPIE DU CODE SOURCE
# Copie tout le code de l'application dans le répertoire de travail.
COPY . .

# 5. INSTALLATION DES DÉPENDANCES COMPOSER
# Composer peut maintenant utiliser l'extension zip installée.
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# 6. DÉMARRAGE DU SERVEUR
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]