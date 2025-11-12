/* 

Modul 13: Pencarian Array (Bagian 2): includes & indexOf

1. Pemahaman Dasar (The "Why")

Inilah masalah kita: let nama = ["Budi", "Siti", "Aan"]; Bagaimana cara tercepat untuk 
mengecek: "Apakah nama Siti ada di dalam array ini?"

Kita bisa pakai .find(): let ketemu = nama.find(item => item === "Siti"); // Hasil: 
"Siti" Ini berhasil, tapi ini berlebihan. Kita tidak butuh item-nya, kita hanya butuh jawaban Ya 
(true) atau Tidak (false).

Logika Inti: Untuk data sederhana (seperti string atau angka), kita tidak perlu callback 
function yang rumit. Kita butuh perkakas yang logikanya: "Cek di seluruh lemari, apakah ada 
arsip yang persis bernama 'Siti'?"

Problem Solving: .includes() memberi kita jawaban true/false. .indexOf() 
memberi kita jawaban "di laci nomor berapa" (index).

2. Penjelasan Inti (The "What")

Dua detektif ini bekerja paling baik pada Array Primitif (string, angka).
1. .includes(nilai) (Si Penjaga Pintu)
    Logika: "Apakah nilai ini ada di dalam daftar?"
    Fungsi: Mengecek apakah nilai yang dicari ada di dalam array.
    Hasil: Mengembalikan true (jika ada) atau false (jika tidak ada).
    Kapan dipakai?: Paling umum untuk validasi atau kondisi if.
2. .indexOf(nilai) (Si Petugas Arsip)
    Logika: "Di posisi (index) berapa nilai ini pertama kali muncul?"
    Fungsi: Mencari nilai di dalam array.
    Hasil: Mengembalikan angka index (misal: 0, 1, 2) atau -1 jika tidak ditemukan.
    Kapan dipakai?: Saat Anda peduli di mana lokasinya, bukan hanya apakah ia ada.

*/

// 3. Contoh Kode & Logika
// Mari kita gunakan data dengan duplikat untuk melihat perbedaannya:

let daftarNama = ["Budi", "Siti", "Aan", "Siti"];

// --- 1. Menggunakan .includes() (Ya atau Tidak?) ---

let apakahAdaSiti = daftarNama.includes("Siti");
console.log(apakahAdaSiti); // Output: true

let apakahAdaDewi = daftarNama.includes("Dewi");
console.log(apakahAdaDewi); // Output: false

// --- 2. Menggunakan .indexOf() (Di mana?) ---

let posisiSiti = daftarNama.indexOf("Siti");
console.log(posisiSiti);
// Output: 1 
// (Dia menemukan "Siti" di index 1 dan BERHENTI mencari. 
// Dia tidak peduli ada "Siti" lain di index 3)

let posisiDewi = daftarNama.indexOf("Dewi");
console.log(posisiDewi); // Output: -1 (Artinya "tidak ditemukan")

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya sistem 'blacklist' (daftar hitam) untuk username. Saat user baru 
mendaftar, saya harus mengecek apakah username yang diajukan ada di dalam daftar 
blacklist."

Pola Pikir (Problem Solving):
1. Tujuan: Cek keberadaan (existence check).
2. Data: let blacklist = ["admin", "root", "spam", "iklan"];
3. Input User: let usernameBaru = "root";
4. Perkakas yang Tepat:
    Apakah saya peduli di mana "root" berada di daftar blacklist? Tidak.
    Saya hanya peduli "Apakah dia ada di sana?" (Ya/Tidak).
    .includes() adalah perkakas yang sempurna.
5. Logika: if (blacklist.includes(usernameBaru)) { ... }

*/

let blacklist = ["admin", "root", "spam", "iklan"];
let usernameBaru = "root";

let BannedAccount = (blacklist.includes(usernameBaru)) ? "Error: Username ini dilarang!" : "OK: Username tersedia.";
console.log(BannedAccount);