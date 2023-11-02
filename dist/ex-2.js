"use strict";
// DIN UPPGIFT: Byt ut implicita any mot explicita typer och ändra felaktiga värden så att koden kompilerar utan några Typescript-felmeddelanden / 2 poäng
// Detta är ett program som slumpar fram aktiviteter för en grupp gäster :-)
let remainingGuests = 20;
while (true) {
    // Varje grupp ska ha mellan 5 och 10 gäster.
    const guestsToAssign = Math.floor(Math.random() * 5) + 5;
    let activity;
    let capacity;
    let requiresSupplies;
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            activity = "balloon animals";
            capacity = 5;
            requiresSupplies = true;
            break;
        case 1:
            activity = "face painting";
            capacity = "1";
            requiresSupplies = true;
            break;
        case 2:
            activity = "juggling";
            capacity = 3;
            requiresSupplies = true;
            break;
        default:
            activity = "dancing";
            capacity = 10;
            break;
    }
    console.log(`${guestsToAssign} of us will enjoy ${activity}.`);
    for (let i = 0; i < guestsToAssign; i += capacity) {
        console.log(`\t${capacity} will enter the ${activity} activity.`);
    }
    remainingGuests -= guestsToAssign;
    if (remainingGuests < 0) {
        break;
    }
    console.log(`We have ${remainingGuests} remaining guests to entertain.\n`);
}
console.log("We have entertained all of the guests!");
