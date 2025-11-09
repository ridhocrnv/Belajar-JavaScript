/* 

Modul 5: Objek Date (Membuat & Membaca Tanggal)

1. Pemahaman Dasar (The "Why")

Komputer tidak memahami "Selasa, 10 November 2025". Komputer memahami waktu sebagai 
satu angka tunggal yang sangat besar: jumlah milidetik (ribuan detik) yang telah berlalu sejak 1 
Januari 1970 (dikenal sebagai Unix Epoch).
    Logika Inti: Date adalah objek bawaan JavaScript yang berfungsi sebagai "penerjemah". Ia 
    menerjemahkan angka milidetik yang rumit itu menjadi format tanggal yang bisa dibaca 
    manusia (dan sebaliknya).

    Problem Solving: Kapanpun Anda perlu tahu "jam berapa sekarang?", mencatat timestamp 
    (cap waktu), atau menghitung durasi, Anda butuh Date.

2. Penjelasan Inti (The "What")

Tidak seperti Math (yang statis), untuk mendapatkan sebuah tanggal, Anda harus membuat 
sebuah "instansi" atau "objek" Date baru menggunakan kata kunci new.

Ada 4 cara utama untuk "membuat" tanggal:
1. new Date() (Cara "Sekarang")
    Logika: "Beri saya cap waktu untuk tepat saat ini."
    Fungsi: Membuat objek Date yang berisi tanggal dan waktu saat ini (berdasarkan jam sistem Anda).
2. new Date(milliseconds) (Cara "Epoch")
    Logika: "Saya punya angka milidetik, tolong ubah jadi tanggal."
    Fungsi: Membuat tanggal berdasarkan angka milidetik sejak 1 Jan 1970.
3. new Date(dateString) (Cara "Teks")
    Logika: "Saya punya teks tanggal, tolong ubah jadi objek Date."
    Fungsi: Mem-parsing (menganalisis) string seperti "2025-11-10" atau "November 10, 2025".
4. new Date(year, monthIndex, day, hours, minutes, seconds) (Cara "Spesifik")
    Logika: "Saya ingin membuat tanggal spesifik dari angkanya langsung."
    Fungsi: Membuat tanggal dari komponen angka yang Anda berikan.

3. Jebakan Logika Paling Penting: "Month Index"

Ini adalah "jebakan" yang pasti akan menjerat setiap developer baru:
    Bulan di JavaScript dimulai dari 0 (Januari), dan berakhir di 11 (Desember).

    Januari = 0
    Februari = 1
    ...
    Desember = 11

Hari (day) tetap dimulai dari 1. Ini aneh, tapi ini aturannya.

*/

// 4. Contoh Kode & Logika

// 1. Cara "Sekarang"
let sekarang = new Date();
console.log("Waktu saat ini:", sekarang);
// Output: (Sesuatu seperti) Sun Nov 09 2025 12:30:00 GMT+0800 (Waktu Indonesia Tengah)

// 2. Cara "Teks" (Paling mudah dibaca)
let hariKemerdekaan = new Date("1945-08-17");
console.log("Hari Kemerdekaan:", hariKemerdekaan);

// 3. Cara "Spesifik" (Hati-hati dengan jebakan bulan!)
// Kita ingin membuat 10 November 2025
// Tahun = 2025
// Bulan = 10 (karena November adalah bulan ke-11, jadi index-nya 10)
// Tanggal = 10
let hariPahlawan = new Date(2025, 10, 10);
console.log("Hari Pahlawan:", hariPahlawan);

// JEBAKAN: Jika Anda menulis '11' untuk November...
let salahBulan = new Date(2025, 11, 10); // 11 = Desember
console.log("Ini salah bulan:", salahBulan); // Output: 10 Desember 2025

/* 

5. Implementasi & Problem Solving

Masalah: "Sistem saya perlu mencatat kapan seorang pengguna mendaftar. Saya hanya perlu 
menyimpan satu string tanggal yang jelas, misal YYYY-MM-DD (Contoh: 2025-11-09). Bagaimana 
cara mendapatkannya?"

Pola Pikir (Problem Solving):
1. Tujuan: Mendapatkan cap waktu "sekarang".
2. Perkakas: new Date() adalah cara termudah untuk mendapatkan "sekarang".
3. Observasi: new Date() memberi saya banyak info (Sun Nov 09...). Saya tidak butuh 
jam, menit, atau zona waktu.
4. Masalah Lanjutan: Saya perlu memformat objek Date ini. new Date() hanya memberi 
saya objeknya.
5. Solusi (Pratinjau Modul 6): Objek Date punya method (fungsi) bawaan untuk mengambil 
bagian-bagiannya.
    sekarang.getFullYear() -> 2025
    sekarang.getMonth() -> 10 (Ingat! Jebakan bulan!)
    sekarang.getDate() -> 9
6. Kesimpulan (untuk Modul 5): Langkah pertama selalu new Date(). Apa yang harus 
dilakukan setelahnya (memformatnya) akan kita bahas di modul berikutnya.

*/

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();

console.log(`${year}`);
console.log(`${month}`);
console.log(`${day}`);