import "../../support/commands" 
describe('previous Appointment card', () => {

    before(()=> {       
         cy.fixture('PSS').then((data) =>{
         cy.LoginPSS(data.patientId, data.PatientPassword, data.PatientName)
         cy.VerifyConsents(data.PatientName,data.PatientInfoButton,data.PatientWelcomeMessage,data.ConsentMessage,data.SmsReminderlabel,data.SMSCommunicationLabel,data.SMSPaymentLabel)
     })
 })

    it('Previous Appointment',() =>{

        cy.get(':nth-child(3) > .panel.ng-tns-c29-2 > .panel-body.ng-tns-c29-2 > .panel-header-box > .panel-header').should('have.text','Previous Appointments')
        cy.get(':nth-child(3) > .panel.ng-tns-c29-2 > .panel-body.ng-tns-c29-2 > .panel-header-box > .panel-sub-header').should('have.text','Check all your previous appointments')
        cy.get(':nth-child(3) > .panel.ng-tns-c29-2 > .panel-body.ng-tns-c29-2 > .panel-header-box > .panel-action').should('have.text','Show details')
        cy.get(':nth-child(3) > .panel.ng-tns-c29-2 > .reminder-warning-blue > .ng-tns-c29-2').should('be.visible')
        cy.get(':nth-child(3) > .panel.ng-tns-c29-2 > .panel-body.ng-tns-c29-2 > .panel-header-box > .panel-header').click()
        cy.get(':nth-child(1) > .ng-tns-c29-2 > :nth-child(1) > .p-l-20 > .p-l-35 > .panel-header').should('contain.text','Yesterday ')
        cy.get(':nth-child(1) > .ng-tns-c29-2 > :nth-child(1) > .p-l-20 > .p-l-35 > .round > label').should('be.visible')        
        cy.get(':nth-child(1) > .ng-tns-c29-2 > :nth-child(1) > .p-l-20 > .p-l-35 > .status').should('have.text','Open')       
       cy.get(':nth-child(1) > .ng-tns-c29-2 > .border-b > .p-x-0 > .p-r-20 > .btn').should('have.text',' Download proof of attendance ')
    })
})