// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod.
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.

// Obs! Detta ska vara en Node-applikation, så använd lämplig "fetch", axios eller liknande för att hämta data från API:et.
// Utifrån Zod-schemat ska du också skapa en typ för Pokemon (använd lämplig Zod-metod för detta). Du ska använda dig
// av den härlädda Pokemontypen i din kod. / Poäng: 8 poäng

// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/
import { promise, z } from "Zod";

const charmanderSchema = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.number(),
});

type CharmanderSchema = z.infer<typeof charmanderSchema>;

async function fetchLukeSkywalkerData(): Promise<CharmanderSchema | null> {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );
    if (!response.ok) {
      throw new Error("Gick inte ansluta");
    }
    const data = await response.json();
    // Validerar api svaret med var schmea
    const validatedData = charmanderSchema.parse(data);

    return validatedData;
  } catch (error) {
    console.error("Fel vid validering av data", error);
    return null;
  }
}

async function main() {
  const charmander = await fetchLukeSkywalkerData();
  if (charmander) {
    writeToDb(charmander);
  } else {
    console.log("Gick inte validera");
  }
}

main();

function writeToDb(charmander: CharmanderSchema) {
  const weightInKg = charmander.weight / 10;
  const heightInM = charmander.height / 10;
  const bmi = weightInKg / (heightInM * heightInM);
  return console.log("Log", charmander, "the bmi is:", bmi);
}
