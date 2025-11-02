/* 

Materi 17: Getter dan Setter di Class

🤔 Pemahaman Dasar: Getter dan Setter adalah method spesial yang "berpura-pura" menjadi 
property. Mereka mengizinkan kita menjalankan kode (seperti validasi) setiap kali sebuah 
properti dibaca atau ditulis.

    get (Mengambil/Membaca):
        Sebuah method yang dipanggil otomatis saat Anda mencoba membaca nilai properti.
        Contoh: console.log(mhsRidho.nama); akan memanggil get nama().

    set (Mengatur/Menulis):
        Sebuah method yang dipanggil otomatis saat Anda mencoba mengubah nilai properti.
        Contoh: mhsRidho.nama = "Budi"; akan memanggil set nama(value).

Siap! Mari kita lanjutkan.

Anda sudah berhasil membuat class yang rapi dan terstruktur (Orang dan Mahasiswa). Tapi, ada satu kelemahan besar pada class kita sejauh ini: Propertinya terlalu "polos".

Apa maksudnya? Coba lihat: let mhsRidho = new Mahasiswa("Ridho", "UHO", 3); Lalu di baris berikutnya, saya bisa saja melakukan ini: mhsRidho.semester = -5; Atau ini: mhsRidho.nama = "";

JavaScript akan mengizinkannya, tapi secara logika, data itu rusak dan tidak valid. Semester tidak mungkin negatif, dan nama tidak boleh kosong.

Objek kita butuh "Satpam" untuk memvalidasi data yang masuk. Inilah gunanya Getter dan Setter.

BAB 8: PROPERTI YANG CERDAS (GETTER & SETTER)
Materi 17: Getter dan Setter di Class
🤔 Pemahaman Dasar: Getter dan Setter adalah method spesial yang "berpura-pura" menjadi property. Mereka mengizinkan kita menjalankan kode (seperti validasi) setiap kali sebuah properti dibaca atau ditulis.

    get (Mengambil/Membaca):
        Sebuah method yang dipanggil otomatis saat Anda mencoba membaca nilai properti.
        Contoh: console.log(mhsRidho.nama); akan memanggil get nama().

    set (Mengatur/Menulis):
        Sebuah method yang dipanggil otomatis saat Anda mencoba mengubah nilai properti.
        Contoh: mhsRidho.nama = "Budi"; akan memanggil set nama(value).

🧠 Pola Pikir Logika (Satpam & Properti Pendukung): Setter adalah SATPAM Penjaga 
Pintu Masuk Data. Tugasnya adalah mencegat data baru (value) yang ingin masuk. Jika 
datanya jelek (misal semester = -5), Satpam akan menolaknya.

Getter adalah HUMAS (Hubungan Masyarakat). Tugasnya adalah mengambil data dari 
"dalam" dan menampilkannya ke "luar". Dia bisa memformat datanya dulu (misal: this.nama 
diubah jadi huruf besar semua) sebelum diberikan ke publik.

*/

class Produk {
    constructor(nama, harga) {
        // 1. Simpan data asli di properti pendukung
        this.nama = nama; // 'nama' tidak kita amankan, jadi bisa langsung
        this._harga = harga;
    }

    // 2. Ini adalah GETTER (Humas)
    // Dipanggil saat: console.log(produk.harga)
    get harga() {
        console.log("GETTER: Seseorang membaca harga...");
        // Mengembalikan data dari properti pendukung
        return `Rp ${this._harga.toLocaleString("id-ID")}`;
    }

    // 3. Ini adalah SETTER (Satpam)
    // Dipanggil saat: produk.harga = 50000
    set harga(hargaBaru) {
        console.log("SETTER: Seseorang mencoba mengubah harga...");

        // Logika Validasi (Tugas Satpam)
        if (typeof hargaBaru !== "number") {
            console.error("Error: Harga harus berupa angka!");
            return; // Ditolak!
        }
        if (hargaBaru < 0) {
            console.error("Error: Harga tidak boleh negatif!");
            return; // Ditolak!
        }

        // Jika lolos validasi, data baru disimpan
        console.log("Data diterima!");
        this._harga = hargaBaru;
    }
}

// --- Mari kita gunakan ---
let laptop = new Produk("Laptop Gaming", 15000000);

// --- Membaca (Memanggil GETTER) ---
console.log(laptop.harga);
// Output:
// GETTER: Seseorang membaca harga...
// Rp 15.000.000

// --- Menulis (Memanggil SETTER) [GAGAL] ---
console.log("---");
laptop.harga = -500;
// Output:
// SETTER: Seseorang mencoba mengubah harga...
// Error: Harga tidak boleh negatif!

// --- Cek lagi (masih harga lama) ---
console.log(laptop.harga);
// Output:
// GETTER: Seseorang membaca harga...
// Rp 15.000.000

// --- Menulis (Memanggil SETTER) [BERHASIL] ---
console.log("---");
laptop.harga = 20000000;
// Output:
// SETTER: Seseorang mencoba mengubah harga...
// Data diterima!

console.log(laptop.harga);
// Output:
// GETTER: Seseorang membaca harga...
// Rp 20.000.000