/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Kita punya pabrik Mobil. Sekarang kita butuh pabrik Truk. Truk adalah 
sebuah Mobil, tapi punya kapasitasBak.

Tugas 1 (Induk): Buat Constructor Function Mobil.

Parameter: merek dan warna.
Property: this.merek, this.warna, this.kecepatan = 0;.
Method: this.klakson = function() { console.log(this.merek + " berbunyi: Tiiiin!"); }

Tugas 2 (Anak): Buat Constructor Function Truk.

Parameter: merek, warna, dan kapasitasBak.
Logika (Pewarisan): Di dalamnya, panggil constructor Mobil dan kirimkan merek serta 
warna menggunakan .call().
Property Spesifik: Set this.kapasitasBak = kapasitasBak;.

Tes:

1. Buat objek: let trukHino = new Truk("Hino", "Hijau", "20 ton");
2. console.log(trukHino.merek); (Harus "Hino")
3. console.log(trukHino.kapasitasBak); (Harus "20 ton")
4. Panggil method warisan: trukHino.klakson(); (Harus "Hino berbunyi: Tiiiin!")

Kembangkan Sendiri (Problem Solving):
    Tantangan: Buat satu lagi "Anak" dari Mobil. Buat constructor Bus yang mewarisi merek dan warna, 
    tapi punya property spesifik jumlahKursi.

    Tes: Buat busMercedes dan buktikan dia punya merek dan jumlahKursi, serta bisa klakson().

*/

// INDUK
function Mobil(merk, warna) {
    this.merk = merk;
    this.warna = warna;
    this.kecepatan = 0;

    this.klakson = function () {
        console.log(`${this.merk} berbunyi: Tiiiiin!.`);
    };
}

// ANAK 1
function Truk(merk, warna, kapasitasBak) {
    // Memanggil resep Induk. INI KUNCINYA!
    Mobil.call(this, merk, warna);

    this.kapasitasBak = kapasitasBak;
}

// ANAK 2 (Tantangan)
function Bus(merk, warna, jumlahKursi) {
    // Memanggil resep Induk. Sempurna!
    Mobil.call(this, merk, warna);

    this.jumlahKursi = jumlahKursi;
}

// Produksi
let trukHino = new Truk("Hino", "Hijau", "20 Ton");
let busMercedes = new Bus("Mercedes", "Putih", "80 Kursi");

// Tes Truk
console.log(trukHino.merk); // Warisan
console.log(trukHino.kapasitasBak); // Milik sendiri
trukHino.klakson(); // Warisan

// Tes Bus
console.log(busMercedes.merk); // Warisan
console.log(busMercedes.jumlahKursi); // Milik sendiri
busMercedes.klakson(); // Warisan

console.log(trukHino.klakson === busMercedes.klakson);