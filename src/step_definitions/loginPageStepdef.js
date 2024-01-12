import {Given, When , And, Then } from "cypress-cucumber-preprocessor/steps";


Given('I launch gmail login page', function() {
    cy.visit("https://mail.google.com/");
});

And('I enter my user roles of {string}', function (username) {
    cy.get('#identifierId').type(username);
});