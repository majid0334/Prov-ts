// DIN UPPGIFT: Skapa en ny typ från den befintliga typen Student. Använd olika Utility Types för att lösa uppgifterna. / 3 poäng

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  age?: number;
  email: string;
  address?: string;
};

//1. Skapa en typ PartialStudent som representerar ett objekt där alla fält i Student är valfria.
type PartialStudent = Partial<Student>;
const studentOne: PartialStudent = {};
//2. Skapa en typ RequiredStudent där alla fält i Student ska vara obligatoriska.
type RequiredStudent = Required<Student>;
const studentTwo: RequiredStudent = {
  id: 1,
  firstName: "Majid",
  lastName: "Moradi",
  age: 20,
  email: "rmofeojmfer@gmail.com",
  address: "fefererg",
};
//3. Skapa en typ StudentWithoutAddress som är lik Student, men utan address-fältet.
type StudentWithoutAddress = Omit<Student, "adress">;
const studentThree: StudentWithoutAddress = {
  id: 1,
  firstName: "Majid",
  lastName: "Moradi",
  age: 20,
  email: "rmofeojmfer@gmail.com",
};
//4. Skapa en typ StudentName som enbart inkluderar fälten firstName och lastName från Student.
type StudentwithNameLastname = Pick<Student, "firstname" & "lastname">;
const studentFour: StudentwithNameLastname = {
  firstName: "Majid",
  lastName: "Moradi",
};
// Obs! Om du hellre vill använda interface istället för type går det bra att byta.
