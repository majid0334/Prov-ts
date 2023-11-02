### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.
Interfaces: Interfaces kan användas för att implementera klasser. En klass kan implementera flera interfaces.
Types: type kan inte implementeras av klasser direkt
Valet mellan type och interface beror ofta på den specifika användningssituationen. Om du behöver utvidga datatyper och skapa hierarkier, är interfaces ofta ett bra val. Om du behöver jobba med unions, intersections, eller om du behöver använda typeof operatorn, är type ett bättre alternativ. Många utvecklare använder också en kombination av både type och interface i sina projekt beroende på kontexten.

//Med interface
interface BaseShape {
type: string;
}

//som att lägga till radius:number i baseshape när man använder sig av den Circle interfaces metoden
interface Circle extends BaseShape {
radius: number;
}

//Räknar ut are för circle
const circleArea = (circle: Circle) => {
return Math.PI \* circle.radius \*\* 2;
};

//Med typer
type BaseShape {
type: string;
}

//som att lägga till radius:number i baseshape när man använder sig av den Circle interfaces metoden
type Circle = BaseShape & {
radius: number;
}

//Räknar ut are för circle
const circleArea = (circle: Circle) => {
return Math.PI \* circle.radius \*\* 2;
};
