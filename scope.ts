// Global Scope
const globalVar = 10;

function randomFunction(){
    console.log(globalVar);
}
randomFunction();
// Local Scope
function random2(){
    const localVar = 20;
    console.log(localVar);
}
random2();
// Block Scope
if(true){
    const blockVar = 30;
    console.log(blockVar);
}