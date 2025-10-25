/* 

Materi 39: Function Sebagai Value

🤔 Pemahaman Dasar: Bayangkan kamu tidak hanya menjalankan mantra sapa(), tapi 
kamu bisa "mencabut" mantra itu, menaruhnya di dalam botol (variabel), dan 
memberikannya ke orang lain untuk mereka gunakan nanti.

🧠 Pola Pikir Logika: Ini adalah inti dari functional programming. Dengan menyimpan fungsi di 
variabel, kita bisa membuat kode yang sangat dinamis. Kita bisa memutuskan function 
mana yang akan dijalankan nanti, tergantung situasi.

*/

// Membuat fungsi seperti biasa
function sapaPagi(nama) {
    console.log(`Selamat pagi, ${nama}!`);
}

// MENYIMPAN fungsi itu ke dalam variabel
// Perhatikan: tidak ada tanda () ! Kita tidak memanggilnya, kita 'mengambil' resepnya.
const mantraSapaan = sapaPagi;

// Sekarang, variabel 'mantraSapaan' adalah fungsi itu sendiri.
// Kita bisa memanggilnya menggunakan nama variabel:
mantraSapaan("Budi"); // Hasilnya: Selamat pagi, Budi!