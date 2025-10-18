/*

Kamu sedang membuat sistem pendaftaran untuk petualang baru. Nama tidak boleh kosong. 
Kamu harus membuat sistem validasi sederhana menggunakan konsep Truthy/Falsy.

Tugas:

1. Gunakan prompt() untuk meminta nama kepada pengguna. Simpan di variabel 
inputNama
2. Gunakan if untuk memeriksa inputNama secara langsung (tanpa perbandingan apapun).
3. Jika inputNama adalah truthy (pengguna mengetik sesuatu), tampilkan alert yang 
menyambut nama tersebut.
4. Jika inputNama adalah falsy (pengguna membiarkan kosong dan menekan OK), tampilkan 
alert yang mengatakan "Nama tidak boleh kosong!".
5. Di bawahnya, buat variabel namaPilihan dan gunakan operator || untuk memberinya 
nilai inputNama atau, jika kosong, beri nilai default "Petualang Misterius".
6. Tampilkan namaPilihan di console.log.

*/

let inputNama = prompt("Masukkan nama pengguna: ");

if (inputNama) { // Jika truthy (ada isinya)
    alert(`Halo, ${inputNama}`);
} else { // Jika falsy (kosong)
    alert(`Nama Tidak Boleh Kosong!.`);
}

// Bagian ini dijalankan SETELAH blok if-else selesai.
// Dia akan mengambil nilai inputNama jika ada isinya,
// atau "Petualang Misterius" jika inputNama itu kosong (falsy).
let namaPilihan = inputNama || "Petualang Misterius";

console.log(`Nama yang akan tercatat di sistem adalah: ${namaPilihan}`);

/* 

Dengan cara ini, kodemu menjadi lebih bersih. Kamu menangani interaksi dengan pengguna 
(alert) di dalam if-else, lalu menangani pemrosesan data (||) setelahnya.

*/