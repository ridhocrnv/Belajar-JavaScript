/* 

Modul 21: Mencari dan Mengganti (.replace())

Metode .replace() (milik String) adalah alat yang sangat ampuh. Sesuai namanya, metode ini 
digunakan untuk mencari sebuah pola (baik string biasa atau Regex) dan menggantinya dengan 
sesuatu yang lain.

    Sintaks Dasar: stringAsli.replace(polaYangDicari, teksPengganti)
    Hasil (Return Value): String baru yang sudah diganti. (String aslinya tidak berubah).

1. .replace() dengan String Biasa

Jika Anda menggunakan string biasa sebagai pencarian, ia hanya akan mengganti temuan 
pertama.

let kalimat = "Kucing itu mengejar kucing lain.";

let kalimatBaru = kalimat.replace("kucing", "anjing");

console.log(kalimatBaru);
// Output: Kucing itu mengejar anjing lain.
// (Hanya "kucing" kedua yang diganti, karena "Kucing" pertama beda huruf besar/kecil)

2. .replace() dengan Regex (Tanpa g)

Sama seperti string biasa, Regex tanpa flag g (global) juga hanya akan mengganti temuan 
pertama yang cocok.

let kalimat = "Saya suka kopi, kopi hitam, dan es kopi.";

// Ganti "kopi" dengan "teh"
let kalimatBaru = kalimat.replace(/kopi/, "teh");

console.log(kalimatBaru);
// Output: Saya suka teh, kopi hitam, dan es kopi.

3. .replace() dengan Regex (Pakai g)

Inilah kekuatan utamanya. Dengan menambahkan flag g (global), Anda memberi tahu 
.replace() untuk mengganti semua kecocokan yang ditemukan.

let kalimat = "Saya suka kopi, kopi hitam, dan es kopi.";

// Ganti SEMUA "kopi" dengan "teh"
let kalimatBaru = kalimat.replace(/kopi/g, "teh");

console.log(kalimatBaru);
// Output: Saya suka teh, teh hitam, dan es teh.

4. Flag i (Case-Insensitive)

Anda bisa menggabungkan flag g (global) dan i (insensitive) untuk mengganti semua 
kecocokan tanpa mempedulikan huruf besar/kecil.

let teks = "Email: test@email.com dan Kontak: TEST@EMAIL.COM";

// Ganti semua "test@email.com" (tanpa peduli huruf) dengan "[DIREDAKSI]"
let hasilRedaksi = teks.replace(/test@email\.com/gi, "[DIREDAKSI]");

console.log(hasilRedaksi);
// Output: Email: [DIREDAKSI] dan Kontak: [DIREDAKSI]

(Ingat: kita pakai \. untuk 'melarikan' (escape) karakter titik agar dianggap sebagai titik literal, 
bukan karakter 'apa saja').

*/

let kalimat = "Saya suka kopi, kopi hitam, dan es kopi.";

// Ganti SEMUA "kopi" dengan "teh"
let kalimatBaru = kalimat.replace(/kopi/g, "teh");

console.log(kalimatBaru);
// Output: Saya suka teh, teh hitam, dan es teh.

let teks = "Email: test@email.com dan Kontak: TEST@EMAIL.COM";

// Ganti semua "test@email.com" (tanpa peduli huruf) dengan "[DIREDAKSI]"
let hasilRedaksi = teks.replace(/test@email\.com/gi, "[DIREDAKSI]");

console.log(hasilRedaksi);
// Output: Email: [DIREDAKSI] dan Kontak: [DIREDAKSI]