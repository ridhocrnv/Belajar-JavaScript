/*

Modul 8: Looping Cerdas Array: forEach

1. Pemahaman Dasar (The "Why")

Inilah masalahnya: 
let nama = ["Budi", "Siti", "Aan"];
console.log(nama[0]);
console.log(nama[1]);
console.log(nama[2]);

Kode di atas rapuh dan tidak efisien. Jika ada 1000 nama, Anda harus menulis 1000 baris kode. 
Jika satu nama dihapus, kode Anda akan error.

    Logika Inti: Kita butuh cara untuk berkata, "Hei Array, saya tidak peduli ada berapa elemen 
    di dalammu. Ambil saja setiap elemen, satu per satu, dan lakukan sesuatu padanya."

    Problem Solving: forEach adalah "robot" yang kita perintahkan. Kita tidak perlu tahu 
    bagaimana ia berpindah dari laci 0 ke 1, ke 2. Kita hanya perlu memberinya instruksi tentang 
    apa yang harus dilakukan di setiap laci.

2. Penjelasan Inti (The "What")

forEach adalah method (fungsi) bawaan array yang tugasnya menjalankan fungsi lain untuk 
setiap elemen di dalam array.

Ini adalah Higher-Order Function: fungsi (forEach) yang menerima fungsi lain sebagai 
argumen. Fungsi yang kita "berikan" itu disebut Callback Function (fungsi panggilan balik).

Logika "Tukang Pos":
    forEach adalah Rute tukang pos, yang sudah tahu semua alamat rumah (elemen)

    Callback Function Anda adalah Instruksi untuk tukang pos. ("Di setiap rumah, masukkan 
    surat ini ke kotak pos").

*/

let nama = ["Budi", "Siti", "Aan"];

nama.forEach(function (item, index) {
    console.log(`Antrian No. ${index + 1}: ${item}`);
});

/* 

Callback Function dengan Lebih Banyak Info: Callback function sebenarnya bisa menerima 3 
argumen: function(item, index, array)
item: Elemen saat ini (Contoh: "Budi")
index: Posisi elemen saat ini (Contoh: 0)
array: Array aslinya (jarang dipakai)

*/

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya array berisi total belanja: [100, 50, 200]. Saya perlu menghitung total 
keseluruhan belanjaan."

Pola Pikir (Problem Solving):
1. Tujuan: Menjumlahkan semua angka menjadi satu.
2. Alat: Saya perlu "mengunjungi" setiap angka. forEach bisa melakukan ini.
3. Logika: a. Saya akan siapkan "wadah" di luar loop untuk menyimpan total, misal 
totalBelanja = 0. b. Saya panggil forEach. c. Di setiap elemen (item), instruksi saya 
adalah: "Ambil totalBelanja yang sekarang, tambahkan dengan item, lalu simpan lagi ke 
totalBelanja." d. Setelah forEach selesai mengunjungi semua elemen, totalBelanja 
akan berisi jumlah akhirnya.

*/

let belanjaan = [100, 50, 200];
let totalBelanja = 0; // Langkah 3.a (Wadah)

belanjaan.forEach(function (harga) {
    // Langkah 3.c
    // Iterasi 1: totalBelanja = 0 + 100 = 100
    // Iterasi 2: totalBelanja = 100 + 50 = 150
    // Iterasi 3: totalBelanja = 150 + 200 = 350
    totalBelanja = totalBelanja + harga;
});

console.log(`Total belanja Anda: ${totalBelanja}`); // Output: 350