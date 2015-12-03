'use strict';

module.exports = function(config) {
  config.set({
    browsers: ['firefox_latest'],
    basePath: '../',
    client: {
      captureConsole: true,
      mocha: { 'ui': 'tdd' }
    },

    frameworks: [
      'mocha',
      'chai-sinon'
    ],

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true,
          'dom.w3c_touch_events.enabled': 1
        }
      }
    },

    files: [
      'drag.js',
      'test/style.css',
      'test/test.js'
    ]
  });
};
