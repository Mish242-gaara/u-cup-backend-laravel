#!/bin/sh
set -e # Sortir immédiatement si une commande échoue

# Le WORKDIR est /app dans le Dockerfile.

# 1. APPLICATION DES VARIABLES DE SÉCURITÉ ET DE CONNEXION DE RENDER
# Rendre le .env invisible et forcer le mode SSL
echo "Setting up environment configuration..."
export DB_SSLMODE=require

# Créer un fichier .env (si non existant) et y ajouter la clé et le SSL
if [ ! -f .env ]; then
    touch .env
fi
echo "DB_SSLMODE=require" >> .env
echo "APP_URL=$APP_URL" >> .env # Utiliser l'APP_URL de Render

# Générer la clé d'application si elle est manquante (utilise 'sed' pour la compatibilité Alpine)
if grep -q "^APP_KEY=" .env; then
    if [ -z "$(grep "^APP_KEY=" .env | cut -d '=' -f 2)" ]; then
        APP_KEY=$(php artisan key:generate --show)
        # sed -i est la meilleure façon de remplacer dans Alpine
        sed -i "s|^APP_KEY=.*|APP_KEY=$APP_KEY|" .env
    fi
else
    APP_KEY=$(php artisan key:generate --show)
    echo "APP_KEY=$APP_KEY" >> .env
fi

# 2. CACHE ET MIGRATIONS
# Nettoyer et recacher la configuration
echo "Clearing and caching configuration..."
php artisan config:clear
php artisan config:cache
php artisan view:cache
php artisan route:cache

# 3. ATTENDRE ET MIGRER
# La migration est l'étape où nous vérifions que la BD fonctionne
echo "Exécution des migrations et seeding..."
# Utiliser 'php artisan db:wipe' au lieu de migrate:fresh pour une meilleure gestion des erreurs de BD non trouvée
# Puis exécution normale (si les migrations échouent, le script sort grâce à set -e)
php artisan migrate:fresh --seed --force

# 4. CONFIGURATION DES LOGS ET PERMISSIONS
echo "Setting permissions..."
# Les chemins sont relatifs à WORKDIR /app, ou les chemins absolus pour les services
chown -R www-data:www-data /app/storage /app/bootstrap/cache
chmod -R 775 /app/storage /app/bootstrap/cache

# Créer les logs des services et définir les permissions
echo "Creating log files and setting permissions..."
touch /var/log/supervisor/supervisord.log
touch /var/log/nginx/access.log
touch /var/log/nginx/error.log
chown -R www-data:www-data /var/log/supervisor /var/log/nginx /var/log/php-fpm

# 5. DÉMARRAGE DES SERVICES
echo "Starting Supervisor (Nginx and PHP-FPM)..."
# Exécuter Supervisor en mode non daemon (-n) pour qu'il reste au premier plan (requis par Docker)
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisor.conf -n