/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const testData = require("../../fixtures/title/frenchTestData.json");

describe('Description validate', () => {
    testData.sheet.forEach((testDataRow) => {
        const data = {
            number: testDataRow.number,
            path: testDataRow.path,
            title: testDataRow.title
        };

        context(`${data.number} - Checking title from ${data.path}`, () => {
            it('should be updated', () => {
                cy.visit(Cypress.env('baseUrlFr') + data.path)

                cy.title().should(
                    "eq",
                    data.title
                );
            })
        });
    });
})