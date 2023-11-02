"use strict";
// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod.
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Obs! Detta ska vara en Node-applikation, så använd lämplig "fetch", axios eller liknande för att hämta data från API:et.
// Utifrån Zod-schemat ska du också skapa en typ för Pokemon (använd lämplig Zod-metod för detta). Du ska använda dig
// av den härlädda Pokemontypen i din kod. / Poäng: 8 poäng
// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);
*/
const Zod_1 = require("Zod");
const charmanderSchema = Zod_1.z.object({
    name: Zod_1.z.string(),
    height: Zod_1.z.number(),
    weight: Zod_1.z.number(),
});
function fetchLukeSkywalkerData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://pokeapi.co/api/v2/pokemon/charmander");
            if (!response.ok) {
                throw new Error("Gick inte ansluta");
            }
            const data = yield response.json();
            // Validerar api svaret med var schmea
            const validatedData = charmanderSchema.parse(data);
            return validatedData;
        }
        catch (error) {
            console.error("Fel vid validering av data", error);
            return null;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const charmander = yield fetchLukeSkywalkerData();
        if (charmander) {
            writeToDb(charmander);
        }
        else {
            console.log("Gick inte validera");
        }
    });
}
main();
function writeToDb(charmander) {
    const weightInKg = charmander.weight / 10;
    const heightInM = charmander.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);
    return console.log("Log", charmander, "the bmi is:", bmi);
}
