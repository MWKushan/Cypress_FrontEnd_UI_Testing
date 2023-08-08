/// <reference types="Cypress" />
import "../../support/commands";

describe ('Appointment Summary',() => {
    before(() => {
        
        cy.fixture('PSS').then((data) =>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
       
    }) 
        })
    
    it('verify appointment Summary',() =>{       
        cy.fixture('PSS').then((data) =>{
            cy.get('.appointment-name').should('have.text','Time at 12:30Lok1DIPSSykehusIbruk')
            cy.get('.appointment-dep').should('have.text','Kirurgisk avdeling')
        })  
    })

})