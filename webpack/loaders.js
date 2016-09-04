
export default [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {presets: []}
    },
    {
        test: /\.css$/,
        loaders: ['style', 'css?sourceMap', 'resolve-url']
    },
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
    },
    {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/font/[name].[ext]'
    },
    {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader?name=/font/[name].[ext]'
    },
    {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/font/[name].[ext]'
    },
    {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        loaders: ['file-loader?name=/image/[name].[ext]']
    },
    {
        test: /vendor\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
    }

]
