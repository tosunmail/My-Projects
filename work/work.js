convert=(num)=> {
    let result = "";
    const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i = 0; i < decimal.length; i++) {
        while (num >= decimal[i]) {
            result += romanNum[i];
            num -= decimal[i];
        }
    }
return result
}
console.log(convert(55))



// supports only 1-40

// const converter = document.querySelector(".convert")
// const input = document.querySelector(".input")


//         function convert(num) { 
//     if(num < 1){ return "";}
//     if(num >= 40){ return "XL" + convert(num - 40);}
//     if(num >= 10){ return "X" + convert(num - 10);}
//     if(num >= 9){ return "IX" + convert(num - 9);}
//     if(num >= 5){ return "V" + convert(num - 5);}
//     if(num >= 4){ return "IV" + convert(num - 4);}
//     if(num >= 1){ return "I" + convert(num - 1);}  
//   }

//   console.log(convert(24));


