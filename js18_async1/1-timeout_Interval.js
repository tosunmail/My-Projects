//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const wait = (waitingTime) => {
//     const startTime = new Date().getTime()
//     while(new Date().getTime() < startTime + waitingTime) {}
// }

// console.time("myTimer")
// wait(2000)
// console.timeEnd("myTimer")
// console.log("fs13");

// console.log("hallo")
// console.log("start");
// setTimeout(()=> {
//     console.log("1 second");
// }, 1000)
// console.log("end");



//* Asenkron (setTimeout)
//*----------------------------------------------------

//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------



// console.log("timer started");
// let counter = 0
//  let sec1 = setInterval(() => {
//     console.log(++counter);
//     if (counter >= 10){
//         clearInterval(sec1)
//         console.log("timer stoped");
//     }
// }, 1000);

