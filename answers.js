const sayi = 31

if (sayi % 2 === 0){
    console.log(` ${sayi} sayi çift`);
} else if(sayi % 2 === 1) {
console.log(`${sayi} tek sayi`);
}

const gün = 5

switch (gün) {
    
    case 1:
        console.log(`pazartesi`);
        break;
    case 2:
        console.log(`sali`);
        break;
    case 3:
        console.log(`çarşammba`);
        break;
    case 4:
        console.log(`perşembe`);
        break;
    case 5:
        console.log(`cuma`);
        break;
    case 6:
        console.log(`cumartesi`);
        break;
    case 0:
        console.log(`pazar`);
        break;
    default:
        console.log(`invalid input`);
        break;
}
const note = 81
if (note > 100 || note < 0){
    console.log(`Geçerli not giriniz`);
} else if (note > 90){
console.log(`${note} AA`);
}
 else if (note > 80){
console.log(`${note} AB`);
}
 else if (note > 70){
console.log(`${note} BB`);
}
 
const year = +prompt(`Enter a year`)
if (year % 400 === 0){
    console.log(`leap year`);
} else if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`leap year`);
}else {
    console.log(`not a leap year`);
}




const ay = +prompt(`Ay giriniz`)
if (ay == 2){
    
}
