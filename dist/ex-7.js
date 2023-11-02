"use strict";
// DIN UPPGIFT: Definiera en index signature för Dictionary-typen samt implementera funktionerna addWord och getDefinition. / 3 poäng
{
    function addWord(dictionary, word, definition) {
        myDictionary[];
        // Implementera funktionen så att den lägger till ordet och definitionen i ordboken (dictionary).
    }
    function getDefinition(dictionary, word) {
        // Implementera funktionen så att den returnerar definitionen av ordet (word) om det finns i ordboken (dictionary).
        // Om ordet inte finns ska funktionen returnera undefined.
    }
    // Testa funktionerna
    const myDictionary = {};
    addWord(myDictionary, "TypeScript", "A superset of JavaScript that adds static typing.");
    console.log(getDefinition(myDictionary, "TypeScript")); // Ska skriva ut "A superset of JavaScript that adds static typing."
    addWord(myDictionary, "JavaScript", "A dynamic programming language.");
    console.log(getDefinition(myDictionary, "JavaScript")); // Ska skriva ut "A dynamic programming language."
    console.log(getDefinition(myDictionary, "Java")); // Ska skriva ut undefined
}
