// q15:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guests = ["Umair", "Muhammad Ali", "Ayesha"];
// message about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");
//new guest to the beginning of the array
Guests.unshift("Rumi");
//new guest to the middle of the array
let middleIndex = Math.floor(Guests.length / 2);
Guests.splice(middleIndex, 0, "AKram");
Guests.push("Izma");
// new set of invitation messages
Guests.forEach(guest => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. Your presence would be an honor.\nBest regards`);
});
export {};
