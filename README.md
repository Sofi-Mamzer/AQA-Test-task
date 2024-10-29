# AQA-Test-task

## Requirements
Testing Framework: Cypress
Language: JavaScript
Node.js Version: Ensure Node.js is installed

## Workflow

1. Fork the repo.
2. Clone **your** forked repository.
3. Install dependencies **npm install**
4. Install Cypress **npm install cypress --save-dev**
5. Switch to another branch `git checkout testing`.
6. Run the Cypress **npx cypress open**

## Task

Go to `e2e` folder and cover listed functionality with e2e tests:
1. **Search Functionality:**
    - Test the search input field for filtering the available tracks.
    - Ensure that when a user types a track name in the search box, only matching tracks are displayed.
2. **Add Track Using "+" Button:**
    - Test the ability to add a single track using the "+" button for a given track.
    - Ensure that clicking the "+" button next to a track adds it to the “Your Playlist” list
3. **Add Multiple Tracks:**
    - Test the functionality that allows users to add multiple tracks at once using the checkboxes.
    - Verify that when users select multiple tracks and click the "Add {N} Tracks" button, the correct tracks are added to the playlist.



