'use strict';

module.exports = [
    {
        development: true,
        production: true,
        build: true,
        config: {
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader'
        }
    },
    {
        development: true,
        production: true,
        build: true,
        config: {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            }]
        }
    },
    {
        development: true,
        production: true,
        build: true,
        config: {
            test: /\.hbs$/,
            use: [{
                loader: 'handlebars-loader',
                options: {
                    runtime: 'handlebars.runtime',
                    partialDirs: [process.cwd() + '/src/tmpl/partials'],
                    debug: true
                }
            }]
        }
    },
    {
        development: true,
        production: true,
        build: true,
        config: {
            test: /\.(p)?css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }
    },
    {
        development: true,
        production: true,
        build: true,
        config: {
            test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }]
        }
    }
];
