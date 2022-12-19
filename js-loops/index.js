
for (let i = 95 ; i <= 100 ; i++){
    console.log(i);
}
 

for (let k = 0 ; k == 10 ; k++){
    console.log(k);
}

// const n = Number(prompt("Enter a number"))
// let sum = 0
// for (let b = 1 ; b <= n ; b++)  {
//     sum = sum + b
// }
// console.log("Sum:" , sum);

// const num = Number(prompt("Enter a number"))

// for (let j = 1 ; j <= num; j++) {
//  const randomNum = Math.round(Math.random() * 100)
//  console.log(`${j}. random number ${randomNum}`);
// }

let isprime = true

const primenumber = Number(prompt(`Enter a number`))
for (let i = 2 ; i < primenumber; i++){
    if (primenumber % i === 0){
        console.log(`${primenumber} is not a prime number`);
        isprime = false
        break
    }
}
if (isprime === true)
console.log(`${primenumber} is a prime number`);
 let count = 1
 while (count <= 10){
 console.log("count:" , count);
 count++
}