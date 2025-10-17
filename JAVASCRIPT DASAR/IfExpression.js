/* 

🤔 Pemahaman Dasar:

If (Jika): Seperti seorang penjaga gerbang. "JIKA kamu punya tiket emas (true), maka 
gerbang akan terbuka." Jika tidak, tidak terjadi apa-apa.

Else (Jika Tidak): Ini adalah perintah kedua untuk si penjaga. "JIKA kamu punya tiket 
emas, buka gerbang. JIKA TIDAK, maka bunyikan alarm." Else hanya berjalan jika if bernilai false.

Else If (Jika Kondisi Lain): Ini untuk penjaga yang lebih pintar dengan banyak aturan. 
"JIKA punya tiket emas, buka gerbang. JIKA TIDAK, periksa lagi, JIKA KONDISI LAIN 
(punya tiket perak), buka gerbang samping. JIKA TIDAK juga, baru bunyikan alarm."

🧠 Pola Pikir Logika: Ini adalah inti dari semua program yang terasa "pintar". Apakah HP 
pemain kurang dari 0? Jika ya, tampilkan "Game Over". Apakah pengguna memasukkan 
password yang benar? Jika ya, izinkan masuk. Jika tidak, tampilkan pesan error. If 
Expression adalah cara kita menuliskan aturan-aturan dalam program.

*/

let levelPemain = 25;

console.log("Mengecek Toko Senjata..");


if (levelPemain > 50) {
    console.log("Selamat datang, Ksatria Legendaris! Senjata epik tersedia untukmu.");
}

else if (levelPemain > 20) {
    console.log("Selamat datang, Prajurit! Kamu bisa membeli pedang baja.");
}

else {
    console.log("Maaf, kamu masih pemula. Kembalilah saat levelmu sudah 21.");
}