/// <reference types="Cypress" />
//import cypress from "cypress"
import "../../support/commands" 
import dayjs from 'dayjs'


describe('Proof of attendance card',() =>{

    beforeEach(()=> {       
        cy.fixture('PSS').then((data) =>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
    })
})

it('Basic information in proof of attendance',() => {
    cy.fixture('PSS').then((data)=>{
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-header-box > .panel-header').should('have.text','Proof of attendance')
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-header-box > .panel-action').should('have.text','Hide details')
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(1) > .panel-sub-header').should('have.text','Date')

   
const now = dayjs()
//const formattedDate = now.format('MMMM D, YYYY HH:mm')
const formattedDate = now.format('MMM D, YYYY')
const formatTime = now.format('HH:mm')

//cy.log('The current date and time is:', formattedDate + ' at ' + formatTime)  

    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(1) > .panel-header').should('have.text',formattedDate+' at '+ formatTime)
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(2) > .panel-sub-header').should('have.text','Name')
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(2) > .panel-header').should('have.text',data.PatientName)
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(3) > .panel-sub-header').should('have.text','Birth Date')
    cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(3) > .panel-header').should('have.text',data.PatientBirthday)
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(4) > .panel-sub-header').should('have.text','Consultation start time')
    cy.get('.panel.ng-tns-c39-5 > .panel-body > .panel-content > .p-l-30 > :nth-child(4) > .panel-header').should('have.text',formattedDate+ ' at 12:30')
    cy.get(':nth-child(5) > .p-b-10').should('have.text','Attendance(s)')
    cy.get('.appointment-checkbox-content > .panel-header').should('have.text',formattedDate+ ' at 12:30, Lok1DIPSSykehusIbruk')
    cy.get('.appointment-checkbox-content > .round > .pointer').should('be.visible')
    cy.get(':nth-child(5) > :nth-child(3) > .panel-sub-header').should('have.text',data.ProofOfAttendanceCardHospitalMessage)
    })
})

it('Download attendance proof using attendance card',()=> { 
    cy.get(':nth-child(4) > .col-xs-12 > .p-r-20 > .btn').click();
    cy.wait(5000)
    cy.verifyDownload('ProofOfAttendance_', {contains:true});
})
})