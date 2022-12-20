
let count = 1
while (count <= 10){
console.log("Count:" , count);
count++
}

let grade = Number(prompt("Your Grade"))

while (grade < 0 || grade > 100){
    console.log("Grade should be 0-100");
    grade = Number(prompt("Your Grade"))
}
console.log("Your Grade : " , grade);

// if (grade < 0 || grade > 100){
// console.log("Incorrect Grade")
// }
