/* 

Materi 18: Public Class Field

🤔 Pemahaman Dasar: Public Class Field adalah sintaks baru untuk mendefinisikan property 
langsung di dalam class, di luar constructor.

Ini sangat berguna untuk property yang memiliki nilai default (nilai awal yang sama untuk 
semua objek).

🧠 Pola Pikir Logika (Daftar Inventaris): Bayangkan constructor adalah tempat untuk 
merakit barang-barang yang unik (yang datang dari parameter, seperti nama dan kampus).

Class Field adalah seperti "Daftar Inventaris" atau "Blueprint Bawaan" yang ditempel di atas 
class. Ini membuat class Anda jauh lebih mudah dibaca.

*/

class Pemain {
    // Public Class Fields (Daftar Inventaris)
    // Jelas terlihat!
    level = 1;
    skor = 0;
    energi = 100;

    // Constructor HANYA mengurus data unik (dari parameter)
    constructor(nama) {
        this.nama = nama;
    }
}

class Mobil {
    // Public Class Field untuk nilai default
    kecepatan = 0;

    // Constructor sekarang lebih bersih!
    // Hanya mengurus data yang 'unik' dari parameter.
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    tambahKecepatan(jumlah) {
        this.kecepatan += jumlah;
        console.log(`Kecepatan sekarang: ${this.kecepatan}`);
    }
}

// --- Tes ---
let mobilAvanza = new Mobil("Toyota", "Perak");
console.log(mobilAvanza.kecepatan); // Output: 0 (dari Class Field)
mobilAvanza.tambahKecepatan(50);   // Output: Kecepatan sekarang: 50
console.log(mobilAvanza); // Output: Mobil { kecepatan: 50, merk: 'Toyota', warna: 'Perak' }