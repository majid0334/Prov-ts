// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

// 1. Ge ett exempel på en funktion med en generiskt typ.
function array<A extends []>(array: A[]): A[] {
  return array;
}

// 2. Ge ett exempel på en funktion med två generiska typer.
function yearModel<Y, M>(year: Y, model: M): { year: Y; model: M } {
  return { year, model };
}

const genericOne = yearModel("year", 2023);
const genericTwo = yearModel("model", "Volvo");

console.log(genericOne, genericTwo);
// 3. Ge ett exempel på ett interface med en generisk typ.
interface Car<C> {
  modelOrYear: C;
}

function checking<C>(check: C): C {
  return check;
}

const stringBox: Car<number> = { modelOrYear: 2012 };

const stringBox2: Car<string> = { modelOrYear: "BMW" };
console.log(checking(stringBox));
console.log(checking(stringBox2));
