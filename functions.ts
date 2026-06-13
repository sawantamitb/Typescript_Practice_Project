function Hi(){
    console.log('I am a function');
}

Hi();

function calculateTotal(price:number, quantity:number)
{
    return price * quantity;
}
console.log("The product cost: "+calculateTotal(100,5));

function greet(name:string, greetMessage?:string){
    if(greetMessage){
        return `Hi ${name}, ${greetMessage}`
    }
    else{
        return `Hi ${name}`
    }
}
console.log(greet("Amit","how are you?"));
console.log(greet('Deepu'));

function add(a:number, b:number=0)
{
    console.log(a + b);
}

add(1,2);
add(5);

// Arrow Function
const multiply = (a:number, b:number):number => a*b;
console.log(multiply(3,5));

type MatchOperation = (a:number, b:number) => number; 
const addNew:MatchOperation = (e,f) => e+f;
console.log(addNew(5,6));