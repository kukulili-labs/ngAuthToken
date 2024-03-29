/*
 * ngAuthToken
 * (c) 2014 kukulili labs - Sebastian Mueller <smueller@kukulili-labs.com>
 * License: MIT
 */

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  'use strict';

  var bower = 'test/lib/bower_components/';

  config.set({

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // list of files / patterns to load in the browser
    files: [
        bower + 'angular/angular.js',
        bower + 'angular-mocks/angular-mocks.js',
      'ngAuthToken.js',
      'test/spec/**/*.js'
    ],


    reporters: ['progress', 'coverage'],

    preprocessors: {
      'ngAuthToken.js': ['coverage']
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: '.'
    },

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // web server port
    port: 8999,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};