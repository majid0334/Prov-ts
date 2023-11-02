"use strict";
// DIN UPPGIFT: Använd dig av unions för att skapa en typ Role som möjliggör alternativen i switch-satsen. Byt ut any mot passande typer.
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng
const role = "Manager";
const describeRole = (role) => {
    switch (role) {
        case "Employee":
            console.log("You are an employee.");
            break;
        case "Manager":
            console.log("You are a manager of people.");
            break;
        case "CEO":
            console.log("You are the CEO of the company.");
            break;
    }
};
describeRole(role);
