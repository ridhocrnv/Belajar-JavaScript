let saldo = 1000;

let namaBarang = 'Peta Harta Karun';
let hargaSatuan = 250;
let jumlahBeli = 3;
let totalHarga = hargaSatuan * jumlahBeli;
let sisaSaldo = saldo - totalHarga;

console.log("--- Struk Belanja Toko JavaScript ---");
console.log("Nama Barang: ", namaBarang);
console.log("Harga Satuan: ", hargaSatuan + " koin");
console.log("Jumlah Beli: ", jumlahBeli + " buah");
console.log("Total yang harus dibayar: ", totalHarga + " koin");
console.log("Sisa saldo kamu: ", sisaSaldo + " koin");