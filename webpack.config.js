const path = require('path'); // Импортируем модуль "path" для работы с путями файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа для сборки проекта

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
  },

  exports: {
    module: {
      rules: [
        {
          test: /\.css$/, // Если файл .css,
          use: ['style-loader', 'css-loader'], // Обрабатываем его через эти загрузчики
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i, // Если файл изображение
          type: 'asset/resource', // Webpack сохранит его в папке dist
        },
      ],
    },
  },
  
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
  },

  mode: 'development', // Режим сборки
};