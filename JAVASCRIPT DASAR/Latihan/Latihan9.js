/* 

Kamu menemukan sebuah item misterius (sebuah Object). Tugasmu adalah membuat program 
kecil untuk menyelidiki dan melaporkan detail tentang item ini menggunakan semua alat detektif 
yang baru kamu pelajari.

Tugas:

1. Buat sebuah object bernama itemMisterius yang berisi:
    nama: "Kristal Waktu"
    kekuatan: 500
2. Gunakan operator in untuk memeriksa apakah properti "pemilik" ada di dalam 
itemMisterius. Simpan hasilnya (true/false) di variabel adaPemilik.
3. Gunakan Ternary Operator untuk membuat sebuah kalimat status berdasarkan variabel 
adaPemilik:
    Jika adaPemilik itu true, kalimatnya adalah "Item ini sudah ada yang punya."
    Jika false, kalimatnya adalah "Item ini belum dimiliki."
    Simpan kalimat ini di variabel statusPemilik.
4. Gunakan console.log() untuk menampilkan laporan lengkap:
    Nama item.
    Tipe data dari properti kekuatan (gunakan typeof).
    Kalimat statusPemilik yang sudah kamu buat.

Contoh Hasil Akhir di Console:

--- Laporan Item Misterius ---
Nama Item: Kristal Waktu
Tipe Data Kekuatan: number
Status Kepemilikan: Item ini belum dimiliki.

*/

let itemMisterius = {
    nama: "Kristal Waktu",
    kekuatan: 500
};

let adaPemilik = "pemilik" in itemMisterius;

let statusPemilik = adaPemilik ? "Item ini sudah ada yang punya." : "Item ini belum dimiliki.";

console.log("--- Laporan Item Misterius ---");
console.log(`Nama Item: ${itemMisterius.nama}`);
console.log(`Tipe Data Kekuatan: ${typeof itemMisterius.kekuatan}`);
console.log(`Status Kepemilikan: ${statusPemilik}`);