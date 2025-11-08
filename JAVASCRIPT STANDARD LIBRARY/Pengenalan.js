/* 

Modul 1: Pengenalan (Apa itu Global Objects?)

1. Pemahaman Dasar (The "Why")

Bayangkan Anda masuk ke sebuah bengkel yang sudah lengkap. Anda tidak perlu membawa palu, 
obeng, atau kunci inggris Anda sendiri. Peralatan standar itu sudah tersedia di mana-mana di 
dalam bengkel.

Itulah Global Objects di JavaScript.

Logika Inti: JavaScript menyediakan fungsi dan variabel "standar" yang bisa Anda akses 
kapan saja dan di mana saja dalam kode Anda, tanpa perlu "mengimpor" atau "membuat" 
mereka terlebih dahulu.

Problem Solving: Ini memecahkan masalah efisiensi. Anda tidak perlu menulis fungsi sendiri 
hanya untuk menampilkan sesuatu ke konsol (console.log) atau mengubah teks menjadi 
angka (parseInt). Perkakas ini sudah siap pakai.

2. Penjelasan Inti (The "What")

Global Objects adalah objek, fungsi, dan variabel bawaan yang "hidup" di scope paling atas (global).

Di lingkungan browser, objek global utamanya adalah window. Semua variabel global sebenarnya 
adalah properti dari objek window. Di lingkungan Node.js, objek globalnya adalah global.

Untuk amannya, JavaScript modern memiliki globalThis yang merujuk ke objek global di 
lingkungan manapun.

Contoh Global Objects/Functions Terkenal:
    console: Objek untuk debugging, seperti console.log().
    setTimeout: Fungsi untuk menjalankan kode setelah jeda waktu.
    parseInt: Fungsi untuk mengubah string menjadi angka integer.
    isNaN: Fungsi untuk mengecek apakah sebuah nilai adalah "Not-a-Number".
    Math: Objek yang berisi utilitas matematika.
    JSON: Objek untuk bekerja dengan data JSON.

*/

// Kita tidak pernah mendefinisikan 'console', tapi kita bisa memakainya.
console.log("Halo dari bengkel JavaScript!");

setTimeout(() => {
    console.log("Pesan ini muncul setelah 2 detik.");
}, 2000);

let nilai = "String";

if (isNaN(nilai)) {
    console.log("BENAR. Nilai bukan angka");
}

/* 

Logika Berpikir: Saat Anda perlu melakukan tugas yang sangat umum (seperti timer, 
mencetak ke konsol, konversi tipe data dasar), kemungkinan besar JavaScript sudah 
menyediakannya sebagai perkakas global.

3. Implementasi & Problem Solving

Masalah: "Saya ingin menyapa pengguna, tapi saya ingin ada jeda 3 detik setelah halaman 
dimuat sebelum sapaan itu muncul di konsol. Bagaimana caranya?"

Pola Pikir (Problem Solving):
1. Apa tujuannya? Menampilkan pesan di konsol.
2. Perkakas yang tepat? console.log(). Ini adalah objek global, jadi saya bisa langsung pakai.
3. Apa tantangannya? Ada jeda waktu ("delay") 3 detik.
4. Perkakas yang tepat? Saya perlu sesuatu yang berhubungan dengan "waktu" atau "timer". 
Saya ingat ada fungsi global setTimeout.
5.Bagaimana cara pakainya? setTimeout butuh dua hal: (1) apa yang harus dilakukan 
(sebuah fungsi), dan (2) kapan (waktu dalam milidetik).

*/

function sapaPengguna(nama) {
    console.log(`Halo, Selamat Datang ${nama}`);
}

setTimeout(() => {
    sapaPengguna("Alex");
}, 3000);

console.log("Pesan ini muncul duluan meskipun berada di baris paling bawah!.");