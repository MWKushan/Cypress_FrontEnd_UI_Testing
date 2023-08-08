/// <reference types="Cypress" />
import { data } from "jquery";
import "../../support/commands";

describe ('PSS Consent Test suite', function()
{
    it('PSS Consent Test case', function() {          
      cy.fixture('PSS').then((data)=>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)       
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
     })        
    })    
  })



 


     