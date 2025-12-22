# 1. UTILISATION D'UNE IMAGE PHP ALPINE STABLE (8.3)
# Cela inclut le binaire PHP (requis pour 'php artisan serve') et les outils de base.
FROM php:8.3-fpm-alpine

# 2. INSTALLATION DES DÉPENDANCES SYSTÈME ET DES EXTENSIONS PHP
# - git : pour les dépendances Composer nécessitant un clone Git.
# - libpq & postgresql-client : CRUCIAL pour la connexion à PostgreSQL.
# - zip/unzip : nécessaire pour Composer et certaines librairies Laravel.
RUN apk add --no-cache \
    git \
    libpq \
    libzip \
    unzip \
    postgresql-client \
    # CORRECTION CRUCIALE : Ajout des headers de développement PostgreSQL
    postgresql-dev 

# Installer les extensions PHP nécessaires (PostgreSQL, Zip, etc.)
RUN docker-php-ext-install pdo pdo_pgsql zip

# 3. INSTALLATION DE COMPOSER
# Copie le binaire Composer depuis une image officielle (rapide)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 4. DÉFINITION DU RÉPERTOIRE DE TRAVAIL
WORKDIR /app

# 5. COPIE DU CODE SOURCE (AVANT L'INSTALLATION)
# Le reste du projet (y compris 'artisan') est copié ici.
COPY . .

# 6. INSTALLATION DES DÉPENDANCES COMPOSER
# Cette étape va maintenant trouver 'artisan' pour exécuter les scripts post-autoload.
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# 7. EXÉCUTION DE LA COMMANDE DE DÉMARRAGE
# Lance le serveur web de Laravel sur le port attendu par Render (10000).
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]