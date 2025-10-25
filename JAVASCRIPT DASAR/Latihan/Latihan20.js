/* 

🎯 PROYEK LATIHAN BAB 20: BOTOL MANTRA FLEKSIBEL

Kamu ingin membuat sebuah function yang bisa menjalankan berbagai mantra sapaan, 
tergantung sapaan apa yang kamu masukkan ke dalamnya.

Tugas:

1. Buat dua anonymous function dan simpan di dua variabel berbeda:
    sapaSiang: harus menerima 1 parameter nama dan menampilkan 
    console.log("Selamat siang, [nama]. Matahari bersinar cerah!").

    sapaMalam: harus menerima 1 parameter nama dan menampilkan 
    console.log("Selamat malam, [nama]. Semoga mimpi indah!").
2. Buat function ketiga (yang punya nama) bernama jalankanSapaan.
3. jalankanSapaan harus menerima dua parameter:
    mantra (ini adalah tempat kita akan memasukkan function sapaSiang atau sapaMalam).
    namaOrang (ini adalah nama yang akan dilempar ke mantra tersebut).
4. Di dalam jalankanSapaan, panggil mantra yang kamu terima sebagai parameter, dan 
berikan namaOrang sebagai argumennya. (Contoh: mantra(namaOrang);).
5. Panggil jalankanSapaan dua kali:
    Panggilan pertama: berikan sapaSiang dan sebuah nama.
    Panggilan kedua: berikan sapaMalam dan nama yang berbeda.

*/

const sapaSiang = function(nama) {
    console.log(`Selamat siang, ${nama}. Matahari bersinar cerah!`);
}

const sapaMalam = function(nama) {
    console.log(`Selamat malam, ${nama}. Semoga mimpi indah!`);
}

function jalankanSapaan(mantra, namaOrang) {
    mantra(namaOrang);
}

jalankanSapaan(sapaSiang, "Ridho");
jalankanSapaan(sapaMalam, "Yusnida");