import modulesDirectories from './webpack/modulesDirectories'
const hostname = 'localhost'
const port = 5051
const publicFolder = 'test/'

export default {
    entry: 'mocha!./test/index.js',
    output: {
        filename: 'test.build.js',
        path: publicFolder,
        publicPath: 'http://' + hostname + ':' + port + '/test'
    },
    devServer: {
        host: hostname,
        port: port,
        contentBase: publicFolder,
    },
    module: {
        noParse: [
            /\/sinon\.js/,
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude : /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs']
                }
            },
            {
                test: /(\.css|\.scss)$/,
                loader: 'null-loader'
            },
            {
                test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
                loader: 'null-loader'
            },
            {
                test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
            },
            {
                test: /sinon\/pkg\/sinon\.js/,
                loader: 'imports?define=>false,require=>false'
            },
            {
                test: /sinon\.js$/,
                loader: 'imports?define=>false,require=>false'
            }
            // fix issue https://github.com/webpack/webpack/issues/177
            // Uncaught TypeError: Cannot read property 'call' of undefined
            // https://github.com/webpack/webpack/issues/845
        ]
    },
    resolve: {
        modulesDirectories: modulesDirectories,
        alias: {
            'sinon': 'sinon/pkg/sinon'
        }
    },
    externals: {
        // sinon: 'sinon',
        'cheerio': 'window',
        'jsdom': 'window',
        'react/addons': true, // important!!
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}
