/// <reference types='cypress' />

describe('Create Unique Playlist', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should provide the ability to search tracks by full name with "Search" field', () => {
        cy.searchByFullName();
    });

    it('should provide the ability to search tracks by first part of name with "Search" field', () => {
        cy.searchByPartOfName();
    });

    it('should show only searched track after entering the name into "Search" field', () => {
        cy.showOnlySearchedTrack();
    });

    it('should add the track to the “Your Playlist” list by clicking [+] btn', () => {
        cy.addTrackToPlaylist();
    });

    it('should add one track to the “Your Playlist” list by clicking [Add 1 track] btn', () => {
        cy.addOneTrackByAddTrackbtn();
    });

    it('should add multiple tracks to the “Your Playlist” list by clicking [Add {N} tracks] btn', () => {
        cy.add3TracksByAddTracksbtn();
    });

    it('should delete the only one added track from the “Your Playlist” list by clicking [-] btn', () => {
        cy.addTrackToPlaylist();
        cy.deleteOneTrack();
    });

    it('should delete 3 added tracks from the “Your Playlist” list by clicking [-] btn', () => {
        cy.add3TracksByAddTracksbtn();
        cy.delete3Tracks();
    });
});