const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js', // Входная точка проекта

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
      publicPath: '/',
    },

    mode: isProduction ? 'production' : 'development',

    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      historyApiFallback: true, // SPA поддержка (React, Vue)
      port: 3000,
      open: true,
      hot: true, // Автоматическая перезагрузка без полной перезагрузки страницы
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // JS и JSX файлы
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // ES6+
                '@babel/preset-react', // JSX
              ],
            },
          },
        },
        {
          test: /\.css$/, // CSS файлы
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Обработка изображений
          type: 'asset/resource',
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx'], // Позволяет импортировать файлы без указания расширения
    },

    plugins: [
      new CleanWebpackPlugin(), // Очистка dist перед сборкой
      new HtmlWebpackPlugin({
        template: './src/index.html', // Использование HTML-шаблона
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/img', to: 'img' }, // Копирование изображений
        ],
      }),
    ],
  };
};
