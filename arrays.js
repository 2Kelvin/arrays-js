const helloStr = 'hello';

// creating an array from an iterable / array-like object (eg string)
const helloArray = Array.from(helloStr);
console.log(helloArray);

// checking if an arg is an array
console.log(Array.isArray(helloArray));

// return an array item at the given index
// negative indices count from the last going to the first just like in python
console.log(helloArray.at(-2));

// returns the function constructor (class) that created the array
console.log(helloArray.constructor);

const heyStr = 'hey';

// adding 2 arrays and returning a new concatenated array
console.log(helloArray.concat(heyStr));

// entries creates a dictionary for the array
// i.e. key and value pairs of the array items
for (const [k, v] of helloArray.entries()) {
    console.log(k, v);
}

// every method checks if ALL array items pass the test you are checking
// here Im checking if all array items are strings
console.log(helloArray.every((arrItem) => typeof arrItem === 'string'));

const newArr = ['a', 'b', 'c'];
const newArr2 = ['f', 'g', 'h'];

// fill() mutates the original array by replacing the array item's values with the given value
console.log(newArr.fill('new value'));
// you can even specify the indices to change like so
// the first index is the starting index to change
// the last index signifies to which index to change but not including
console.log(newArr2.fill('only here', 1, 3));

// filter() returns a shallow copy of the original array with the new items that have passed the filter check
const mixedArr = [9, 'boy', 'girl', {}, 'psych'];
// here I'm returning only string items from the original array
const filteredMixedArr = mixedArr.filter((eachArrItem) => typeof eachArrItem === 'string');
console.log(filteredMixedArr);

// finds the first item in the array that fits in the criteria you're looking for in the callback function
// findLast() works vice versa
console.log(mixedArr.find((x) => typeof x === 'number'));

// finds the first index of what we're looking for
// findLastIndex() works vice versa
console.log(mixedArr.findIndex((x) => typeof x === 'object'));

// iterate & perform an action on each array item
const nums = [4, 3, 9, 88, 322, 0];
const squaredNums = [];
nums.forEach((num) => {
    squaredNums.push(num * num);
});
console.log(squaredNums);

// check if a particular item is in an array
console.log(nums.includes(322));
