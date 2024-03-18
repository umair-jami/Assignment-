// q12:Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// list of cars
let cars: string[] = ["Toyota Corolla", "Honda Civic", "BMW", "Tesla"];

//with forEach method
cars.forEach(car => {
    console.log(`I would like to own a ${car}.`);
});

//with for of loop
for(let car of cars){
    console.log(`I would like to own a ${car}.`)
}
