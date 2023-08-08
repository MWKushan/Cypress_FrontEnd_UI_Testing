/// <reference types="Cypress" />

import { data } from "jquery";
import "../../support/commands";

describe ('PSS Patient information Test suite', ()=>
{
    beforeEach(()=> {        
        cy.fixture('PSS').then((data)=>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
        })
    })

    it('PSS patient information Test case', () =>
    {     
       cy.fixture('PSS').then((data)=>{       
        cy.get('.navbar-brand').should('be.visible')
        cy.get('.dropdown-toggle > label').should('be.visible')
        cy.get('.caret').should('be.visible')        
        cy.get('.panel-body.ng-tns-c25-1').should('be.visible')
        cy.get('.patient-name').should('have.text',data.PatientName)
        cy.get('.panel-action.clr-primary.ng-tns-c25-1').should('have.text','Show patient information')
        cy.get('.panel-body.ng-tns-c25-1').click()
        cy.get('.p-l-30 > :nth-child(1) > .panel-sub-header').should('have.text','Address')
        cy.get('.p-l-30 > :nth-child(1) > :nth-child(3)').should('have.text',data.PatientAddress)
        cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(2) > .panel-sub-header').should('have.text','Birth Date')
        cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(2) > .panel-header').should('have.text',data.PatientBirthday)
        cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(3) > .panel-sub-header').should('have.text','Dependents')
        cy.get(':nth-child(3) > .light-gray').should('have.text',data.dependant)
        cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(4) > .panel-sub-header').should('have.text','General Practitioner')
        cy.get('.panel-body > .panel-content > .p-l-30 > :nth-child(4) > .panel-header').should('have.text',data.generalpractioner)
        cy.get('.col-sm-8 > .panel-sub-header').should('have.text','Registered mobile numbers for SMS')
        cy.get('.col-sm-8 > .light-gray').should('have.text', 'You may add your mobile numbers here, and the hospital will communicate all information related to appointments with supplied mobile numbers.')
        cy.get('.col-sm-4 > .btn').should('have.text','Add')
        cy.get('.panel-action.clr-primary.ng-tns-c25-1').should('have.text','Hide patient information')
        cy.get('.panel-action.clr-primary.ng-tns-c25-1').click()
        cy.get('.panel-action.clr-primary.ng-tns-c25-1').should('have.text','Show patient information')       
       })
    })

    it('Add patient mobile number',() =>{
      
        cy.fixture('PSS').then((data)=>{ 
         
         cy.get('.panel-action.clr-primary.ng-tns-c25-1').click()
         cy.get('.col-sm-4 > .btn').click()         
         cy.get('.w-100-p > .bg-gray').should('have.text','Cancel')
         cy.get('.w-100-p > .ng-star-inserted > .btn').should('have.text','Save')
         cy.get('.w-120').type('22336655')
         cy.get('.w-100-p > .ng-star-inserted > .btn').click()         
         cy.get('.col-xs-12 > :nth-child(2) > .btn').should('have.text','Edit')

        })
    })

    it('Update patient mobile number',() =>{       
        cy.fixture('PSS').then((data) =>{
        
         cy.get('.panel-action.clr-primary.ng-tns-c25-1').click()
         cy.get('.col-xs-12 > :nth-child(2) > .btn').should('have.text','Edit')
         cy.get('.col-xs-12 > :nth-child(2) > .btn').click()
         cy.get('.w-100-p > .bg-gray').should('have.text','Cancel')
         cy.get('.col-sm-7 > .col-xs-12 > .btn').should('be.visible')
         cy.get('.col-sm-7 > .col-xs-12 > .btn > .glyphicon').should('be.visible')
         cy.get('.w-100-p > .ng-star-inserted > .btn').should('be.disabled')
         cy.get('.w-120').clear().type('22336666')
         cy.get('.w-100-p > .ng-star-inserted > .btn').should('have.text','Save')
         cy.get('.w-100-p > .ng-star-inserted > .btn').click()
         cy.get('.col-xs-12 > :nth-child(2) > .btn').should('have.text','Edit')
        })
    })

    it('Delete mobile number',() =>{
      
        cy.fixture('PSS').then((data) =>{         
            cy.get('.panel-action.clr-primary.ng-tns-c25-1').click()
            cy.get('.col-xs-12 > :nth-child(2) > .btn').should('have.text','Edit')
            cy.get('.col-xs-12 > :nth-child(2) > .btn').click()
            cy.get('.col-sm-7 > .col-xs-12 > .btn').click()
            cy.get('.modal-header').should('have.text','xDelete Mobile Number?')
            cy.get('.modal-body > .ng-star-inserted > p').should('have.text','Are you sure you want to delete the mobile number  +47 22 33 66 66 ?')
            cy.get('.ng-star-inserted > .bg-red').should('have.text','Delete') 
            cy.get('.ng-star-inserted > .bg-gray').should('have.text','Cancel')
            cy.get('.ng-star-inserted > .bg-red').click()
            cy.get('.col-sm-4 > .btn').should('have.text','Add')
            cy.get('.col-sm-8 > .light-gray').should('have.text','You may add your mobile numbers here, and the hospital will communicate all information related to appointments with supplied mobile numbers.')
        })
    })
})