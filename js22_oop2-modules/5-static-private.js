//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
  // Private Property

//   static veriables are called class veriables too.
  #id = "123456";
  static counter = 0
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.#id = "111";

    Book.counter++
  }
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year}. Before ${this.#computeAge()} years ago`;
  }
  // You can read the private veriables with the help of public methods

  getId() {
    return this.#id;
  }
  setId(id) {
    this.#id = id;
  }
  #computeAge(){
return new Date().getFullYear() - this.year
  }
}

Book.prototype.counter = 0

const book1 = new Book("Kasagi", "Ömer Seyfettin", 1920);
console.log(book1);

// Private degiskenin    degeri class disindan dogrudan okunamaz
// console.log(book1.#id);

// book1.#id = "123456"

// console.log(book1.getId());
// console.log(book1.setId("4444"));
// // console.log(book1.#computetAge());
// console.log(book1.getSummary());


// // static
// book1.counter++
// console.log(book1);

// book2.counter++
// console.log(book2.counter);


console.log(book1.counter);

console.log(Book.counter);
const book2 = new Book("x", "Ömer y", 1440);
const book3 = new Book("x", "Ömer y", 1440);
const book4 = new Book("x", "Ömer y", 1440);
console.log(Book.counter);


