// Write your code here!
const body = document.getElementsByTagName("body"); 
const main = document.getElementById("main");
main.remove();

const newHeader = document.createElement("h1");
//document.append(h1);
//const newHeader = document.getElementsByTagName("h1");
newHeader.id = "victory";
newHeader.textContent = "Vanessa is the champion";