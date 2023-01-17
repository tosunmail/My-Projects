// Değişkenler Variables

const yourChoice = document.getElementById("your-choice");
const pcChoice = document.getElementById("pc-choice");
const select = document.querySelector(".select");
let userSelect;
let pcRandom;

//score
const scoreYou = document.getElementById("you");
const scorePc = document.getElementById("pc");

// Modal Selectors
const resultDiv = document.querySelector(".result-msg");
const containerEl = document.querySelector(".container");
const modalEl = document.querySelector(".modal-container");
const modalBtn = document.querySelector("#modal-ok");

const final = document.getElementById("final")

// Event listeners

select.addEventListener("click", (e) => {
  // console.log(e.target.className)
  // console.log(e.target.getAttribute("alt"))
  if (e.target.getAttribute("alt")) {
    userSelect = e.target.getAttribute("alt");
    yourChoice.innerHTML = `<img src="./assets/${userSelect}.png"></img>`;
    pc();
  }
});

const pcArr = ["tas", "kagit", "makas"];

function pc() {
  pcRandom = pcArr[Math.floor(Math.random() * 3)];
  // console.log(pcRandom)
  pcChoice.innerHTML = `<img src="./assets/${pcRandom}.png"></img>`;
  result();
}

function result() {
  switch (userSelect) {
    case "tas":
      if (pcRandom == "kagit") {
        lost();
      } else if (pcRandom == "makas") {
        win();
      }

      break;

    case "kagit":
      if (pcRandom == "makas") {
        lost();
      } else if (pcRandom == "tas") {
        win();
      }
      break;
    case "makas":
      if (pcRandom == "tas") {
        lost();
      } else if (pcRandom == "kagit") {
        win();
      }
      break;


    default:
      break;
  }
  if (userSelect == pcRandom) {
    resultDiv.classList.add("active");
    resultDiv.innerHTML = "DRAW";
    containerEl.style.boxShadow = "3px 3px 10px 1px #FFC538";
    resultDiv.style.backgroundColor = "#FFC538";
  }
  if(scoreYou.innerHTML == "10") {
    final.innerHTML = `💃 You Win🕺`
    document.querySelector(".modal").style.backgroundColor = "#5AB7AC"
    modalBtn.style.color = "#5AB7AC"

  }
  if (scorePc.innerText == "10" || scoreYou == "10"){
    modal()
  }
}

function lost() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Lost";
  containerEl.style.boxShadow = "3px 3px 10px 1px #fb778b";
  resultDiv.style.backgroundColor = "#fb778b";
  scorePc.innerText++;
}
function win() {
  resultDiv.classList.add("active");
  resultDiv.innerHTML = "You Won";
  containerEl.style.boxShadow = "3px 3px 10px 1px #5AB7AC";
  resultDiv.style.backgroundColor = "#5AB7AC";
  scoreYou.innerText++;
}

function modal(){
    modalEl.classList.add("show")
}

modalBtn.addEventListener("click" , ()=>{
    modalEl.classList.remove("show")
    // modalEl.style.display = "none"
    window.location.reload()
})

let storagedScore = localStorage.getItem("highScore")
console.log(storagedScore);

let topScore

if(storagedScore){
topScore = `10 - ${storagedScore}`
}else{
    topScore = "0 - 0"
}
domTopScore.innerText = topScore
// kötü örnek

/* const tasImage = document.querySelector(".tas")
const kagitImage = document.querySelector(".kagit");
const makasImage = document.querySelector(".makas");

tasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/tas.png"></img>`
})

kagitImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/kagit.png"></img>`;
})

makasImage.addEventListener('click',(e)=>{
    console.log(e)
    yourChoice.innerHTML = `<img src="./assets/makas.png"></img>`;
}) */
