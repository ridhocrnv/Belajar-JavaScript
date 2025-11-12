/* 

Modul 18: Objek JSON (Hubungan dengan API)

1. Pemahaman Dasar (The "Why")

    API (Application Programming Interface) adalah "pelayan" di restoran (server). Anda 
    (frontend) memberikan pesanan, dan API (backend) membawakan makanan (data).

    Masalah: Saat pelayan (API) memberi Anda "makanan" (data), data itu harus ada dalam 
    "piring" standar yang bisa diterima semua orang (browser, aplikasi mobile, dll.).

    Logika Inti: JSON (JavaScript Object Notation) adalah "piring" standar itu. Ini adalah format 
    teks ringan yang berasal dari sintaks objek JavaScript, tapi sekarang menjadi bahasa data 
    universal yang dipahami semua bahasa pemrograman (Python, Java, PHP, dll).

2. Penjelasan Inti (The "What")

JSON adalah sebuah String (Teks). Itu poin terpenting.
Meskipun terlihat seperti objek JavaScript, ada 2 aturan ketat
    1. Semua Key (Kunci) HARUS pakai tanda kutip ganda ("). (Contoh: "nama" bukan nama)
    2. Tidak boleh ada data "canggih" seperti Map, Set, Date, atau function. Hanya boleh ada 
        string, angka, boolean, array, dan objek lain.

Untuk "mengemas" data kita ke JSON atau "membongkar" JSON, kita pakai objek global JSON 
(seperti Math).

    JSON.stringify(objek) (Si Pengemas 📦)
        Logika: Mengambil Objek/Array JavaScript Anda -> Mengubahnya menjadi String JSON.
        Kapan dipakai? Saat Anda mau MENGIRIM data ke server.

    JSON.parse(teksJSON) (Si Pembongkar 🔨)
        Logika: Mengambil String JSON (dari server) -> Mengubahnya kembali menjadi 
        Objek/Array JavaScript yang bisa dipakai.
        Kapan dipakai? Saat Anda MENERIMA data dari server/API.

*/

// Ini adalah OBJEK JavaScript
let dataUser = {
    id: 1,
    nama: "Budi",
    isStudent: true
};

console.log("Objek Asli:", dataUser);
console.log(dataUser.nama); // Output: Budi

// --- 1. MENGEMAS (Objek -> Teks) ---
// Kita akan kirim data ini ke server
let stringJSON = JSON.stringify(dataUser);

console.log("String JSON:", stringJSON);
// Output: "{\"id\":1,\"nama\":\"Budi\",\"isStudent\":true}"
// Perhatikan: Ini sekarang satu string utuh.
// console.log(stringJSON.nama); // Output: undefined (karena ini string!)

// --- 2. MEMBONGKAR (Teks -> Objek) ---
// Anggap 'stringJSON' adalah balasan yang kita terima dari API
let dataHasilParse = JSON.parse(stringJSON);

console.log("Objek Hasil Parse:", dataHasilParse);
// Output: { id: 1, nama: "Budi", isStudent: true }
// Ini kembali jadi objek JavaScript!
console.log(dataHasilParse.nama); // Output: Budi

// Data mentah (teks) yang diterima dari server/API
let dataMentahDariAPI = '{"id": 10, "nama": "Ridho"}';

// Kesalahan: Mencoba akses langsung (gagal!)
// console.log(dataMentahDariAPI.nama); // Output: undefined

// Solusi: Parse dulu!
let dataObjek = JSON.parse(dataMentahDariAPI);

// Sekarang baru bisa kita pakai
console.log(`Halo, ${dataObjek.nama}!`); // Output: Halo, Ridho!