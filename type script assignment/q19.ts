// q19:Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// array of countries
const countries: string[] = [
    "Pakistan",
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Australia",
    "Brazil",
    "India",
    "China"
];

// Output 
console.log("List of countries:");
// countries.forEach(country => {
//     console.log(country);
// });
for(let name of countries){
    console.log(name)
}
