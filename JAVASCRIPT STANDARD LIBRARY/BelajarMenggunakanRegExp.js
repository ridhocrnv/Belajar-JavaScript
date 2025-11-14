/* 

Modul 20: Menggunakan RegExp (.test() & .match())

Bayangkan Regex Anda adalah sebuah "cetakan" (seperti cetakan kue). Metode-metode ini 
adalah cara Anda menggunakan cetakan itu pada "adonan" (string Anda).

1. Metode .test() (Metode Milik Regex)

Metode ini adalah cara tercepat untuk menjawab pertanyaan: "Apakah pola ini cocok (ada) di 
dalam string?"
    Tujuan: Hanya untuk memvalidasi. Apakah ada kecocokan atau tidak.
    Sintaks: polaRegex.test(stringYangDiuji)
    Hasil (Return Value): true (jika cocok) atau false (jika tidak cocok)

Contoh: Mari kita gunakan pola kode pos dari sebelumnya.

let polaKodePos = /^\d{5}$/;

let kodeBenar = "93231";
let kodeSalah = "ABCDE";
let kodeTerlaluPanjang = "123456";

console.log( polaKodePos.test(kodeBenar) );          // Output: true
console.log( polaKodePos.test(kodeSalah) );         // Output: false
console.log( polaKodePos.test(kodeTerlaluPanjang) );  // Output: false

    Ingat: .test() dipanggil pada Regex-nya, dengan string sebagai argumen.

2. Metode .match() (Metode Milik String)





*/