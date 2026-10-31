const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://api.demoblaze.com",
        reporter: "cypress-mochawesome-reporter",
        reporterOptions: {
            reportDir: "cypress/reports",
            charts: true,
            reportPageTitle: "DemoBlaze API - Case 1",
            inlineAssets: true,
            overwrite: false,
            html: true,
            json: true,
        },
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);
            return config;
        },
    },
});