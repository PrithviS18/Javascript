// Arrow Functions
// Type 1
const greet= ()=>{
    for (let i=1;i<=5;i++){
        console.log("Hello to Player",i);
    }
}
greet();

// Type 2
const square = (num) => num*num;
console.log("Square of 3 is ", square(3));
