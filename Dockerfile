# Utiliser une image PHP Alpine (légère) avec Composer
FROM composer:2.7

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances
COPY composer.json composer.lock ./
RUN composer install --no-dev --prefer-dist --optimize-autoloader

# Copier le reste du code
COPY . .

# Définir le répertoire public comme root du serveur
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]