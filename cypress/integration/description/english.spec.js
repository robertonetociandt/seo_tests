/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

const testData = require("../../fixtures/description/englishTestData.json");

describe('Description validate', () => {
    testData.sheet.forEach((testDataRow) => {
        const data = {
            path: testDataRow.path,
            description: testDataRow.description
        };
    
    context(`Checking description from ${data.path}`, () => {
        it('should be updated', () => {
            cy.visit(Cypress.env('baseUrlEn') + data.path)
            
            cy.get('meta[name="description"]').should(
                "have.attr",
                "content",
                data.description
            );
        })
    });
});
})
