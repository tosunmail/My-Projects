




const btn1 = document.querySelector(".btn1")
const img1 = document.querySelector(".img1")

const btn2 = document.querySelector(".btn2")
const img2 = document.querySelector(".img2")

const btn3 = document.querySelector(".btn3")
const img3 = document.querySelector(".img3")

const btn4 = document.querySelector(".btn4")
const img4 = document.querySelector(".img4")

const btn5 = document.querySelector(".btn5")
const img5 = document.querySelector(".img5")


// btn1.addEventListener("click", ()=>{
//     console.log("done");
    
//     console.log(img1);
//     img1.classList.toggle("transition")
    
// })

const buttons = document.querySelectorAll('.btn').forEach(item =>{
    console.log(item);
    item.addEventListener("click", (event)=>{
        console.log(event);
        console.log(event.target);
        event.target.classList.toggle("transition")
    })

})
console.log(buttons);


// btn2.addEventListener("click", ()=>{
//     console.log("done");
//     img2.style.display = "block"
// })

// btn2.addEventListener("dblclick", ()=>{
//     if (img2.style.display == "block"){
//       img2.style.display = "none"  
//     }
//     if (img2.style.display = "none"){
//         img2.style.display = "none"  
//     }
// })





// btn3.addEventListener("click", ()=>{
//     console.log("done");
//     img3.style.display = "block"
// })

// btn3.addEventListener("dblclick", ()=>{
//     if (img3.style.display == "block"){
//       img3.style.display = "none"  
//     }
//     if (img3.style.display = "none"){
//         img3.style.display = "none"  
//     }
// })





// btn4.addEventListener("click", ()=>{
//     console.log("done");
//     img4.style.display = "block"
// })

// btn4.addEventListener("dblclick", ()=>{
//     if (img4.style.display == "block"){
//       img4.style.display = "none"  
//     }
//     if (img4.style.display = "none"){
//         img4.style.display = "none"  
//     }
// })




// btn5.addEventListener("click", ()=>{
//     console.log("done");
//     img5.style.display = "block"
// })

// btn5.addEventListener("dblclick", ()=>{
//     if (img5.style.display == "block"){
//       img5.style.display = "none"  
//     }
//     if (img5.style.display = "none"){
//         img5.style.display = "none"  
//     }
// })




