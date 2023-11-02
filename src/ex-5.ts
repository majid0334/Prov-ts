// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type stockMeasurement = {
  day: string;
  price: number;
};

const getRisingStockDays = (
  stockMeasurements: stockMeasurement[]
): stockMeasurement[] =>
  stockMeasurements.filter((data: stockMeasurement) => data.price > 100);

const stockMeasurements: stockMeasurement[] = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: stockMeasurement[] =
  getRisingStockDays(stockMeasurements);
console.log(profitableDays);
