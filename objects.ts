const person1 = { 
    myname:"Amit",
    myage:25,
    isStudent:false
}
console.log(person1);

const person2 : {myname:string,myage:number,isStudent:boolean} = {
    myname:"Deepu",
    myage:35,
    isStudent:false
}
console.log(person2.myname+" "+person2.isStudent);

const contactInfo = {
    email: "playwrightdemo@gmail.com",
    phone: "12345"
}

const mergedPerson = {...person1, ...contactInfo}
console.log(mergedPerson);

console.log("Defining Type as Object");

type Person ={
    name: string,
    age: number
}

const emp:Person ={
    name: 'Alice',
    age: 25 
}

console.log(emp);