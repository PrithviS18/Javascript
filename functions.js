function sum(a,b){
    const sum=a+b;
    console.log("the result is",sum);
}
// this functions can be written anywhere and can be called before or after declaration

const square=function(a){
    return a*a;
}
// This type of functions should be called after the declaration only

// Nested functions
function addSquares(a,b){
    function Square(a){
        return a*a;
    }
    return Square(a)+Square(b);
}

const val=addSquares(3,4);
console.log("Sum of Squares of 3 and 4 are ",val);

console.log("The Square of",2,"is",square(2));
const a=5;
const b=6;
sum(a,b);
