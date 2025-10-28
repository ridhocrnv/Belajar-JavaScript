/* 

🎯 PROYEK LATIHAN BAB 24: MENGUBAH MANTRA LAMA

Saatnya memodernisasi gulungan mantramu! Ambil salah satu anonymous function yang kamu 
buat di Latihan 20 dan ubah menjadi arrow function.

Tugas:

1. Lihat kembali kodemu di Latihan 20 (sapaSiang atau sapaMalam).
2. Buat ulang function tersebut, tapi kali ini simpan di variabel baru (misal sapaSiangModern).
3. Tulis function baru tersebut menggunakan sintaks Arrow Function.
4. Panggil function barumu untuk membuktikan bahwa ia bekerja sama persis.

*/

const sapaSiangModern = nama => {
    console.log(`Selamat siang, ${nama}. Matahari bersinar cerah.`);
}

const sapaMalamModern = nama => {
    console.log(`Selamat malam, ${nama}. Semoga mimpi indah.`);
}

sapaSiangModern(`Ridho`);
sapaSiangModern(`Yusnida`);