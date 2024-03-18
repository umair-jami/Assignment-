// q6:Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
//  name with whitespace characters
let personNameWithWhitespace = "\t\n   Umair   \n\t";
//  with the whitespace
console.log("Name with whitespace:", personNameWithWhitespace);
// Strip the whitespace from the name
let strippedName = personNameWithWhitespace.trim();
// stripping the whitespace
console.log("Stripped name:", strippedName);
export {};
