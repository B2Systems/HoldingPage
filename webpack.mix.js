let mix = require('laravel-mix');
let build = require('./tasks/build.js');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/');
mix.webpackConfig({
    plugins: [
        build.jigsaw,
        build.browserSync(),
        build.watch(['source/**/*.md', 'source/**/*.php', 'source/**/*.scss']),
    ]
});

mix.js('source/_assets/js/main.js', 'js')
    .js('source/_assets/js/particles.js', 'js')
    .js('source/_assets/js/particles-config.js', 'js')
    .copy('source/_assets/js/particles.json', 'source/assets')
    .copy('source/_assets/img/', 'source/assets/img')
    .sass('source/_assets/sass/main.scss', 'css/main.css')
    .version();
