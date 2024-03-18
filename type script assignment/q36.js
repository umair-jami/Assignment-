//Question 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, msg) {
    console.log(`Size of Shirt: ${size}\n${msg}`);
}
makeShirt(40, 'I Love Typescript.(default msgs with too much large size).');
makeShirt(32, 'with medium size: Be kind, for everyone');
makeShirt(32, 'with different size: nice to meet you');
export {};
