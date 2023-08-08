/// <reference types="Cypress" />
import "../../support/commands"

describe('Register Arrival Suite',() =>{

    before(()=> {        
        cy.fixture('PSS').then((data) =>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
    })
})

    it('Register Arrival Card',() => {

        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .panel-body > .panel-content > .p-a-20').should('be.visible')
        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .step-default').should('have.text','2')
        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text','Register your arrival')
        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-sub-header').should('have.text','You may now register your arrival')
        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-action').should('have.text','Hide details')
        cy.get('.p-a-20 > .ng-star-inserted > .btn').should('have.text',' Tap here to register your arrival ')
        cy.get('.step-comment').should('have.text','Upon registering your arrival the hospital will keep you updated on changes related to your visit    ')
        cy.get('.p-a-20 > .ng-star-inserted > .btn').click()
        cy.wait(5000)
        cy.get('patient-register-arrival.ng-tns-c33-4 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-sub-header').should('have.text','You have arrived and may now proceed to your appointment.')
        cy.get('.font-30').should('have.text','2021658')
        cy.get('.col-xs-7 > .font-14').should('have.text','Your code will be visible on the waiting zone screen.')

    })
})