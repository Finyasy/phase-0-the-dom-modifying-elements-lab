// Write your code here!
document.querySelector('main').remove();

const newHeader = document.createElement("h1");

newHeader.setAttribute('id', 'victory');

const text = 'Bryan is the champion'
newHeader.innerHTML = text
