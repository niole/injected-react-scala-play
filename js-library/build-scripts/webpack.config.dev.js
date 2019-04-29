var path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 3000,
        disableHostCheck: true,
    },
    entry: "./src/mountHandler.tsx",
    output: {
        library: 'Components',
        filename: "bundle.js",
        path: __dirname + "../dist"
    },

    // Enable sourcemaps
    devtool: "source-map",

    resolve: {
        //  resolvable file extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // All TS will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader", options: {
                configFileName: './build-scripts/tsconfig.json'
            } },

            // for the source map loader
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
