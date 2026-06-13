function ternaryoperatorcondition() {
    console.log("Ternary Operator Condition");
    let a = 10;
    let b = 20; 
    console.log("Conditional (Ternary) Operator:"+a+" & "+b);
    let result = a > b ? "a is greater than b" : "a is not greater than b"; // Conditional (Ternary) Operator
    console.log(result); // Output: "a is not greater than b"
    console.log("************************************");
};

function ifcondition() {
    console.log("If Condition");
    let a = 10;
    console.log("If Condition:"+a); 
    if (a > 5) {
        console.log("a is greater than 5");
    } else {
        console.log("a is not greater than 5");
    }   
    console.log("************************************");
};

function nestedifcondition() {
    console.log("Nested If Condition");
    let a = 10;
    let b = 20;
    console.log("Nested If Condition:"+a+" & "+b);
    if (a > 5) {
        if (b > 15) {
            console.log("Both a and b are greater than their respective thresholds");
        } else {
            console.log("a is greater than 5, but b is not greater than 15");
        }
    } else {
        console.log("a is not greater than 5");
    }
    console.log("************************************");
};

function switchcase() {
    console.log("Switch Case");
    let a = 230;
    console.log("Switch Case:"+a);
    switch (a) {
        case 5:
            console.log("a is 5");
            break;
        case 10:
            console.log("a is 10");
            break;
        default:
            console.log("a is not 5 or 10");
    }
    console.log("************************************");
};

ternaryoperatorcondition();
ifcondition();
nestedifcondition();
switchcase();