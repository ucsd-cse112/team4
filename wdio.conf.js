var baseUrl

// if server is equal to production at runtime
if (process.env.SERVER === 'prod') {
  baseUrl = 'https://www.google.com'
} else {
  baseUrl = 'https://ericksotoe.github.io'
}

// if we set debug mode to true we will run long time if not 10 secs
var timeout = process.env.DEBUG ? 99999999 : 20000

exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  //
  // =================
  // Service Providers
  // =================
  // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
  // should work too though). These services define specific user and key (or access key)
  // values you need to put in here in order to connect to these services.
  //
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  //
  // If you run your tests on SauceLabs you can specify the region you want to run your tests
  // in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
  // These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
  // If you don't provide the region it will default for the `us`
  region: 'us',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './test/*.js'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    browserName: 'chrome',
    version: '74.0',
    platform: 'Windows 10',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'integration',
    build: process.env.TRAVIS_BUILD_NUMBER
  }, {
    maxInstances: 1,
    browserName: 'firefox',
    version: '66.0',
    platform: 'Windows 10',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'integration',
    build: process.env.TRAVIS_BUILD_NUMBER
  }, {
    maxInstances: 1,
    browserName: 'safari',
    version: '12.0',
    platform: 'macOS 10.13',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'integration',
    build: process.env.TRAVIS_BUILD_NUMBER
  }, {
    maxInstances: 1,
    browserName: 'chrome',
    version: '74.0',
    platform: 'macOS 10.13',
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    name: 'integration',
    build: process.env.TRAVIS_BUILD_NUMBER
  }
  // {
  //   maxInstances: 1,
  //   browserName: 'MicrosoftEdge',
  //   version: '16.16299',
  //   platform: 'Windows 10',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   name: 'integration',
  //   build: process.env.TRAVIS_BUILD_NUMBER
  // }, {
  //   maxInstances: 1,
  //   browserName: 'internet explorer',
  //   version: '11.0',
  //   platform: 'Windows 8.1',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   name: 'integration',
  //   build: process.env.TRAVIS_BUILD_NUMBER
  // }
  // }, {
  //   maxInstances: 1,
  //   browserName: 'internet explorer',
  //   version: '11.0',
  //   platform: 'Windows 8.1',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   name: 'integration',
  //   build: process.env.TRAVIS_BUILD_NUMBER
  // }, {
  //   maxInstances: 1,
  //   browserName: 'internet explorer',
  //   version: '11.285',
  //   platform: 'Windows 10',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   name: 'integration',
  //   build: process.env.TRAVIS_BUILD_NUMBER
  // }, {
  //   maxInstances: 1,
  //   browserName: 'MicrosoftEdge',
  //   version: '16.16299',
  //   platform: 'Windows 10',
  //   'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  //   name: 'integration',
  //   build: process.env.TRAVIS_BUILD_NUMBER
  // }
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'trace',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner, @wdio/lambda-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  // webdriver: 'info',
  // '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: baseUrl,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['sauce'],
  // , 'applitools'],
  sauceConnect: false,
  // applitoolsKey: 'APPLITOOLS_API_KEY', // can be passed here or via environment
  // applitoolsServerUrl: 'APPLITOOLS_Server_URL', // optional
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ['dot'],

  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: timeout
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  // onPrepare: function (config, capabilities) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function (capabilities, specs) {
    // eslint-disable-next-line no-undef
    expect = require('chai').expect
    // eslint-disable-next-line no-undef
    should = require('chai').should
  }
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  // beforeSuite: function (suite) {
  // },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // afterTest: function (test) {
  // },
  /**
   * Hook that gets executed after the suite has ended
   * @param {Object} suite suite details
   */
  // afterSuite: function (suite) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
  * Gets executed when a refresh happens.
  * @param {String} oldSessionId session ID of the old session
  * @param {String} newSessionId session ID of the new session
  */
  // onReload: function(oldSessionId, newSessionId) {
  // }
}
var config = exports.config

if (process.env.CI) {
  config.user = process.env.SAUCE_USERNAME
  config.key = process.env.SAUCE_ACCESS_KEY
}
exports.config = config
