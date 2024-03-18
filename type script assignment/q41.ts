//Question 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicians = [
    { name: "Umar Hayyat" },
    { name: "Morli" },
    { name: "Sultan Rahi" }
];
// Function to add "the Great" to each magician's name

function make_great(magicians:any) {
    //@ts-ignore
    magicians.forEach(magician => {
        magician.name = `The Great  "${magician.name}"`;
    });
}

function show_magicians(magicians:any) {
    //@ts-ignore
    magicians.forEach(magician => {
        console.log(magician.name);
    });
}


make_great(magicians);
// Call show_magicians() to display the modified list
show_magicians(magicians);
export {};