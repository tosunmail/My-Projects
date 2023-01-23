const input = document.getElementById("input-num");
const addBtn = document.querySelector(".convert");
const form = document.querySelector(".form");
const displayNumber = document.querySelector(".displayNumber");


//***** 1.kullanıcı sayı girmediğinde 5sn uyarı ver.
//***** 2.Girilen değeri 10 sn ekranda kalacak
//      3.Her girilen doğru değeri tablo halinde sıralayıp son girilen başa gelecek
//      4.Sayfayı re-load yaptıgında silinmeyecek.



const number=Number(input.value);
const convert=(number)=>{

  const roma={
    1000:"M",
    900:"CM",
    500:"D",
    400:"CD",
    100:"C",
    90:"XC",
    50:"L",
    40:"XL",
    10:"X",
    9:"IX",
    5:"IV",
    1:"I",
}

let result="";
for(let k in roma){
    
    while(number>=Number(k)) {
number-= k;
result+= roma[k]
    }
}
return result
}

form.addEventListener("submit", (e) =>{
    
    const number=Number(input.value);
    

    convert(number);
    e.preventDefault()
})