/* 

Latihan Modul 18: "Mempersiapkan Data Pengiriman"

Tantangan: Anda memiliki data pesanan dalam bentuk objek JavaScript. Sebelum Anda bisa 
mengirim data ini ke API server (untuk disimpan di database), Anda harus "mengemasnya" 
(stringify) menjadi format string JSON.

Data yang Diberikan:

JavaScript

let pesanan = {
  orderId: "INV-001",
  user: "Aan",
  items: [
    { nama: "Buku", qty: 2 },
    { nama: "Pen", qty: 1 }
  ],
  total: 110000
};

Tugas Anda:
1. Buat variabel baru dataUntukDikirim.
2. Gunakan JSON.stringify() untuk mengubah seluruh objek pesanan menjadi sebuah string JSON.
3. Tampilkan dataUntukDikirim di konsol.

Keluaran yang Diharapkan: (Satu baris string tunggal)
Data JSON: {"orderId":"INV-001","user":"Aan","items":[{"nama":"Buku","qty":2},{"nama":"Pen","qty":1}],"total":110000}

Silakan dicoba! Ini adalah langkah #1 dalam 99% interaksi API.

*/

let pesanan = {
    orderId: "INV-001",
    user: "Aan",
    items: [
        { nama: "Buku", qty: 2 },
        { nama: "Pen", qty: 1 }
    ],
    total: 110000
};

let dataUntukDikirim = JSON.stringify(pesanan);

console.log(`Data JSON: ${dataUntukDikirim}`);