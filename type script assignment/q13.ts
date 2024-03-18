// q13:Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner

//  guests list
let Guests: string[] = ["Umair", "Muhammad Ali", "Ayesha"];


Guests.forEach(guest => {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. Your presence would be an honor.\nBest regards`);
});
