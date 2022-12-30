let value1 = 5654
let value2 = 6521
let operator =(prompt(`Enter operator`))

if (operator == "+"){
    console.log(value1 + value2);
} else if ( operator == "-" ){
console.log(value1 - value2);
} else if (operator == "*") {
    console.log(value1 * value2);
} else if (operator == "/") {
    console.log(value1 / value2);
}else {
    console.log("Wrong input");
}

