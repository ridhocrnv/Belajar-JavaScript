/* 

Modul 12: Pencarian Array (Bagian 1): find & findIndex

1. Pemahaman Dasar (The "Why")

Inilah masalah kita: let users = [ {id: 1, ...}, {id: 2, ...}, {id: 3, ...} ]; Saya 
ingin mendapatkan objek utuh milik id: 2.
    Bagaimana jika kita pakai .filter()?
        users.filter(u => u.id === 2)
        Hasilnya: [ {id: 2, ...} ] -> Ini adalah Array yang berisi satu objek.
        Ini merepotkan. Saya harus mengambilnya lagi dengan hasil[0].
    
Logika Inti: Kita butuh perkakas yang lebih efisien. Sebuah "detektif" yang logikanya: "Cari 
di seluruh array. Begitu kamu menemukan satu yang cocok, berhenti mencari dan 
langsung berikan item itu padaku."

Problem Solving: .filter() itu seperti mengumpulkan semua tersangka. .find() itu 
seperti menangkap satu tersangka utama dan langsung pulang.

2. Penjelasan Inti (The "What")

Kita punya dua detektif dengan tugas berbeda:
1. .find(callbackFunction) (Si Detektif Item)
    Logika: "Berikan saya item PERTAMA yang lolos tes."
    Callback: Sama seperti filter, harus me-return true (lolos) atau false (tidak lolos).

Hasil:
    Jika true: Mengembalikan elemen itu sendiri (misal: {id: 2, ...}) dan 
    berhenti mencari.
    Jika tidak ada yang cocok: Mengembalikan undefined.

2. .findIndex(callbackFunction) (Si Detektif Posisi)
Logika: "Berikan saya index (posisi) PERTAMA dari item yang lolos tes."
Callback: Sama, return true atau false.

Hasil:
    Jika true: Mengembalikan angka index (misal: 1) dan berhenti mencari.
    Jika tidak ada yang cocok: Mengembalikan -1. (Ini sangat penting!)

*/

// 3. Contoh Kode & Logika
// Mari kita gunakan detektif kita pada data:

let users = [
    { id: 10, nama: "Budi" },
    { id: 25, nama: "Siti" },
    { id: 30, nama: "Aan" }
];

// --- Menggunakan .find() ---
// Tes: "Apakah id user adalah 25?"
let userSiti = users.find(function (user) {
    // Iterasi 1 (Budi): user.id === 25? (10 === 25?) -> false. Lanjut.
    // Iterasi 2 (Siti): user.id === 25? (25 === 25?) -> true.
    // BERHENTI MENCARI. Kembalikan item ini.
    return user.id === 25;
});

console.log(userSiti);
// Output: { id: 25, nama: "Siti" }  <-- Perhatikan: ini OBJEK, bukan array

// --- Menggunakan .findIndex() ---
// Tes yang sama
let indexSiti = users.findIndex(function (user) {
    // Iterasi 1 (Budi, index 0): false. Lanjut.
    // Iterasi 2 (Siti, index 1): true.
    // BERHENTI MENCARI. Kembalikan index ini.
    return user.id === 25;
});

console.log(indexSiti); // Output: 1

// --- Kasus Gagal ---
let userDewi = users.find(u => u.nama === "Dewi");
console.log(userDewi); // Output: undefined

let indexDewi = users.findIndex(u => u.nama === "Dewi");
console.log(indexDewi); // Output: -1

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya daftar produk di keranjang. Saya ingin mengubah nama produk dengan ID 
P-002 dari 'Buku' menjadi 'Buku Tulis' di array aslinya."

Pola Pikir (Problem Solving):
1. Tujuan: Mengubah data di dalam array asli.
2. Identifikasi: Untuk mengubah, saya harus tahu di mana lokasinya (index-nya).
3. Perkakas yang Tepat: .find() memberi saya salinan datanya, itu tidak membantu. Saya 
butuh posisinya. .findIndex() adalah perkakas yang tepat!
4. Rencana: a. Cari index dari produk dengan id === "P-002" menggunakan 
.findIndex(). b. Cek hasilnya. Jika bukan -1 (artinya ketemu): c. Akses produk itu 
langsung di array asli (daftarProduk[indexKetemu]) dan ubah datanya.

*/

let daftarProduk = [
    { id: "P-001", nama: "Pulpen" },
    { id: "P-002", nama: "Buku" },
    { id: "P-003", nama: "Penghapus" }
];

// Langkah 4.a: Cari index-nya
let indexTarget = daftarProduk.findIndex(function (produk) {
    return produk.id === "P-002";
});

// Langkah 4.b: Cek jika ketemu (index bukan -1)
if (indexTarget !== -1) {
    console.log(`Produk 'Buku' ditemukan di index ${indexTarget}`);

    // Langkah 4.c: Ubah data di array ASLI
    daftarProduk[indexTarget].nama = "Buku Tulis";

    console.log(daftarProduk);
} else {
    console.log("Produk tidak ditemukan.");
}