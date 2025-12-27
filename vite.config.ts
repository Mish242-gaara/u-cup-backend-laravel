import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { execSync } from 'child_process';

const canRunPhp = () => {
    try {
        execSync('php -v', { stdio: 'pipe' });
        return true;
    } catch {
        return false;
    }
};

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
            wayfinder: canRunPhp() ? {} : false,
        }),
    ],
});
