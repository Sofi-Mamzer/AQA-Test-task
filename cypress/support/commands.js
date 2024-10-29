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
const tracks = ['Summer', 'Autumn', 'Winter', 'Spring', 'Rainy'];
function getRandomValue(music) {
    const randomIndex = Math.floor(Math.random() * music.length);
    return music[randomIndex];
}
const fullTracks = ['Summer Breeze', 'Autumn Leaves', 'Winter Winds', 'Spring Dance', 'Rainy Mood'];
function getRandomMusic(fullMusic) {
    const randomIndex = Math.floor(Math.random() * fullMusic.length);
    return fullMusic[randomIndex];
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


Cypress.Commands.add('addTrackToPlaylist', () => {
    const randomTrack = getRandomMusic(tracks);
    cy.get('.css-1pk1fka').type(randomTrack);
    cy.contains('[type="button"]', '+').click();
    cy.contains('#playlist', randomTrack).should('be.visible');
});

Cypress.Commands.add('searchByFullName', () => {
    const randomFullTrack = getRandomValue(fullTracks);
    cy.get('.css-1pk1fka').type(randomFullTrack);
    cy.get('.MuiTypography-root').should('contain', randomFullTrack);
});

Cypress.Commands.add('searchByPartOfName', () => {
    const randomTrack = getRandomMusic(tracks);
    cy.get('.css-1pk1fka').type(randomTrack);
    cy.get('.MuiTypography-root').should('contain', randomTrack);
});

Cypress.Commands.add('showOnlySearchedTrack', () => {
    cy.get('.css-1pk1fka').type('Rainy');
    cy.get('.MuiTypography-root').should('not.to.contain', 'Spring');
});

Cypress.Commands.add('addOneTrackByAddTrackbtn', () => {
    cy.get(':nth-child(1) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.contains('[type="button"]', 'Add 1 track').click();
    cy.get('#playlist').should('contain', 'Summer Breeze');
});

Cypress.Commands.add('add3TracksByAddTracksbtn', () => {
    cy.get(':nth-child(1) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get(':nth-child(2) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get(':nth-child(3) > .css-1wxaqej > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    
    cy.contains('[type="button"]', 'Add 3 tracks').click();

    cy.get('#playlist').should('contain', 'Summer Breeze');
    cy.get('#playlist').should('contain', 'Autumn Leaves');
    cy.get('#playlist').should('contain', 'Winter Winds');
});

Cypress.Commands.add('deleteOneTrack', () => {
    cy.contains('[type="button"]', '-').click();
    cy.get('#playlist').should('not.to.contain', '-');
});

Cypress.Commands.add('delete3Tracks', () => {
    cy.contains('[type="button"]', '-').click();
    cy.contains('[type="button"]', '-').click();
    cy.contains('[type="button"]', '-').click();
    cy.get('#playlist').should('not.to.contain', '-');
});
