// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import cypress = require("cypress");

//import cypress from "cypress";

// Custom command for login

Cypress.Commands.add('LoginPSS',(PatientId,Password,PatientName)=>{
    cy.visit('')
    cy.get('#username').type(PatientId)
    cy.get('#password').type(Password)
    cy.get('.btn.btn-primary.btn-xs.btn-block').click()
   // cy.wait(30000) https://patient.dipscloud.com/api/Appointments?hospitalId=1
   cy.intercept('GET','https://patient.dipscloud.com/api/Appointments?hospitalId=1').as('getHospitalInfoAPI')
   cy.wait('@getHospitalInfoAPI')
  
    cy.get('.patient-name').should('have.text',PatientName)   
    cy.get('img').should('be.visible')
} )

Cypress.Commands.add('VerifyConsents',(PatientName,showPatientInfo,WelcomeMessage,ConsentMessage,SmsReminder,SmsCommunication,SmsPayment)=>{
       
        cy.get('img').should('be.visible')    
        cy.get('.patient-name').should('have.text',PatientName) 
        cy.get('.panel-header-box > .panel-action').should('have.text',showPatientInfo)  
        cy.get('.clr-dark').contains(WelcomeMessage)
        cy.get('.welcome-msg').should('have.text',ConsentMessage)  
        cy.get(':nth-child(2) > app-patient-consent > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text',SmsReminder)
        cy.get(':nth-child(2) > app-patient-consent > .col-xs-12 > .panel > .panel-body > .panel-header-box > div > .panel-action').should('be.visible')
        cy.get(':nth-child(3) > app-patient-consent > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text',SmsCommunication)
        cy.get(':nth-child(4) > app-patient-consent > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text',SmsPayment)
        cy.get(':nth-child(4) > app-patient-consent > .col-xs-12 > .panel > .panel-body > .panel-header-box > div > .panel-action').should('be.visible')
        cy.get(':nth-child(6) > .btn').should('be.visible')
        cy.get('.m-t-20 > .ng-star-inserted > .btn').should('be.visible')
        cy.get('.m-t-20 > .ng-star-inserted > .btn').click()
 })


    

  
