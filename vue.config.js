const plugins = [];

if (process.env.NODE_ENV === 'production') {
    const { join } = require('path');
    const PrerenderPlugin = require('prerender-spa-plugin-next');

    plugins.unshift(
        new PrerenderPlugin({
            staticDir: join(__dirname, 'dist'),
            routes: ['/'], //the page route you want to prerender
        })
    );
}


module.exports = {
    transpileDependencies: true,
    configureWebpack(config) {
        config.plugins = [...config.plugins, ...plugins];
    },
};
