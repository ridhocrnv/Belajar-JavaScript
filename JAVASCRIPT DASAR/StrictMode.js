/* 

Materi 53: Strict Mode

🤔 Pemahaman Dasar: Bayangkan "Mode Sulit" di dalam game. Strict Mode adalah "mode 
sulit" untuk JavaScript. Saat diaktifkan, ia akan mengubah beberapa "kesalahan diam-diam" 
(seperti lupa menggunakan let/const saat membuat variabel) menjadi "kesalahan fatal" 
yang akan menghentikan program dan memberitahumu dengan jelas.

🧠 Pola Pikir Logika: Ini adalah kebiasaan yang sangat baik untuk selalu digunakan. Ini 
"memaksa" kita untuk menulis kode yang lebih bersih dan lebih aman. Ini mencegah kita 
melakukan kesalahan-kesalahan konyol yang sulit dilacak.

    Selama ini, jika kamu lupa menulis let angka = 1; dan hanya menulis angka = 1;, 
    kamu secara tidak sengaja membuat variabel global. Di Strict Mode, ini akan menjadi 
    error. (Ingat, saya sering mengingatkanmu tentang ini di latihan sebelumnya? Strict 
    Mode adalah penjaganya!).

*/

"use strict"; // Harus di baris paling atas!

// Coba buat kesalahan yang disengaja
namaPetualang = "Alex"; // Lupa pakai 'let' atau 'const'
// Di Strict Mode, baris di atas akan melempar ERROR
// "Uncaught ReferenceError: namaPetualang is not defined"
// Tanpa strict mode, ini akan berjalan (dan membuat variabel global)

console.log(namaPetualang);