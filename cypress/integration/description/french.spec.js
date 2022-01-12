/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const testData = require("../fixtures/frenchTestData.json");

describe('Description validate', () => {
    testData.sheet.forEach((testDataRow) => {
        const data = {
            path: testDataRow.path,
            description: testDataRow.description
        };
    
    context(`Checking description from ${data.path}`, () => {
        it('should be updated', () => {
            cy.visit(Cypress.env('baseUrlFr') + data.path)
            
            cy.get('meta[name="description"]').should(
                "have.attr",
                "content",
                data.description
            );
        })
    });
});
})