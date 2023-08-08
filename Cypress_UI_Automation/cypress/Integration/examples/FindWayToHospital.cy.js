/// <reference types="Cypress" />
import "../../support/commands"

describe('Find Way To Hospital Suite',() =>{

    before(()=> {
        
        cy.fixture('PSS').then((data) =>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
    })
})
    it('Find Way To Hospital', () => {
        cy.get('patient-visit > :nth-child(1) > .appointment-label').should('have.text','Your Visit')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .step-default').should('have.text','1')       
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text','Find your way to the hospital')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-action').should('have.text','Show details')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-header-box').click()
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-action').should('have.text','Hide details')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-content > .p-a-20 > .panel-address-header').should('have.text','Address')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-content > .p-a-20 > :nth-child(2)').should('have.text','Kirurgisk avdeling')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-content > .p-a-20 > :nth-child(3)').should('have.text','HAVNEGATA 3, BODØ')
        cy.get('patient-navigate-to-hospital.ng-tns-c32-3 > .col-xs-12 > .panel > .panel-body > .panel-content > .p-a-20 > .panel-navigation-link').should('have.text','Directions in Google Maps')
       
    })
} )