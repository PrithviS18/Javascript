
// Appending a new Element within another Element 
const newParagraph= document.createElement('p');
newParagraph.innerText= "Debojit is Bhosdiwala";

const container=document.getElementById('container');
container.appendChild(newParagraph);
