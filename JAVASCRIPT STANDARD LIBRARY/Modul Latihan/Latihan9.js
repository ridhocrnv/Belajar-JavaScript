/* 

Latihan Modul 9: "Pabrik Harga Diskon"

Tantangan: Anda sedang membuat aplikasi e-commerce. Anda punya daftar harga barang. Anda 
perlu membuat array baru yang berisi harga setelah diskon 20%.

Data yang Diberikan: let daftarHarga = [10000, 50000, 25000, 150000];

Aturan:
    Diskon adalah 20% (atau 0.20).
    hargaDiskon = hargaAsli * (1 - 0.20) atau hargaDiskon = hargaAsli * 0.8.

Tugas Anda: Gunakan .map() pada daftarHarga untuk membuat array baru bernama 
hargaSetelahDiskon yang berisi harga-harga yang sudah didiskon.

Keluaran yang Diharapkan:
Harga Asli: [ 10000, 50000, 25000, 150000 ]
Harga Diskon: [ 8000, 40000, 20000, 120000 ]

*/

let daftarHarga = [10000, 50000, 25000, 150000];

let hargaSetelahDiskon = daftarHarga.map(function (harga) {
    return harga * 0.8;
})

console.log(`Harga Asli: ${daftarHarga}`);
console.log(`Harga Diskon: ${hargaSetelahDiskon}`);