// 1.DOM- Document Object Model
//   Finding HTML Elements :
 
// 1. finding HTML Elements by ID:
const box2=document.getElementById('box-2');

console.log(box2);

// 2. finding HTML Elements by Div 
const divs= document.getElementsByTagName('div'); //maybe we access paragraphs spans etc
console.log(divs);

//3. finding HTML by class names
const boxes= document.getElementsByClassName('box');
console.log(boxes);

//4. finding elements by CSS Selectors
const random=document.querySelector('.container');
console.log(random);
