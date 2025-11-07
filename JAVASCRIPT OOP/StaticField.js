/* 

Materi 22: Static Field (Properti Milik Pabrik)

🤔 Pemahaman Dasar: Static Field (atau Properti Statis) adalah property yang "menempel" 
langsung pada Class (Pabrik), bukan pada instance (Produk).

Ini berarti, mhsRidho (produk) tidak memiliki properti ini. Mahasiswa (pabriknya) yang 
memilikinya.

🧠 Pola Pikir Logika (Data Perusahaan vs Data Karyawan): Bayangkan sebuah class 
Karyawan.
    Instance Field (this.nama): Ini adalah data spesifik milik setiap karyawan. karyawanA punya nama "Ridho", karyawanB 
    punya nama "Budi". Setiap produk punya datanya sendiri.
    Static Field (static namaPerusahaan = "Google"): Ini adalah data milik perusahaan 
    (Pabrik) itu sendiri. Data ini hanya ada satu dan dibagi oleh semua. karyawanA bekerja di 
    "Google", karyawanB juga bekerja di "Google".

Kapan kita pakai static?
1. Untuk Konstanta: Data yang tidak berubah, seperti Math.PI (3.14159...)
2. Untuk Konfigurasi: Pengaturan yang berlaku untuk semua objek.
3. Untuk Counter (Penghitung): "Berapa total produk yang sudah dibuat oleh pabrik ini?"

Aturan Emas:
    Untuk mengakses properti instance (non-static), kita pakai this (misal: this.nama).
    Untuk mengakses properti static, kita pakai Nama Class (misal: 
    Mahasiswa.totalMahasiswa).

*/

class Mahasiswa {
    // 1. Ini adalah "Properti Milik Pabrik"
    //    Hanya ada SATU di memori, menempel di 'Mahasiswa'.
    static totalMahasiswa = 0;

    // Properti instance (milik produk)
    nama;
    kampus;

    constructor(nama, kampus) {
        this.nama = nama;
        this.kampus = kampus;

        // 2. Setiap kali produk baru dibuat (constructor dipanggil)
        //    Kita 'naikkan' penghitung milik PABRIK.
        //    Perhatikan: Kita pakai 'Mahasiswa.totalMahasiswa', BUKAN 'this.totalMahasiswa'
        Mahasiswa.totalMahasiswa++;
    }
}

// --- Tes ---
console.log("Total mahasiswa (sebelum produksi):", Mahasiswa.totalMahasiswa);
// Output: 0

let mhsRidho = new Mahasiswa("Ridho", "UHO");
let mhsBudi = new Mahasiswa("Budi", "UGM");
let mhsAni = new Mahasiswa("Ani", "UI");

console.log("Total mahasiswa (setelah produksi):", Mahasiswa.totalMahasiswa);
// Output: 3

// --- TES KEGAGALAN (PENTING!) ---
// Produk (instance) TIDAK punya properti ini.
console.log(mhsRidho.totalMahasiswa);
// Output: undefined