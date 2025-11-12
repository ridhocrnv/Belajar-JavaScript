/* 

5. Latihan Modul 14: "Manajemen Tim"

Tantangan: Anda memiliki daftar pemain inti. Anda perlu melakukan dua operasi: satu untuk 
"rotasi pemain" (menyalin) dan satu lagi untuk "substitusi" (mengubah).

Data yang Diberikan: let timInti = ["Budi", "Siti", "Aan", "Joko", "Dewi"];

Tugas Anda:
1. Rotasi Pemain (Slice): Buat variabel baru timRotasi. Ambil 2 pemain terakhir dari 
timInti ("Joko" dan "Dewi") menggunakan .slice() dan masukkan ke timRotasi.
2. Substitusi (Splice): Di timInti yang asli, "Aan" (index 2) cedera. Ganti dia! Gunakan 
.splice() untuk menghapus "Aan" dan menyisipkan "Rudi" di tempatnya.
3. Tampilkan ketiga hasil: timRotasi, timInti (yang sudah berubah), dan timInti yang 
asli sebelum diubah (jika Anda bisa memikirkannya 😅).

Keluaran yang Diharapkan:
Tim Rotasi: Joko,Dewi
Tim Inti Baru: Budi,Siti,Rudi,Joko,Dewi

*/

let timInti = ["Budi", "Siti", "Aan", "Joko", "Dewi"];

let timRotasi = timInti.slice(3, 5);
let Substitusi = timInti.splice(2, 1, "Rudi");

console.log(`Tim Rotasi: ${timRotasi}`);
console.log(`Tim Inti Baru: ${timInti}`);