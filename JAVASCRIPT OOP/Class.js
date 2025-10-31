/* 

Materi 10: Class

🤔 Pemahaman Dasar:class adalah sintaks modern (diperkenalkan di ES6) untuk membuat 
"Cetakan" (Blueprint).

PENTING: class BUKANLAH FITUR BARU.
class hanyalah "Gula Sintaksis" (Syntactic Sugar).

Ini berarti, di balik layar, class tetap menggunakan Constructor Function dan Prototype 
yang baru saja kita pelajari. class hanya "membungkus" kerumitan itu agar terlihat lebih rapi 
dan mirip dengan bahasa OOP lain (seperti Java atau C++).

🧠 Pola Pikir Logika (Perbandingan): Mari kita lihat betapa rapinya class dibandingkan cara 
lama (function + prototype).

*/

// Cara lama (Prototype)
function Kucing(nama) {
    this.nama = nama;
    this.energi = 100;
}

Kucing.prototype.mengeong = function () {
    console.log(`Meow, saya kucing ${this.nama}`);
}

Kucing.prototype.main = function () {
    this.energi -= 10;
}

// Cara baru (Class)
class Harimau {
    constructor(nama, warna) {
        this.nama = nama;
        this.warna = warna;
        this.energi = 100;
    }

    bersuara() {
        console.log(`Ghrrr, saya adalah harimau ${this.nama}`);
    }

    bermain() {
        this.energi -= 25;
        console.log(`Harimau ${this.nama} sedang bermain. Sisa energi ${this.energi}`);
    }
}

// Jauh lebih bersih, bukan? Semuanya terbungkus rapi di dalam class Kucing { ... }.

let harimauSumatra = new Harimau("Sumatra", "Oranye Hitam");
let harimauSiberia = new Harimau("Siberia", "Putih Hitam");

harimauSumatra.bersuara();
harimauSiberia.bermain();

console.log(harimauSumatra.bersuara === harimauSiberia.bersuara);