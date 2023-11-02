// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest".
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen.
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng

// 1. Definerier enums för UserRoles Adming, Member och Guest
enum UserRole {
  Admin,
  Member,
  Guest,
}

interface User {
  name: string;
  role: UserRole;
}

// 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
function assignBadgeColor(user: User): void {
  if (user.role === UserRole.Admin) {
    console.log("Red");
  } else if (user.role === UserRole.Member) {
    console.log("Blue");
  } else if (user.role === UserRole.Guest) {
    console.log("Green");
  }
}

// Testa funktionen
const user1: User = { name: "Alice", role: UserRole.Admin };
console.log(assignBadgeColor(user1)); // Ska skriva ut "Red".
