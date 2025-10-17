/* 

🤔 Pemahaman Dasar: Bayangkan kamu bertemu dengan karakter di dalam game.
`alert()` (Pemberitahuan): Karakter itu meneriakkan sesuatu padamu. "AWAS ADA 
NAGA!". Kamu hanya bisa melihat pesannya dan menekan "OK". Ini adalah komunikasi 
satu arah.

`prompt()` (Meminta Input): Karakter itu bertanya, "Siapa namamu, wahai petualang?". 
Sebuah kotak akan muncul agar kamu bisa mengetikkan jawabanmu. Jawabanmu 
(sebuah String) akan disimpan oleh program.

`confirm()` (Meminta Konfirmasi): Karakter itu bertanya, "Apakah kamu yakin ingin 
memasuki gua ini?". Kamu akan diberi pilihan "OK" (yang berarti true) atau "Cancel" 
(yang berarti false).

🧠 Pola Pikir Logika: Hingga saat ini, semua data kita tulis sendiri di dalam kode. Dengan 
popup, kita bisa membuat program yang dinamis. Nilai variabel bisa berasal dari input 
pengguna, membuat setiap kali program dijalankan bisa menghasilkan hasil yang berbeda. 
Ini adalah gerbang menuju aplikasi yang interaktif.

*/

alert("Selamat Datang di Hutan Ajaib!");

let namaPengguna = prompt("Siapa nama penggunamu?");

let mauLanjut = confirm(`Apakah kamu siap untuk berpetualang, ${namaPengguna}?`);

if (mauLanjut) {
    alert(`Bagus! Ayo kita mulai petualangannya, ${namaPengguna}!`)
} else {
    alert(`Sayang sekali. Sampai jumpa lagi!`);
}