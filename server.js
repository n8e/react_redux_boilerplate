var express = require('express');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var appServer;

function openDatabaseConnection() {
  mongoose.connect('mongodb://localhost/docms', (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log('Connected to the database');
    }
  });
}

function startAppServer() {
  const compiler = webpack({
    entry: './app/main.js',
    module: {
      loaders: [
        {
          test: /\.jsx?/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015', 'react'
            ]
          }
        }
      ]
    },
    output: {
      publicPath: '/js/',
      path: __dirname + '/public/',
      filename: 'bundle.js'
    }
  });

  appServer = new WebpackDevServer(compiler, {
    contentBase: './public',
    stats: { colors: true },
    publicPath: '/public/'
  });

  appServer.use(express.static(__dirname + '/public'));

  var api = require('./routes')(appServer, express);
  appServer.use('/api', api);

  appServer.use(bodyParser.urlencoded({
    extended: true
  }));
  appServer.use(bodyParser.json());

  appServer.listen(3000, () => {
    console.log('App is listening on port 3000');
  });
}

function startServers() {
  if (appServer) {
    appServer.listeningApp.close();
  }

  startAppServer();
  openDatabaseConnection();
}

startServers();
