/* Arithmetic Operators:
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Modulus (%)
- Exponentiation (**)       
Assignment Operators:
- Assignment (=)
- Addition Assignment (+=)
- Subtraction Assignment (-=)   
- Multiplication Assignment (*=)
- Division Assignment (/=)
- Modulus Assignment (%=)   
- Exponentiation Assignment (**=)
Comparison Operators:
- Equal (==)    
- Not Equal (!=)
- Strict Equal (===)    
- Strict Not Equal (!==)
- Greater Than (>)
- Less Than (<) 
- Greater Than or Equal (>=)
- Less Than or Equal (<=)
Logical Operators:  
- Logical AND (&&)
- Logical OR (||)
- Logical NOT (!)
Bitwise Operators:
- Bitwise AND (&)
- Bitwise OR (|)        
- Bitwise XOR (^)
- Bitwise NOT (~)
- Left Shift (<<)
- Right Shift (>>)
- Unsigned Right Shift (>>>)        
Assignment Operators:
- Bitwise AND Assignment (&=)
- Bitwise OR Assignment (|=)
- Bitwise XOR Assignment (^=)
- Left Shift Assignment (<<=)
- Right Shift Assignment (>>=)
- Unsigned Right Shift Assignment (>>>=)
Other Operators:
- Conditional (Ternary) Operator (condition ? expr1 : expr2)
- Comma Operator (,)
- Typeof Operator (typeof)
- Void Operator (void)
- Delete Operator (delete)
- Instanceof Operator (instanceof)
- In Operator (in)  
- Optional Chaining Operator (?.)
- Nullish Coalescing Operator (??)  
- Spread Operator (...)
- Rest Operator (...)   
- Type Assertion Operator (as)
- Non-null Assertion Operator (!)
- Await Operator (await)        
- Yield Operator (yield)
 */

function arithmeticOperators() {
    let a = 10;
    let b = 5;
    console.log("Arithmetic Operators:"+a+" & "+b);
    console.log(a + b); // Addition 
    console.log(a - b); // Subtraction
    console.log(a * b); // Multiplication
    console.log(a / b); // Division
    console.log(a % b); // Modulus
    console.log(a ** b); // Exponentiation
    console.log("************************************");
};

function assignmentOperators() {
    let a = 10;
    console.log("Assignment Operators:"+a);
    a += 5; // a = a + 5
    console.log(a); // Output: 15
    a -= 3; // a = a - 3
    console.log(a); // Output: 12
    a *= 2; // a = a * 2
    console.log(a); // Output: 24           
    a /= 4; // a = a / 4
    console.log(a); // Output: 6
    a %= 5; // a = a % 5
    console.log(a); // Output: 1
    a **= 3; // a = a ** 3
    console.log(a); // Output: 1
    console.log("************************************");
};

function comparisonOperators() {
    let a = 10;
    let b = 5;
    console.log("Comparison Operators:"+a+" & "+b);
    console.log(a == b); // Equal
    console.log(a != b); // Not Equal
    console.log(a === b); // Strict Equal
    console.log(a !== b); // Strict Not Equal
    console.log(a > b); // Greater Than
    console.log(a < b); // Less Than
    console.log(a >= b);    // Greater Than or Equal
    console.log(a <= b); // Less Than or Equal
    console.log("************************************");
};

function logicalOperators() {
    let a = true;
    let b = false;
    console.log("Logical Operators:"+a+" & "+b);
    console.log(a && b); // Logical AND
    console.log(a || b); // Logical OR
    console.log(!a); // Logical NOT
    console.log("************************************");
};  

function bitwiseOperators() {
    let a = 5; // 0101 in binary
    let b = 3; // 0011 in binary
    console.log("Bitwise Operators:"+a+" & "+b);
    console.log(a & b); // Bitwise AND
    console.log(a | b); // Bitwise OR
    console.log(a ^ b); // Bitwise XOR
    console.log(~a); // Bitwise NOT         
    console.log(a << 1); // Left Shift
    console.log(a >> 1); // Right Shift
    console.log(a >>> 1); // Unsigned Right Shift
    console.log("************************************");
};

async function otherOperators() {

    console.log("Conditional (Ternary) Operator");
    let condition = true;
    let expr1 = "Condition is true";    
    let expr2 = "Condition is false";
    console.log(condition ? expr1 : expr2); // Conditional (Ternary) Operator
    
    console.log("Comma Operator");
    let x = (console.log("Comma operand left side 1"), console.log("Comma operand left side 2"), 3); // Comma Operator
    console.log(x); // Output: 3
   
    console.log("Typeof Operator");
    console.log(typeof expr1); // Typeof Operator
   
    console.log("void Operator");
    console.log(void 0); // return undefined
   
    console.log("Delete Operator");
    let obj: { name: string; age?: number } = { name: "Alice", age: 30 };
    console.log(delete obj.age); // Delete Operator
    console.log(obj);   // Output: { name: "Alice" }

    console.log("Instanceof and In Operators");
    console.log(obj instanceof Object); // Instanceof Operator
    console.log("name" in obj); // In Operator

    console.log("Optional Chaining Operator");
    let nestedObj = { a: { b: { c: 42 } } };
    console.log(nestedObj?.a?.b?.c);

    console.log("Nullish Coalescing Operator");
    let value = null;
    console.log(value ?? "Default Value"); // Nullish Coalescing Operator

    console.log("Spread Operator"); 
    let arr = [1, 2, 3];
    console.log(...arr); // Spread Operator for copy the array
    const newArr = [...arr, 4, 5]; // Spread Operator for merge arrays
    console.log(newArr); // Output: [1, 2, 3, 4, 5]

    console.log("Rest Operator");
    function sum(...numbers: number[]) {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    }       
    console.log(sum(1, 2, 3)); // Rest Operator

    console.log("Type Assertion Operator");
    let str: any = "Hello";
    console.log(str as string); // Type Assertion Operator

    console.log("Non-null Assertion Operator");
    let nullableValue: string | null = "Hello";
    console.log(nullableValue!);    // Non-null Assertion Operator

    console.log("Await Operator");
    async function asyncFunction() {
        return "Async Result";
    }       
    console.log(await asyncFunction()); // Await Operator

    console.log("Yield Operator");
    function* generatorFunction() {
        yield 1;    
        yield 2;
        yield 3;    
    }
    const generator = generatorFunction();
    console.log(generator.next().value); // Yield Operator
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log("************************************");
};


arithmeticOperators();
assignmentOperators();
comparisonOperators();
logicalOperators();
bitwiseOperators();
otherOperators();