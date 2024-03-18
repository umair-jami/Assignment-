// q2:Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Umair raza";
// in lowercase
console.log("Lowercase:", personName.toLowerCase());
// in uppercase
console.log("Uppercase:", personName.toUpperCase());
// title case
let titleCaseName = personName.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
    return match.toUpperCase();
});
console.log(titleCaseName);
export {};
