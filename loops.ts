interface NumberArray extends Array<number> {}

declare const array: NumberArray;
const objectArray: NumberArray = [1, 2, 3, 4, 5];

function forof(): void
{  
    for (const element of objectArray) 
    {
        console.log("Print the object values "+element);        
    }
}




function forloop(): void {
    for (let i: number = 0; i < 5; i++) {
        console.log(`For loop iteration: ${i}`);
    }
}

function whileloop(): void {
    let j: number = 0;
    while (j < 5) {
        console.log(`While loop iteration: ${j}`);
        j++;
    }
}

function dowhileloop(): void {
    let k: number = 0;
    do {
        console.log(`Do-while loop iteration: ${k}`);
        k++;
    } while (k < 5);
}

function foreach()
{
    console.log("Using For each");
    array.forEach((element: number): NumberArray => objectArray);
    console.log( array.forEach((element: number): NumberArray => objectArray));
}


forloop();
whileloop();
dowhileloop(); 
forof();
foreach();

