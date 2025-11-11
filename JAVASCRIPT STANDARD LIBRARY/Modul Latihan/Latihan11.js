/* 

Latihan Modul 11: "Shopping Cart Counter"

Tantangan: Mirip dengan contoh di atas, tapi kali ini Anda tidak menghitung total harga. Anda 
ingin menghitung total jumlah barang (quantity) di keranjang.

Data yang Diberikan: let keranjangBelanja = [ { item: "Apel", qty: 2 }, { item: 
"Jeruk", qty: 5 }, { item: "Mangga", qty: 3 } ];

Tugas Anda: Gunakan .reduce() pada keranjangBelanja untuk mencari tahu total jumlah 
(qty) semua barang.

Keluaran yang Diharapkan:
Total barang di keranjang: 10

*/

let keranjangBelanja = [
    { item: "Apel", qty: 2 },
    { item: "Jeruk", qty: 5 },
    { item: "Mangga", qty: 3 }
];

let totalBarang = keranjangBelanja.reduce(function (acc, item) {
    return acc + item.qty;
}, 0);

console.log(totalBarang);
