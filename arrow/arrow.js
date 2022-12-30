
// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** 3-ARROW ****")

//* ORNEK: Silindir Hacmi
//******************************************/

//? hacim = Pi x r x r x h

// const r = +prompt("r:")
// const h = +prompt("h:")

// const volume = (r, h = 1) => Math.PI * r * r * h

// console.log(`${r}, ${h} = Volume: ${volume(r, h).toFixed(4)}`)



// //? toPrecision(4) aldigi parametreye gore bir sayinin tam ve kesir
// //? kisimlarinin ne kadarini gosterilecegini belirlemek icin
// //? kullanilabilir. 4 degeri tam ve kesir icin toplam 4 basamak kullan demektir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toPrecision(4)}`)

// //? toExponential() ise bir sayinin bilimsel (10 uzeri) olarak
// //? gosterimesi icin kullanilabilir. Aldigi parametre ise kesirli
// //? kisimlarinin basamak sayini gosterir.
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toExponential(4)}`)



// const volumeLong = (r,h) => {
//     const result = Math.PI * r * r * h
//     console.log(object);
//     return result
// }
// console.log(`${r}, ${h} = Volume: ${volume(r, h).toExponential(4)}`)

// console.log("Age:", calculateAge(1935));

const calculateAge = (year) => new Date().getFullYear() - year

console.log("Age:", calculateAge(1990));

const fibo = (n) => {
    let fib1 = 1
    let fib2 = 1
    let sum = 0 
    for (let i = 2 ; i < n ; i++ ){
  sum = fib1 + fib2
  fib1 = fib2
  fib2 = sum
    }
    
    return sum
}

const n = +prompt("Please enter n")
if (n <= 0){
    console.log(`n should be bigger than 0`);

}
else {
    console.log(`fibonacci(${n}) = ${fibo(n)}`);
}
