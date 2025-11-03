/* 

Materi 20: Private Method (#)

🤔 Pemahaman Dasar: Private Method adalah method (fungsi) di dalam class yang 
menggunakan tanda pagar (#), sama seperti private field.

Aturan Emas (Sama Persis): Method yang diawali dengan # (contoh: #hitungIPK()) HANYA 
bisa dipanggil oleh method lain (publik atau privat) di dalam class itu sendiri.

Anda tidak bisa memanggilnya dari luar (seperti mhsRidho.#hitungIPK()). Ini akan 
menghasilkan Syntax Error.

🧠 Pola Pikir Logika (Koki & Resep Rahasia): Bayangkan sebuah class Restoran.
Public Method (pesanMenu(namaMenu)): Ini adalah Pelayan. Pelanggan (kode luar) 
berinteraksi dengannya. Pelanggan bilang, "Saya mau pesan Nasi Goreng Spesial".

Private Method (#buatBumbuRahasia()): Ini adalah Resep Rahasia Koki. Ini adalah 
langkah internal yang harus dilakukan restoran untuk membuat pesanan itu.

Logika: Pelanggan tidak bisa langsung pergi ke dapur dan bilang, "Hei Koki, buatkan saya 
bumbu rahasianya!" (restoran.#buatBumbuRahasia() -> GAGAL). Pelanggan hanya bisa 
memanggil Pelayan (restoran.pesanMenu("Nasi Goreng")). Kemudian, si Pelayan (method 
publik) akan masuk ke dapur dan secara internal memanggil Koki untuk menjalankan 
#buatBumbuRahasia().

Private method sangat bagus untuk "helper function" (fungsi pembantu) yang melakukan 
detail-detail kecil tapi penting.

*/

class Kucing {
    #energi = 100;
    nama;

    constructor(nama) {
        this.nama = nama;
    }

    // --- Ini adalah "Helper" Private ---
    #cekEnergiCukup(jumlah) {
        if (this.#energi < jumlah) {
            console.log(this.nama + " terlalu lelah... (Energi: " + this.#energi + ")");
            return false; // Tidak cukup
        }
        return true; // Cukup
    }

    // --- Ini adalah Method Publik ---
    main(durasi) {
        let energiDibutuhkan = durasi * 10; // main 1 jam = 10 energi

        // Method publik memanggil method private
        if (this.#cekEnergiCukup(energiDibutuhkan)) {
            this.#energi -= energiDibutuhkan;
            console.log(this.nama + " bermain... Energi sisa: " + this.#energi);
        }
    }
}

// --- Tes ---
let kucingMochi = new Kucing("Mochi");
kucingMochi.#energi = 20; // GAGAL (SyntaxError), datanya aman

kucingMochi.main(3); // Cek main 3 jam (butuh 30 energi)
// Method publik 'main' memanggil private '#cekEnergiCukup(30)'
// Output: Mochi bermain... Energi sisa: 70

kucingMochi.main(8); // Cek main 8 jam (butuh 80 energi)
// Method publik 'main' memanggil private '#cekEnergiCukup(80)'
// '#cekEnergiCukup' mengembalikan false
// Output: Mochi terlalu lelah... (Energi: 70)

// --- TES KEAMANAN (INI AKAN GAGAL!) ---
try {
    kucingMochi.#cekEnergiCukup(10); // Mencoba memanggil method private
} catch (error) {
    console.error(error);
    // Output: SyntaxError: Private field '#cekEnergiCukup' must be 
    // declared in an enclosing class
}