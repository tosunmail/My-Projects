console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------

const list  = document.querySelector("li")
console.log(list);
console.log(list.parentElement);
console.log(list.parentNode);
console.log(list.parentNode.parentNode.parentNode);
console.log(
    list.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
);

console.log(list.closest("section"));
console.log(list.closest("body").querySelector("header h1"));

//*2- Asagi Yonde traverse
//*----------------------------------------------

const addItem = document.querySelector(".add-item")
console.log(addItem.children);
console.log(addItem.children[0]);
addItem.children[0].style.color = "red"
//*3- Yatay Yonde traverse
//*----------------------------------------------
const ul = document.querySelector("ul")

console.log(ul);

const lists = ul.children
console.log(lists);
const js = lists[2]
console.log(js.innerText);
