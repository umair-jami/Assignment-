//Question 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames = ["Umar Hayyat", "Morli", "Akram Udas", "Sultan Rahi", "Thakur", "Pholo", "Shaka"]

function show_magicians (magician: string[]) {
    for(let i = 0; i < magicianNames.length; i++) {
        console.log(magicianNames[i]);
    }
}

show_magicians(magicianNames);