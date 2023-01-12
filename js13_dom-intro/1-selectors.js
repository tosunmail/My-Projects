console.log("***** SELECTORS *****")

document.title = "DOM"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const myHeader = document.getElementById("header")
console.log(myHeader);
myHeader.style.color = "red"
myHeader.style.backgroundColor = "blue"

const button = document.getElementById("btn")
button.style.color = "yellow"
button.style.backgroundColor = "black"
button.style.padding = "0.7rem"
button.style.border = "none"
button.style.borderRadius = "10px"
button.style.fontSize = "20px"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const list = document.getElementsByTagName("li")
console.log(list);
 const header = document.getElementsByTagName("header")
 console.log(header[0]);


 list[3].textContent = "REACT / VUE"
 list[3].innerText = "REACT / VUE / Swelte"
 list[3].innerHTML = "REACT / VUE / Swelte / Angular"
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================


const itemList = document.getElementsByClassName("list")
console.log(itemList);
console.log(itemList);

const itemListArr = Array.from(itemList)
console.log(itemListArr);

console.log(...itemList);
[...itemList].forEach

const itemListSpread = [...itemList]
itemListSpread.forEach((x) => console.log(x))
itemListSpread.forEach((x) => console.log(x.style.color = "red"))

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

const myLi = document.querySelector("li")
console.log(myLi);
myLi.style.color = "purple"

const addItem  = document.querySelector(".add-item")
console.log(addItem);
addItem.style.border = "3px solid grey"


const addBtn = document.querySelector("#btn")
console.log(addBtn);
addBtn.style.cursor = "pointer"


const itemH2 = document.querySelector(".item-list h2")
console.log(itemH2);

const addBtnType = document.querySelector("input[type='button']")
console.log(addBtnType);
//* ========================================
//*              QUERYSELECTORALL()
//* ========================================


const lists = document.querySelectorAll("ul li") //? tagname
console.log(lists);

lists.forEach((li) => console.log(li.innerText))

console.log(document.querySelectorAll("section.item-list ul li:nth-child(4)")[0].innerText)
