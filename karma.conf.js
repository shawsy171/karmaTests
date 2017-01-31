module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'js/**/*.js',
      'specs/**/*Spec.js'
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['dots'],
    // webserver port
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};

