/* 

🤔 Pemahaman Dasar: Ini adalah materi yang sebenarnya sudah kamu lakukan di latihan 
sebelumnya. Property adalah "Sifat" atau "Data" yang kita tempelkan ke objek yang sedang 
dibuat.

Ini adalah "variabel" yang hidup di dalam this (objek yang sedang dirakit).

🧠 Pola Pikir Logika: Di dalam Constructor Function, this adalah si objek baru yang masih 
polos. Saat kita menulis:

this.nama = "Mochi";

Kita sedang memberi perintah: "Untuk objek yang sedang dirakit ini (this), buatkan sebuah 
laci data bernama nama dan isi dengan "Mochi"."

Setiap objek baru yang dibuat (new Kucing()) akan mendapatkan salinan "laci" datanya 
masing-masing.

*/

function Kucing() {
    // 'this.nama' adalah PROPERTY
    // "Mochi" adalah NILAI DEFAULT-nya
    this.nama = "Mochi";

    // 'this.warnaBulu' adalah PROPERTY
    // "Putih" adalah NILAI DEFAULT-nya
    this.warnaBulu = "Putih";
}

let kucingA = new Kucing();
// 'kucingA' sekarang punya laci datanya sendiri:
// { nama: "Mochi", warnaBulu: "Putih" }

let kucingB = new Kucing();
// 'kucingB' juga punya laci datanya sendiri:
// { nama: "Mochi", warnaBulu: "Putih" }