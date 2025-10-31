/* 

🤔 Pemahaman Dasar: Constructor Function adalah cara tradisional (versi lama) di JavaScript 
untuk membuat "cetakan" objek.

Bayangkan ini adalah Pabrik Mobil.
    Pabriknya (function Mobil()) adalah cetakannya.
    Perintah new adalah tombol "Mulai Produksi".
    Setiap kali kamu menekan new Mobil(), satu mobil baru (objek) keluar dari pabrik.

Pola Pikir Logika:
    Constructor Function hanyalah function biasa.

    Aturan/Konvensi: Namanya selalu diawali dengan Huruf Besar (Contoh: Mobil, Siswa, 
    Kucing) agar kita tahu itu adalah sebuah cetakan, bukan fungsi biasa.

    Saat kita memanggilnya dengan kata kunci new, JavaScript secara ajaib melakukan 4 hal di 
    belakang layar:
        Membuat satu objek kosong baru ({}).
        Menjalankan fungsi cetakan itu.
        Di dalam fungsi, kata kunci this akan menunjuk ke objek kosong yang baru dibuat tadi.
        Secara otomatis mengembalikan (return) objek yang sudah diisi (this) tadi.

*/

// --- Blueprint / Cetakan ---
// (Nama diawali Huruf Besar)
function Mobil() {
    console.log("Pabrik sedang merakit mobil...");

    // 'this' adalah 'mobil baru' yang masih kosong
    // Kita 'tempelkan' property-nya (Sifat)

    this.merek = "Default"; // Kita beri nilai awal
    this.warna = "Hitam";
    this.kecepatan = 0;
}

// --- Produksi / Membuat Objek ---
// 'new' adalah perintah untuk "Jalankan Pabrik!"
let mobilSaya = new Mobil();
let mobilTetangga = new Mobil();

// --- Hasilnya ---
console.log(mobilSaya);
// Output: Mobil { merek: 'Default', warna: 'Hitam', kecepatan: 0 }

console.log(mobilTetangga.merek); // Output: Default

// Setiap objek adalah unik, mengubah satu tidak mengubah yang lain
mobilSaya.merek = "Toyota";
console.log(mobilSaya.merek); // Output: Toyota
console.log(mobilTetangga.merek); // Output: Default (tidak berubah)