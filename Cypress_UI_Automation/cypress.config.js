const cypress = require("cypress");
const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     on('task', verifyDownloadTasks);

     },

    baseUrl: "https://patient.dipscloud.com/?hospitalid=1", 



    specPattern: ['cypress/integration/examples/Login.cy.js',
                 'cypress/integration/examples/TestConsent.cy.js',
                 'cypress/integration/examples/PatientInformation.cy.js',
                 'cypress/integration/examples/AppointmentSummary.cy.js',
                 'cypress/integration/examples/FindWayToHospital.cy.js',
                 'cypress/integration/examples/RegisterArrival.cy.js',
                 'cypress/integration/examples/AppointmentCheckIn.cy.js',
                 'cypress/integration/examples/ProofOfAttendance.cy.js',
                 'cypress/integration/examples/FutureAppointmentCard.cy.js',
                 'cypress/integration/examples/PreviousAppointmentCard.cy.js']
  },
});


