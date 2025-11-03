/* 

Materi 19: Private Class Field (#)

🤔 Pemahaman Dasar: Private Class Field adalah property (field) yang benar-benar pribadi. 
Ia menggunakan tanda pagar (#) di depan namanya.

Aturan Emas: Properti yang diawali dengan # (contoh: #energi) HANYA bisa diakses dari 
dalam blok class { ... } itu sendiri.

Jika Anda mencoba mengaksesnya dari luar (seperti kucingGarong.#energi), JavaScript tidak 
akan mengizinkannya. Ini bukan undefined, ini adalah Syntax Error. Temboknya kokoh.

🧠 Pola Pikir Logika (Brankas & Teller Bank): 
Ini adalah pasangan sempurna untuk Getter dan Setter.

    #energi (Private Field): Ini adalah Brankas (Vault) Anda. Datanya tersimpan aman di sini. 
    Tidak ada orang luar yang bisa menyentuhnya.

    get energi() (Public Getter): Ini adalah Teller Bank (Satpam/Humas) yang boleh Anda 
    ajak bicara. Saat Anda bertanya, "Pak Teller, berapa energi saya?", Teller akan masuk ke 
    dalam, melihat Brankas (#energi), lalu kembali dan memberitahu Anda.

    set energi() (Public Setter): Ini juga Teller Bank. Saat Anda bilang, "Pak Teller, saya mau 
    tambah energi", Anda memberikan data (value) ke Teller. Teller (Setter) akan melakukan 
    validasi (cek datanya valid atau tidak) sebelum dia diizinkan masuk dan mengubah isi 
    Brankas (#energi).

*/

class Kucing {
    // 1. Ini adalah "Brankas" (Private)
    #energi = 100;

    // 2. Ini adalah properti publik biasa
    nama;

    constructor(nama) {
        this.nama = nama;
    }

    // 3. Method internal BISA mengakses #energi
    main() {
        if (this.#energi < 10) {
            console.log(this.nama + " terlalu lelah untuk bermain.");
            return;
        }
        this.#energi -= 10;
        console.log(this.nama + " bermain... Energi sisa: " + this.#energi);
    }

    // 4. Kita buat "Teller" (Getter) publik
    get sisaEnergi() {
        // Getter boleh membaca data private
        return this.#energi;
    }
}

// --- Tes ---
let kucingGarong = new Kucing("Garong");

kucingGarong.main(); // Output: Garong bermain... Energi sisa: 90
console.log(kucingGarong.sisaEnergi); // Output: 90 (Lewat Getter)

// --- TES KEAMANAN (INI AKAN GAGAL!) ---
try {
    kucingGarong.#energi = 9999; // Mencoba merusak data
} catch (error) {
    console.error(error);
    // Output: SyntaxError: Private field '#energi' must be 
    // declared in an enclosing class
}

console.log(kucingGarong.sisaEnergi); // Output: 90 (Data aman, tidak berubah)