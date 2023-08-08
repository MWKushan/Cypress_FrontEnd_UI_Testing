/// <reference types="Cypress" />
//import cypress from "cypress"
import "../../support/commands"

describe('Appointment Check-in Suite', () =>{

    beforeEach(()=> {
       
        cy.fixture('PSS').then((data) =>{
        cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
        cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
    })
})

    it('Appointment Check-in',() =>{
       
        
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-header').should('have.text','Time at 12:30Lok1DIPSSykehusIbruk')
        cy.get('.panel-header-box > .status').should('have.text','Open')
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-header-box > .panel-action').should('have.text','Hide details')       
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-content > .address_panel > :nth-child(1)').should('have.text','Address')      
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-content > .address_panel > :nth-child(2)').should('have.text','Kirurgisk avdeling')
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-content > .address_panel > :nth-child(3)').should('have.text','HAVNEGATA 3, BODØ')       
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .panel-body > .panel-content > .address_panel > .panel-navigation-link').should('have.text','Directions in Google Maps')
        cy.get('.panel-meeting-place').should('have.text','Meeting place')
        cy.get('.address_panel > :nth-child(6)').should('have.text','Kommunehuset i andre etg. Blå dør med vindu')
        cy.get('.p-a-20 > .btn').should('have.text',' Tap here to check-in ')
        cy.get('.row.ng-star-inserted > .m-b-10 > p').should('have.text','Attendance certificates can be downloaded after the appointment.')
        cy.get('patient-appointment-detail.ng-tns-c36-5 > .col-xs-12 > .panel > .step-default').should('have.text','3')
        cy.get('.p-a-20 > .btn').click()
        cy.wait(10000)
        cy.get('.appointment-panel-body > .panel-header-box > .ng-star-inserted').should('have.text','Checked-in') 
        cy.get('.appointment-panel-body > .panel-header-box > .panel-action').should('have.text','Hide details')
        cy.get('.panel-sub-header.m-b-15 > .col-sm-8 > .panel-sub-header').should('have.text','Temporary mobile number')
        cy.get('.panel-sub-header.m-b-15 > .col-sm-8 > .light-gray').should('have.text','You may add a temporary mobile number here which the hospital will use to communicate all information related to this appointment.')
        cy.get('.panel-sub-header.m-b-15 > .p-r-5 > .btn').should('have.text','Add')
        cy.get('.p-t-15 > .border-t > .col-xs-12 > .p-r-20 > .btn').should('have.text',' Download proof of attendance ')
        
    })

    it('Add temporary mobile no',() =>{
       cy.get('.appointment-panel-body > .panel-header-box').click()      
       cy.get('.panel-sub-header.m-b-15 > .p-r-5 > .btn').click()
       cy.get('.w-50').should('be.visible')
       cy.get('.p-r-5 > .bg-gray').should('have.text','Cancel')
       cy.get('.p-r-5 > .ng-star-inserted > .btn').should('have.text','Save')
       cy.get('.w-120').type('55114488')
       cy.get('.p-r-5 > .ng-star-inserted > .btn').click()
       cy.wait(5000)
       cy.get('.p-t-5').should('have.text','+47 55 11 44 88')
       cy.get('.p-r-5 > .btn').should('have.text','Edit')
    })

    it('Edit temporary mobile no',() =>{
       cy.get('.appointment-panel-body > .panel-header-box').click()
       cy.get('.p-r-5 > .btn').click()
       cy.get('.w-120').clear()
       cy.get('.w-120').type('55114477')
       cy.get('.p-r-5 > .ng-star-inserted > .btn').click()
       cy.wait(4000)
       cy.get('.p-t-5').should('have.text','+47 55 11 44 77')
       cy.get('.p-r-5 > .btn').should('have.text','Edit')
    })

    it('Delete temporary mobile no',() =>{
       cy.get('.appointment-panel-body > .panel-header-box').click()
       cy.get('.p-r-5 > .btn').click()
       cy.get('.col-sm-7 > .col-xs-12 > .btn').click()
       cy.get('.modal-title').should('have.text','Delete Temporary Mobile Number?')
       cy.get('.ng-star-inserted > p').should('have.text','Are you sure you want to delete the mobile number  +47 55 11 44 77 ?')
       cy.get('.bg-gray').should('have.text','CancelCancel')
       cy.get('.bg-red').should('have.text','Delete')            
       cy.get('.ng-star-inserted > .bg-red').click({ force: true });

        //cy.get('.bg-red').each(($btn) => { 
          //  cy.click($btn, { multiple: true });
          //});
        
       cy.wait(4000)
       cy.get('.appointment-panel-body > .panel-header-box > .panel-header').click();
       cy.get('.panel-sub-header.m-b-15 > .col-sm-8 > .panel-sub-header').should('have.text','Temporary mobile number')
       cy.get('.panel-sub-header.m-b-15 > .col-sm-8 > .light-gray').should('have.text','You may add a temporary mobile number here which the hospital will use to communicate all information related to this appointment.')
       cy.get('.panel-sub-header.m-b-15 > .p-r-5 > .btn').should('have.text','Add')
    })

   it('Download proof of attendance in appointment check in',() => {
      cy.get('.appointment-panel-body > .panel-header-box').click()
      cy.get('.p-t-15 > .border-t > .col-xs-12 > .p-r-20 > .btn').click()    
      cy.wait(5000)      
      cy.verifyDownload('ProofOfAttendance_', {contains:true});
       
       
   

        // Click the download button
        //cy.get('.p-t-15 > .border-t > .col-xs-12 > .p-r-20 > .btn').click();

            // Wait for the file to download
       // cy.wait(1000);

        // Get the list of files in the downloads folder
        //const files = fs.readdirSync(downloadsFolder);

        // Check if the file with the partial name exists
       // const fileExists = files.some((file) => {
        //return file.includes(fileName);
   //});

        // Assert that the file exists
       //  cy.assert(fileExists);

        //cy.readFile(path.join(Cypress.config('downloads'), 'ProofOfAttendance_')).should('exist')


        //cy.readFile(path.join(cypress))
        //const filename = 'ProofOfAttendance_'
       // cy.get('.p-t-15 > .border-t > .col-xs-12 > .p-r-20 > .btn').click()
       // cy.wait(5000)
       // cy.waitUntil(() => cy.fileExists(`*${filename}.*`).fail('File download failed')) 
       

        //const filename = 'ProofOfAttendance_';

   // cy.get('a[href="/download/my-file.txt"]').click();

   // cy.waitUntil(
    //() => cy.fileExists(`*${filename}.*`),
    //'File download failed'
    //)   


    })

})