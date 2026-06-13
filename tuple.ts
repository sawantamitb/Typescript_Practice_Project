// tuple example
let myname: string = "Amit";
let myage: number = 39;
let person: [string, number] = [myname, myage];
console.log("Using Tuple fixed order Array");
console.log("Person Details: "+person[0]+" "+person[1]);

myname = "Deepu";
myage = 36;
// update tuple with new values
person = [myname, myage];
console.log("Using Tuple fixed order Array");
for (const p of person)
	console.log("Person Details: " + p);



