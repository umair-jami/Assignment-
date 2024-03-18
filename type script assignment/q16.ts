// q16 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


//  guests
let Guests: string[] = ["Rumi", "Umair", "Akram", "Muhammad Ali", "Maryam", "Ayesha"];

//two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (Guests.length > 2) {
    let removedGuest = Guests.pop();
    console.log(`Sorry, ${removedGuest}, but we can't invite you to dinner.`);
}

//  two people still on the list, letting them know they're still invited
Guests.forEach(guest => {
    console.log(`Dear ${guest},\nYou're still invited to dinner. We look forward to seeing you.\nBest regards,\n`);
});

// Remove the last two names from the list to have an empty list
Guests.pop();
Guests.pop();

// Print the list to ensure it's empty
console.log("Updated guest list:", Guests);
