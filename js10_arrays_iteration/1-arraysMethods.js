//? ===============================================
//?           DIZI ERISIM METOTLARI
//? ===============================================

console.log("**** ACCESS ****");
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1"];

//* includes()
//*-----------------------------------------------------------

//* indexOf(), lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur. Bulunumazsa -1 dondurur.

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string'e cevirir.

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

//* slice(start, end) -- end exclusive
//*-----------------------------------------------------------

//* concat()
//*-----------------------------------------------------------

const strNumbers = numbers.join("-");
console.log(strNumbers);

let data = [3, 1, 5, 7, 8, 910, 22, 3];
data = data.sort((a, b) => b - a).join(" ");
console.log(data);

console.log(numbers.toString());

const cars = ["BMW", "Mercedez", "hyundai", "Fiat", "Anadol"];
console.log(cars.slice(2, 3));

const newCars = cars.slice(3, 4);
console.log(newCars, cars);

const message = ["The weather", "is", "very", "nice"];
const now = [new Date().toLocaleString()];
console.log(now);
const concatedMsg = message.concat(now, "JS Arrays").join(" ");
console.log(concatedMsg);

let sum = 0;
const grades = [55, 77, 23, 89, 100];
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log((sum / grades.length).toFixed(2));

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findstudent = (name) => {
  let counter = 0;
  for (let i in students) {
    if (name.toLowerCase() === students[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    return `${name} can not be found`;
  } else {
    `${name} found ${counter} times`;
  }
};

console.log(findstudent("mehmet"));
console.log(findstudent("ismet"));
console.log(findstudent("mehmet"));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlPrices = [100, 150, 100, 50, 80];

const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));
const dolarPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));

console.log(euroPrices, dolarPrices);