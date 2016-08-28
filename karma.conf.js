module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
        'public/bower_components/angular/angular.min.js',
        'public/bower_components/angular-mocks/angular-mocks.js',
        'public/bower_components/angular-route/angular-route.min.js',
        'public/app/app.js',
        'public/app/**/*.module.js',
        'public/app/**/*.controller.js',
        'public/app/**/*.directive.js',
        'public/app/**/*.spec.js',
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    plugins: [
        'karma-phantomjs-launcher',
        'karma-mocha',
        'karma-sinon',
        'karma-chai'
    ]
  })
}
