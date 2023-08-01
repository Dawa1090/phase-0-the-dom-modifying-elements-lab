const main = document.querySelector("main")
main.remove()

let newHeader = document.createElement("h1");
newHeader.setAttribute ("id" , "victory")

newHeader.innerHTML = "Dawa is the champion"; 

document.body.appendChild(newHeader); 