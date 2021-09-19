/*global cy:true*/
/// <reference path="../../node_modules/cypress/types/index.d.ts" />

//https://github.com/cypress-io/cypress-example-kitchensink/tree/master/cypress/integration/examples

describe('visual testing demo', () => {

    it(`ultraFastTest`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('https://demo.applitools.com');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Demo App - Cypress',
            testName: 'Smoke Test - Cypress',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "Login Window",
            target: 'window',
            fully: true
        });

        cy.get('#log-in').click()

        // Check the app page
        cy.eyesCheckWindow({
            tag: "App Window",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

    it.only(`App test`, function () {
        // Navigate to the url we want to test
        // ⭐️ Note to see visual bugs, run the test using the above URL for the 1st run.
        // but then change the above URL to https://demo.applitools.com/index_v2.html
        // (for the 2nd run)
        cy.visit('http://localhost:3001/');

        // Call Open on eyes to initialize a test session
        cy.eyesOpen({
            appName: 'Demo App - Cypress',
            testName: 'App Test - Cypress',
        })

        // check the login page with fluent api, see more info here
        // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
        cy.eyesCheckWindow({
            tag: "App",
            target: 'window',
            fully: true
        });

        // Call Close on eyes to let the server know it should display the results
        cy.eyesClose()
    });

});