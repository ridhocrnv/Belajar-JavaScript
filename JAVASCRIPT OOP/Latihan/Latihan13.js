/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Kita punya class Kucing. Kita ingin tahu ada berapa total kucing 
yang pernah kita buat.

Tugas: Buat class Kucing.
    Tambahkan static totalKucingDibuat = 0;
    Di dalam constructor, naikkan Kucing.totalKucingDibuat setiap kali kucing 
    baru lahir.

Tes:
    Buat kucingGarong, kucingMochi, dan kucingOren.
    console.log(Kucing.totalKucingDibuat); (Harus 3).

💡 Kembangkan Sendiri (Problem Solving):

Tantangan: Buat sebuah utility class (class yang tidak untuk dibuat produknya, tapi untuk 
menyimpan alat bantu).

Tugas: Buat class KonfigurasiGame.

Syarat:
Tidak perlu ada constructor.
Tambahkan 2 static field:
    static kesulitan = "NORMAL";
    static bahasa = "id-ID";

Tes: console.log(KonfigurasiGame.kesulitan); (Harus "NORMAL"). Buktikan Anda bisa 
mengaksesnya tanpa new KonfigurasiGame().

*/

class KonfigurasiGame {
    static kesulitan = "NORMAL";
    static bahasa = "id-ID";
}

console.log(KonfigurasiGame.kesulitan);

class Kucing {
    static totalKucingDibuat = 0;

    nama;

    constructor(nama) {
        this.nama = nama;

        Kucing.totalKucingDibuat++;
    }
}

console.log(`Total kucing sebelum: ${Kucing.totalKucingDibuat}`);

let kucingGarong = new Kucing("Garong");
let kucingMochi = new Kucing("Mochi");
let kucingOren = new Kucing("Oren");

console.log(`Total kucing sesudah: ${Kucing.totalKucingDibuat}`);