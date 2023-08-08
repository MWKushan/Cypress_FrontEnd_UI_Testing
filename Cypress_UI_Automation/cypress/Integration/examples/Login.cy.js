/// <reference types="Cypress" />
//import { data } from "jquery";
//import Login from "../../../PageObject/LoginPage";

import "../../support/commands";


describe ('PSS Login Test suite', ()=>
{        

      it('PSS Login Test case', () =>
      {
         cy.fixture('PSS').then((data)=>{
         cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)        
          
       })            
          
    })   
        
    })
