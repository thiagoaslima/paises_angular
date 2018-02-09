// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            '../../wwwroot/dist/vendor.js',
            './boot-tests.ts'
        ],
        preprocessors: {
            './boot-tests.ts': ['webpack']
        },
        reporters: ['progress', 'dots', 'junit'],
        junitReporter: {
            outputFile: 'test-results.xml'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-junit-reporter'
        ],
        mime: { 'application/javascript': ['ts', 'tsx'] },
        singleRun: true,
        webpack: require('../../webpack.config.js')().filter(config => config.target !== 'node'), // Test against client bundle, because tests run in a browser
        webpackMiddleware: { stats: 'errors-only' }
    });
};
