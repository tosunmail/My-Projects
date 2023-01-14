const h1 = document.querySelector("header h1");
console.log(h1);

h1.onmauseover = function () {
  h1.style.color = "red";
};
const langinput = document.getElementById("input");
let newList = null;
const buton = document.getElementById("btn");
const ul = document.createElement("ul");
buton.after(ul);
h1.onmauseout = () => {
  h1.style.color = "black";
};

const print = () => {
  document.write("PRINT");
};

// document.getElementById("btn").onclick = () => {
//     alert("Btn clicked")
// }

document.getElementById("btn").addEventListener("click", () => {
  console.log(langinput.value);
  !langinput.value ? alert("Please enter a language")
  
  :ul.innerHTML += `<li>${langinput.value}</i>`
  langinput.value = ""
  langinput.focus()
});

langinput.addEventListener("keydown", (event) =>{
    // console.log(event);
    if(event.code === "Enter"){
        buton.click()
    }

})
// window.onload = print();
window.addEventListener("load" , () => {
    langinput.focus()
    
} )
