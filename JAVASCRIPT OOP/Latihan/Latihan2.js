/* 

🚀 Latihan Project Sederhana

Masalah: Kita perlu membuat banyak data untuk Kucing, dan Object Literal (dari 
Materi 2) sangat merepotkan jika harus dibuat satu per satu.

Tugas: Buatlah sebuah Constructor Function (Cetakan) bernama Kucing.

Property: Di dalam cetakan Kucing, berikan 2 property dengan nilai default:
    nama (isi dengan "Mochi")
    warnaBulu (isi dengan "Putih")

Tes:
    Buat 2 objek kucing dari cetakan tersebut: let kucingA = new Kucing(); let 
    kucingB = new Kucing();

    console.log() warna bulu dari kucingA.

    Ubah kucingB.nama menjadi "Garong".

    console.log() nama dari kucingA (Harusnya tetap "Mochi").

    console.log() nama dari kucingB (Harusnya "Garong").

*/

function Kucing() {
    this.nama = "Mochi";
    this.warnaBulu = "Putih";
}

let kucingA = new Kucing();
let kucingB = new Kucing();

console.log(kucingA.warnaBulu);

kucingB.nama = "Garong";

console.log(kucingA.nama);
console.log(kucingB.nama);