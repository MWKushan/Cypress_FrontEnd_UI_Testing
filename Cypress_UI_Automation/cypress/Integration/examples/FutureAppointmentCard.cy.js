/// <reference types="Cypress" />
import "../../support/commands" 

describe('Future Appointment Card',() =>{

    before(()=> {
       
         cy.fixture('PSS').then((data) =>{
         cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
         cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
     })
 })
    it('Future Appointment',() => {
        cy.get('patient-other-appointments-holder.ng-tns-c29-2 > :nth-child(1) > .appointment-label').should('have.text','Other Appointments')
        cy.get(':nth-child(2) > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text','Future Appointments')
        cy.get(':nth-child(2) > .panel > .panel-body > .panel-header-box > .panel-sub-header').should('have.text','Check all your future appointments')
        cy.get(':nth-child(2) > .panel > .panel-body > .panel-header-box > .panel-action').should('have.text','Show details')
        cy.get(':nth-child(2) > .panel > .reminder-warning-blue > .ng-tns-c29-2').should('be.visible')
        cy.get(':nth-child(2) > .panel > .panel-body > .panel-header-box > .panel-header').click()
        cy.get(':nth-child(1) > .p-l-30 > .p-t-20 > .panel-header').should('contain.text','Tomorrow at ')
        cy.get(':nth-child(1) > .p-l-30 > .p-t-20 > .status').should('have.text','Future appointment')
    })
})