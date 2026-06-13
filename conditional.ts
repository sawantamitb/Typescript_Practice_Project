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
    let day = 3;
    let dayName: string;
    console.log("Switch Case:"+day);
    switch (day) {
        case 1:
            console.log("Day is Monday");
            dayName = "Monday";
            break;
        case 2:
            console.log("Day is Tuesday");
            dayName = "Tuesday";
            break;
        case 3:
            console.log("Day is Wednesday");
            dayName = "Wednesday";
            break;
        case 4:
            console.log("Day is Thursday");
            dayName = "Thursday";
            break;
        case 5:
            console.log("Day is Friday");
            dayName = "Friday";
            break;
        case 6:
            console.log("Day is Saturday");
            dayName = "Saturday";
            break;
        case 7:
            console.log("Day is Sunday");
            dayName = "Sunday";
            break;
        default:
            console.log("Invalid day");
            dayName = "Invalid day";
    }
    console.log(`Day Name is: ${dayName}`);
    console.log("Day Name is: "+dayName);
    console.log("************************************");
};

ternaryoperatorcondition();
ifcondition();
nestedifcondition();
switchcase();