// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

//* Diziden Veri Okuma-Yazma (indisleme)
//* ----------------------------------------------
//!  Diziden veri okuma

//!  Diziye veri yazma

//?================================================
//?  DIZIYI DEGISTIREN (MUTATOR) METOTLAR
//?================================================

//?================================================
//?             DIZI ERISIM METOTLARI
//?================================================


const names = ["emir", "oguzhan" , "levent" , "tarik", "sabata"]  
console.log(names)
console.log(names.length)

const x = 5.2354
console.log(x.toFixed(2));
console.log(typeof names);


const emptArr = []
console.log(emptArr);

const codingLangs = new Array("C", "C++" , "JS" , "GO")
console.log(codingLangs);

const numbers = new Array(3, 2 ,1)
console.log(numbers);
console.log(names[1]);


const tarik = names[3]
console.log(tarik);

console.log(names.at(-3));

// names[2] = "Levo"
names[2] = names[2].toUpperCase()
console.log(names);


const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.pop());
console.log(cars);

cars.push("Lexus")
console.log(cars);

console.log(cars.unshift("Merelez"));
console.log(cars);

console.log(cars.shift());
console.log(cars);

cars.splice(1,0,"VW")
console.log(cars);

cars.splice(3,1,"Maserati")
console.log(cars);


cars.reverse()
console.log(cars);

cars.sort()
console.log(cars);

