let str = 'Hello World'
// for (i=0; i< str.length; i++){
//     console.log(str[i]);
// }
// for (i=0; i< str.length; i++){
//     console.log(str[i]);
// }
// for(i = str.length-1 ; i >=0; i--){
//     console.log(str[i]);
// }

// // alert("Hallo\tWorld")
// console.log("Hallo\nWorld")
// console.log("Hallo \\ World")
// console.log("Hallo\0World")




// console.log(str1.slice(1,5));
// console.log(str1.slice(-8,-4));
// console.log(str1.slice(-5,8));
// console.log(str1.slice(5));


// let str2 = str1.slice(1,5)
// console.log({str2});
// console.log(str1.substring(5,1));

let str1 = "Clarusway"
let str2 = "Full"
let str3 = "Stack"
const result = str1.concat(" Cohort 13 " , str2, " Js Session 8 ", str3)
console.log({result}, {str1});

let email = `tosunmaildir@gmail@.com`

// console.log(email.includes(`@`));

// if(email.includes('@')){
//     console.log("Email is valid");
// }else{
//     console.log("Invalid email");
// }
// if(email.indexOf('@') !== -1){
//     console.log("Email is valid");
// }else{
//     console.log("Invalid email");
// }


// console.log(email.indexOf("@"));

console.log(email.indexOf("@", email.indexOf("@")+1));
console.log(email.indexOf(".com", email.indexOf("@")+1));


