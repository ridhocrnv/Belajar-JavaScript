/* 

Materi 2: Pengenalan OOP (Objek, Property, Method)

🤔 Pemahaman Dasar: Di dunia nyata, semua adalah "objek". HP-mu objek, meja-mu objek, 
kucingmu juga objek. Mari kita ambil contoh Robot Mainan.

Objek: Adalah si Robot itu sendiri. Sebuah bungkusan utuh.

Property (Sifat): Adalah data yang dimiliki si robot. Ini adalah "kata benda" atau "sifat"-nya.
warna (misal: "Merah")
jumlahBaterai (misal: 100)

Method (Kemampuan): Adalah hal yang bisa dilakukan si robot. Ini adalah "kata kerja" atau "perilaku"-nya.
berjalan()
bicara()

Pola Pikir Logika: Di JavaScript, cara paling sederhana untuk "membungkus" data-data ini 
menjadi satu objek adalah menggunakan kurung kurawal { ... }. Ini disebut Object Literal.

Kita menyatukan Property (Sifat) dan Method (Kemampuan) ke dalam satu variabel.

*/

let kucingGarong = {
    nama: "Garong",
    warnaBulu: "Oranye",
    umur: 3,

    mengeong: function() {
        console.log(`Meoong.. saya ${this.nama}`);
    },

    tidur: function() {
        console.log(`${this.nama} sedang tidur Zzzzz`);
    }
}

console.log(kucingGarong.warnaBulu);

kucingGarong.mengeong();
kucingGarong.tidur();