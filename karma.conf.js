// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true, // removes the duplicated traces
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/goldpocket"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      "src/!(assets)/*.js": ["coverage"],
      "src/app/page/protected/transaction/component/price-graph/price-graph.component.ts":
        ["coverage"],
    },
    exclude: ["./src/assets/*.js"],
    proxies: {
      "/apiLocal/*": {
        target: "http://localhost:8081/",
        secure: false,
        logLevel: "debug",
        pathRewrite: {
          "^/apiLocal": "",
        },
      },
      "/api/*": {
        target: "https://60a59b18c0c1fd00175f4124.mockapi.io/api/v1/",
        secure: false,
        logLevel: "debug",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  });
};
