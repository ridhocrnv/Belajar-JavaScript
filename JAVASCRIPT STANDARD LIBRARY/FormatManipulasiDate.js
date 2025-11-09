/* 

Modul 6: Memformat & Memanipulasi Date (Getter, Setter, & Problem Solving)

1. Pemahaman Dasar (The "Why")

Objek Date yang kita buat di Modul 5 (Contoh: Sun Nov 09 2025...) itu jelek dan tidak 
berguna untuk ditampilkan ke pengguna. Pengguna tidak peduli zona waktu GMT, mereka peduli 
"Jam berapa?" atau "Tanggal berapa?".

    Logika Inti: Kita perlu perkakas untuk "membongkar" objek Date dan mengambil 
    bagian-bagiannya (seperti tanggal, bulan, jam) satu per satu. Ini disebut Getters.

    Problem Solving: Bagaimana jika kita ingin menghitung "7 hari dari sekarang" atau "mundur 
    2 bulan"? Kita perlu perkakas untuk "mengubah" objek Date yang sudah ada. Ini disebut 
    Setters.

2. Penjelasan Inti (The "What")

A. Getters (Si Pembaca)
    getFullYear(): Mengambil tahun (Contoh: 2025).
    getMonth(): Mengambil bulan (Ingat! Jebakan 0-11).
    getDate(): Mengambil tanggal (1-31).
    getDay(): Mengambil hari dalam seminggu (Ingat! Jebakan 0-6, di mana 0 adalah Minggu).
    getHours(): Mengambil jam (0-23).
    getMinutes(): Mengambil menit (0-59).

B. Setters (Si Pengubah)
    setFullYear(tahun): Mengubah tahun dari objek Date.
    setMonth(bulan): Mengubah bulan (Jebakan 0-11).
    setDate(tanggal): Mengubah tanggal.

Logika "Rollover" Cerdas: Bagian terbaik dari Setters adalah mereka cerdas. Jika Anda berada 
di tanggal 30 November dan Anda setDate(31) (November hanya 30 hari), JavaScript tidak 
error. Ia akan otomatis "menggulung" ke hari berikutnya: 1 Desember.

*/

// 3. Contoh Kode & Logika
// Mari kita bongkar objek Date "sekarang".

let sekarang = new Date(); // Misal: 9 November 2025 (Hari Minggu), jam 16:30

// ---- MENGGUNAKAN GETTERS (MEMBACA) ----

let tahun = sekarang.getFullYear(); // 2025
let bulan = sekarang.getMonth(); // 10 (karena November)
let tanggal = sekarang.getDate(); // 9
let hari = sekarang.getDay(); // 0 (karena Minggu)
let jam = sekarang.getHours(); // 16

console.log(`Tahun: ${tahun}`);
console.log(`Bulan (Index): ${bulan}`); // Penting!
console.log(`Tanggal: ${tanggal}`);
console.log(`Hari (Index): ${hari}`); // Penting!

// Logika: Membuat format yang bisa dibaca manusia
// Kita tidak bisa tampilkan bulan '10', harus '11'
let bulanManusia = bulan + 1;
console.log(`Format DD/MM/YYYY: ${tanggal}/${bulanManusia}/${tahun}`);
// Output: Format DD/MM/YYYY: 9/11/2025

// ---- MENGGUNAKAN SETTERS (MENGUBAH) ----

// Kita ingin tahu tanggal 3 hari dari sekarang
let lusa = new Date(); // Salin "sekarang"
console.log(`Awal: ${lusa}`);

// Ambil tanggal sekarang (9) dan tambahkan 3
lusa.setDate(lusa.getDate() + 3); // 9 + 3 = 12

console.log(`3 Hari Lagi: ${lusa}`); // Output: 12 November 2025

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya event pada 28 Desember 2025. Saya perlu menghitung tanggal untuk 
reminder H-7 (7 hari sebelumnya)."

Pola Pikir (Problem Solving):
1. Tujuan: Mendapatkan tanggal 7 hari sebelum 28 Desember.
2. Langkah 1 (Buat Tanggal): Buat objek Date untuk hari H.
    let hariH = new Date("2025-12-28");
3. Langkah 2 (Logika Mundur): Saya perlu "mengatur tanggal" (setDate) menjadi "tanggal 
saat ini dikurangi 7".
4. Langkah 3 (Eksekusi):
    Tanggal saat ini adalah hariH.getDate() (yaitu 28).
    Tanggal baru adalah 28 - 7 = 21.
    hariH.setDate(21);
5. Bagaimana Jika Lebih Rumit? (Misal: 5 Januari 2026, H-7 nya?)
    let hariH = new Date("2026-01-05");
    hariH.setDate( hariH.getDate() - 7 );
    Logika setDate: 5 - 7 = -2.
    JavaScript cukup cerdas untuk tahu tidak ada "tanggal -2". Ia akan otomatis "mundur" 
    ke bulan sebelumnya (Desember) dan menghitung mundur dari sana.
    Hasilnya akan menjadi: 29 Desember 2025.

*/

let deadline = new Date("2026-01-05");
let reminder = new Date(deadline);
reminder.setDate(reminder.getDate() - 7);

console.log(`Deadline: ${deadline}`);
console.log(`Reminder H-7: ${reminder}`);