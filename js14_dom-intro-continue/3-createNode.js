console.log("**** CREATE NODE ****");

const newPar = document.createElement("p");
const text = document.createTextNode("Bu bir p Elemetidir");
newPar.appendChild(text);
console.log(newPar);

const h2 = document.querySelector(".item-list h2");

h2.after(newPar);

const myInput = document.getElementById("input")
console.log(myInput.value);
newPar.id = "par";
newPar.className = "center pointer";

newPar.classList.add("bg-tomato")

if(!newPar.classList.contains("blue")){
    newPar.classList.add("blue")
}else{
    newPar.classList.add("orange")
}
 newPar.classList.toggle("white")

 console.log(newPar.getAttribute("class"));
 console.log(newPar.getAttribute("id"));
 console.log(newPar.getAttribute("name"));
 

 newPar.setAttribute("id" , "para")

 