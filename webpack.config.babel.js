import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import loaders from './webpack/loaders'
import modulesDirectories from './webpack/modulesDirectories'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import path from 'path'

let env = process.env.NODE_ENV;
let sourceMap = 'source-map';
let buildFolder = 'dist/development/';
let publicPath = buildFolder;
let extraScript = true;

if (env === 'production') {
    sourceMap = '';
    buildFolder = 'dist/production/';
    publicPath = buildFolder;
    extraScript = false;
}

export default {
    devtool: sourceMap,
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, buildFolder),
        publicPath: publicPath
    },
    devServer: {
    	historyApiFallback: true,
        contentBase: buildFolder,
        noInfo: true,
        port: 5050
    },
    module: {
        loaders: loaders
    },
    resolve: {
        modulesDirectories: modulesDirectories
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new CopyWebpackPlugin([{from: 'image', to: 'image'}]),
        // if env==='devserver' no folder will be deleted
        new CleanWebpackPlugin([buildFolder],{dry: env==='devserver',verbose: false}),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
}

