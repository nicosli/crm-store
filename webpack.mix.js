const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/mixed/css/app.css');

mix.styles([
    'public/mixed/css/app.css',
    'resources/css/app.css',
    'resources/css/menu.css'
], 'public/css/app.css', './');

mix.browserSync({
    open: 'external',
    host: 'local.nicosli.com',
    proxy: 'local.nicosli.com',
    port: 8585
});