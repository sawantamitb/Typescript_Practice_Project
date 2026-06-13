
// Example of an array in TypeScript
// Define an array of numbers & Accessing array elements
let numbers: number[] = [1, 2, 3, 4, 5];    
// Define an array of strings
let fruits: string[] = ['Apple', 'Banana', 'Cherry','Avocado'];
console.log("Define an array "+numbers);
console.log("Define an array "+fruits);
// Accessing array elements
console.log("Accessing array elements using index");
console.log(numbers[0]);
console.log(fruits[1]);

// Iterating over an array
console.log("Iterating over an array");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number at index ${i}: ${numbers[i]}`);
}   
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}   
// Adding elements to an array
console.log("Using push function");
numbers.push(6);
fruits.push('Date');
console.log(numbers);
console.log(fruits);


// pop() does not take any arguments; remove the last element
console.log("Using pop function");
numbers.pop();
fruits.pop();
console.log(numbers);
console.log(fruits);

console.log("Using concat function on array");
const morenumbers = numbers.concat([7,8]);
const moreFruits = fruits.concat(['X', 'Y']);
console.log(morenumbers);
console.log(moreFruits);

console.log("Using shift function on array");
numbers.shift();
fruits.shift();
console.log(numbers);
console.log(fruits);

console.log("Using unshift function on array");
morenumbers.unshift(10);
moreFruits.unshift('Z');
console.log(morenumbers);
console.log(moreFruits);

console.log("Using slice function on array");
const slicedNumbers: number[] = morenumbers.slice(0, 3);
console.log(slicedNumbers);
const slicedFruits: String[] = moreFruits.slice(0, 3);
console.log(slicedFruits);

console.log("Using map function on array");
const doublearray:number[] = numbers.map((num)=>num*10);
console.log(doublearray);
const doublearraystring:string[] = fruits.map((string)=>string+ " fruit");
console.log(doublearraystring);

console.log("Using filter function on array");
const numfilter:number[] = numbers.filter((num)=>num>2);
const fruitfilter:string[] = fruits.filter((str)=>str.includes('C'));
console.log(numfilter);
console.log(fruitfilter);

console.log("Using sorting");
const numsortdesc:number[] = [...numbers].sort((a,b)=> b-a);
const fruitssortdesc:string[] = [...fruits].sort((a,b)=>b.localeCompare(a));
console.log(numsortdesc);
console.log(fruitssortdesc);

console.log("Using Reduce");
const numreduce: number = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(numreduce);