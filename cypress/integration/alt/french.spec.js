/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const testData = require("../../fixtures/alt/frenchTestData.json");

describe('Alts validate', () => {
    testData.sheet.forEach((testDataRow) => {
        
        const data = {
            number: testDataRow.number,
            path: testDataRow.path,
            image: testDataRow.image,
            alt: testDataRow.alt,
        };

        context(`${data.number} - Checking alt from ${data.image}`, () => {
            it('should be updated', () => {
                cy.visit(Cypress.env('baseUrlFr') + data.path)

                cy.get(`[src*='${data.image}']`)
                    .should('have.attr', 'alt', data.alt)
            })
        });
    });
})