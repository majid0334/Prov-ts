"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function array(array) {
    return array;
}
// 2. Ge ett exempel på en funktion med två generiska typer.
function yearModel(year, model) {
    return { year, model };
}
const genericOne = yearModel("year", 2023);
const genericTwo = yearModel("model", "Volvo");
console.log(genericOne, genericTwo);
function checking(check) {
    return check;
}
const stringBox = { modelOrYear: 2012 };
const stringBox2 = { modelOrYear: "BMW" };
console.log(checking(stringBox));
console.log(checking(stringBox2));
