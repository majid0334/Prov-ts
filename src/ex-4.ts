// DIN UPPGIFT: Skapa en egen sammansatt typ Book som beskriver en bok. Byt ut any mot passande typer.
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng

type Book = {
  title: string;
  pages: number;
  authors: string[];
  price: number;
};

const book: Book = {
  title: "The secret",
  pages: 312,
  authors: ["John Doe", "Jane Doe"],
  price: 129,
};

const describeBook = (book: Book): void => {
  console.log(
    `The book "${book.title}" has ${book.pages} pages and costs ${book.price} dollar.`
  );
  book.authors.forEach((author: any) => {
    console.log(`Author: ${author}`);
  });
};

describeBook(book);
