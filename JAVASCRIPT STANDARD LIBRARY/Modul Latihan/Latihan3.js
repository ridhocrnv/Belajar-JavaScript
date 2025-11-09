/* 

Latihan Modul 3: "Kalkulator Pajak Sederhana"

Tantangan: Anda bekerja untuk aplikasi kasir. Anda perlu menghitung harga akhir sebuah produk 
setelah ditambah pajak.

Data yang Diberikan (String): let hargaProduk = "2500.75"; (Harga produk, bisa jadi 
desimal) let infoPajak = "Pajak 11%"; (Info pajak, Anda hanya perlu angka 11-nya)

Tugas Anda:
1. Ekstrak harga produk sebagai angka (gunakan parseFloat karena ada desimal).
2. Ekstrak angka pajaknya saja (gunakan parseInt).
3. Hitung nilaiPajak (Harga * (AngkaPajak / 100)).
4. Hitung totalHarga (Harga + nilaiPajak).
5. Tampilkan totalHarga di konsol.

Keluaran yang Diharapkan: (Sesuatu seperti...) Harga Awal: 2500.75 Pajak (11%): 
275.0825 Total Harga: 2775.8325

Petunjuk (Clue):
parseFloat(hargaProduk) akan memberi Anda 2500.75.
parseInt(infoPajak) akan memberi Anda NaN! Kenapa? (Karena diawali 'P').
Anda perlu trik dari Modul 2. Bagaimana cara mengambil "11%" dulu? Mungkin split() 
atau slice()?
    Hint: Coba infoPajak.slice(6) untuk dapat "11%", lalu parseInt("11%").

*/

let hargaProduk = "2500.75";
let infoPajak = "Pajak 11%";

let hargaProdukNumber = parseFloat(hargaProduk);
let infoPajakPercent = infoPajak.slice(6);
let infoPajakPercentNumber = parseInt(infoPajakPercent);

let nilaiPajak = hargaProdukNumber * (infoPajakPercentNumber / 100);
let totalHarga = hargaProdukNumber + nilaiPajak;

console.log(`Harga Awal: ${hargaProdukNumber}\nPajak (${infoPajakPercent}): ${nilaiPajak}\nTotal Harga: ${totalHarga}`);