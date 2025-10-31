/* 

Materi 8: Prototype

🤔 Pemahaman Dasar: Setiap kali Anda membuat sebuah Constructor Function (misal: 
function Mobil() {}), JavaScript secara otomatis membuatkan satu "objek spesial" yang 
terikat padanya. Objek spesial ini disebut Prototype.

Mobil (Constructor) = "Pabrik / Cetakan"
Mobil.prototype = "Ruang Pameran / Ruang Bersama"

Bayangkan Mobil.prototype adalah sebuah "etalase" yang dimiliki oleh Pabrik Mobil.

Logika Sihir (Prototype Link): Setiap objek yang Anda buat dari pabrik itu (new Mobil()) 
secara otomatis mendapatkan sebuah "kartu akses rahasia" ke "Ruang Pameran" milik pabriknya.

trukHino dibuat dari Mobil.
Maka, trukHino punya "kartu akses" (__proto__) yang menunjuk langsung ke Mobil.prototype.

🧠 Pola Pikir Logika (Pencarian Rantai / Prototype Chain): Ini mengubah cara kerja JavaScript 
saat Anda memanggil method:

Saat Anda memanggil trukHino.klakson():

1. JavaScript bertanya: "Hei trukHino, apakah kamu punya klakson di dalam dirimu 
sendiri (sebagai this.klakson)?"
2. Jika Tidak Ada, JavaScript tidak menyerah. Ia bertanya: "Oke, mari kita cek 'kartu akses'
-mu. Siapa yang ada di trukHino.__proto__?"
3. Jawabannya adalah Mobil.prototype.
4. JavaScript mencari: "Hei Mobil.prototype (Ruang Pameran), apakah kamu punya klakson?"
5. Jika Ada, JavaScript akan menggunakan klakson yang ada di "Ruang Pameran" itu.

*/

function Mobil(merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this.kecepatan = 0;
}

Mobil.prototype.klakson = function () {
    console.log(`${this.merk} berbunyi: Tiiiinn!.`);
}

Mobil.prototype.tambahKecepatan = function (jumlah) {
    this.kecepatan += jumlah;
    console.log(`${this.merk} melaju, kecepatan ${this.kecepatan}.`);
}

function Truk(merk, warna, kapasitasBak) {
    Mobil.call(this, merk, warna);
    this.kapasitasBak = kapasitasBak;
}


function Bus(merk, warna, jumlahKursi) {
    Mobil.call(this, merk, warna);
    this.jumlahKursi = jumlahKursi;
}

Truk.prototype = Object.create(Mobil.prototype);
Bus.prototype = Object.create(Mobil.prototype);

let trukHino = new Truk("Hino", "Hijau", "20 Ton");
let busMercedes = new Bus("Mercedes", "Putih", "80 Kursi");

console.log(trukHino.merk);
console.log(busMercedes.merk);

trukHino.klakson();
busMercedes.klakson();