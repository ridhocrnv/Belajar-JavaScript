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

Metode ini digunakan ketika Anda ingin "Menemukan dan mengambil hasil yang cocok."

Tujuan: Mengekstrak (mengambil) data yang cocok dengan pola.
Sintaks: stringYangDiuji.match(polaRegex)
Hasil (Return Value):
    Jika tidak ada yang cocok: Mengembalikan null.

    Jika ada yang cocok: Mengembalikan sebuah Array yang berisi informasi kecocokan. 
    (Jika polanya memiliki flag g (global), ia akan mengembalikan array berisi semua 
    kecocokan).

Contoh: Katakanlah kita ingin menemukan semua angka dalam sebuah kalimat. Kita akan 
menggunakan flag g (global) agar tidak berhenti setelah menemukan angka pertama.

let kalimat = "Harga barang itu Rp15000, dikirim dari 17001.";
let polaAngka = /\d+/g; // \d+ (satu digit atau lebih), g (global, cari semua)

let hasil = kalimat.match(polaAngka);

console.log(hasil); // Output: [ "15000", "17001" ]

Contoh (tanpa g): Jika kita tidak pakai g, .match() akan berhenti di temuan pertama dan 
memberi kita info detail.

let kalimat = "Harga barang itu Rp15000.";
let polaAngka = /\d+/; // Tanpa 'g'

let hasil = kalimat.match(polaAngka);

console.log(hasil);

[
  "15000",       // 0: Teks yang cocok
  index: 17,     // index: Posisi (indeks) kecocokan dimulai
  input: "...",  // input: String aslinya
  groups: undefined
]

Ingat: .match() dipanggil pada String-nya, dengan Regex sebagai argumen.

Kapan Menggunakan yang Mana?

Ini adalah ringkasan sederhananya:
    Gunakan .test() jika Anda hanya butuh jawaban Ya / Tidak.
        "Apakah email ini valid?"
        "Apakah password ini memenuhi kriteria?"
        "Apakah ini kode pos?"
    Gunakan .match() jika Anda perlu mengambil datanya.
        "Ambil semua email dari teks ini."
        "Pisahkan string ini berdasarkan koma." (Meskipun .split() lebih umum di sini)
        "Temukan semua tagar (#tag) dalam tweet ini."

*/

let polaKodePos = /^\d{5}$/;

let kodeBenar = "93231";
let kodeSalah = "ABCDE";
let kodeTerlaluPanjang = "123456";

console.log(polaKodePos.test(kodeBenar));          // Output: true
console.log(polaKodePos.test(kodeSalah));         // Output: false
console.log(polaKodePos.test(kodeTerlaluPanjang));  // Output: false

let kalimat = "Harga barang itu Rp15000, dikirim dari 17001.";
let polaAngka = /\d+/g; // \d+ (satu digit atau lebih), g (global, cari semua)

let hasil = kalimat.match(polaAngka);

console.log(hasil); // Output: [ "15000", "17001" ]

let kalimat2 = "Harga barang itu Rp15000.";
let polaAngka2 = /\d+/; // Tanpa 'g'

let hasil2 = kalimat2.match(polaAngka2);

console.log(hasil2);