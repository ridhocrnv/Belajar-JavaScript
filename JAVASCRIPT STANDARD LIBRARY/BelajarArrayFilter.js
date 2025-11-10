/* 

Modul 10: Penyaringan Array: filter (Logika "Menyaring" Elemen)

1. Pemahaman Dasar (The "Why")

Inilah masalah kita: let angka = [10, 50, 20, 150]; Saya ingin sebuah array baru yang hanya 
berisi angka di atas 30. Hasil yang saya inginkan: [50, 150].

map tidak bisa melakukan ini. map pasti akan mengembalikan 4 elemen.

2. Penjelasan Inti (The "What")

filter adalah method array yang membuat array baru yang berisi semua elemen dari array 
asli yang lolos sebuah tes (yang kita definisikan dalam callback function).

Aturan Emas filter:
1. Callback function Anda HARUS me-return sebuah nilai boolean (true atau false).
2. Jika return true: Elemen ini LOLOS saringan dan akan dimasukkan ke array baru.
3. Jika return false: Elemen ini DIBUANG dan tidak akan masuk ke array baru.
4. Panjang array baru bisa sama atau lebih sedikit dari array asli.

*/

// 3. Contoh Kode & Logika
// Mari kita jalankan saringan kita:

let angka = [1, 5, 10, 15, 20];

// Kita ingin array baru yang HANYA berisi angka di atas 8
// Ini adalah "Tes" atau "Saringan" kita
let lolosSaringan = angka.filter(function (item) {
    // Logika berpikir di setiap iterasi:
    // Iterasi 1: item = 1. '1 > 8'? false. -> DIBUANG
    // Iterasi 2: item = 5. '5 > 8'? false. -> DIBUANG
    // Iterasi 3: item = 10. '10 > 8'? true. -> LOLOS
    // Iterasi 4: item = 15. '15 > 8'? true. -> LOLOS
    // Iterasi 5: item = 20. '20 > 8'? true. -> LOLOS
    return item > 8;
});

console.log(angka); // Array asli TIDAK berubah: [1, 5, 10, 15, 20]
console.log(lolosSaringan); // Array baru: [10, 15, 20]

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya daftar database user. Saya hanya ingin menampilkan user yang statusnya 
aktif."

Data Mentah (Array Objek):
let users = [
    { nama: "Budi", status: "aktif" },
    { nama: "Siti", status: "non-aktif" },
    { nama: "Aan", status: "aktif" },
    { nama: "Dewi", status: "non-aktif" }
];

Tujuan: Array baru yang lebih pendek, hanya berisi Budi dan Aan.

Pola Pikir (Problem Solving):
1. Tujuan: Array baru yang disaring.
2. Identifikasi: Array asli (4) akan jadi array baru (2). Ukurannya berubah. Ini bukan map. Ini 
penyaringan.
3. Perkakas yang Tepat: .filter().
4. Logika "Tes" (Callback): a. Fungsi saya akan menerima satu user (objek) di setiap iterasi. 
b. Saya harus return true jika user.status-nya adalah "aktif". c. "Tes" saya adalah: 
user.status === "aktif".

*/

let users = [
    { nama: "Budi", status: "aktif" },
    { nama: "Siti", status: "non-aktif" },
    { nama: "Aan", status: "aktif" },
    { nama: "Dewi", status: "non-aktif" }
];

let userAktif = users.filter(function (user) {
    // Tes: Apakah status user ini 'aktif'?
    // Iterasi 1 (Budi): "aktif" === "aktif"? true. -> LOLOS
    // Iterasi 2 (Siti): "non-aktif" === "aktif"? false. -> DIBUANG
    // Iterasi 3 (Aan): "aktif" === "aktif"? true. -> LOLOS
    // Iterasi 4 (Dewi): "non-aktif" === "aktif"? false. -> DIBUANG
    return user.status === "aktif";
});

console.log(userAktif);