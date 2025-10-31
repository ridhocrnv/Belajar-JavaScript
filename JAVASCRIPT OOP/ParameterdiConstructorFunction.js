/* 

Materi 6: Parameter di Constructor Function

🤔 Pemahaman Dasar: Ini adalah solusi untuk masalah "semua kucing kembar". Parameter 
adalah "Informasi Pesanan" yang kita kirimkan ke Pabrik (Constructor) saat kita memesan objek 
(new).

Bayangkan kamu menelepon Pabrik Kucing:
    Kamu: "Halo, saya mau pesan kucing!" (new Kucing(...))
    Pabrik: "Tentu, mau nama dan warna apa?" (Ini adalah Parameter)
    Kamu: "Saya mau nama "Garong" dan warna "Oranye"." (Ini adalah Argumen)

Pola Pikir Logika: Parameter adalah "Pintu Masuk" data ke dalam Constructor Function. Data 
yang masuk ini kemudian kita gunakan untuk mengisi nilai this.property.

Logikanya: Data mengalir dari Parameter -> ke Property.
    Langkah 1 (Pesanan): new Kucing("Garong", "Oranye")
    Langkah 2 (Diterima Pabrik): function Kucing(namaPesanan, warnaPesanan)
        namaPesanan sekarang berisi "Garong"
        warnaPesanan sekarang berisi "Oranye"
    Langkah 3 (Dirakit):
        this.nama = namaPesanan; (Property nama diisi "Garong")
        this.warnaBulu = warnaPesanan; (Property warnaBulu diisi "Oranye")

*/

function Kucing(namaPesanan, warnaPesanan) {
    this.nama = namaPesanan;
    this.warnaBulu = warnaPesanan;
    this.energi = 100;

    this.mengeong = function () {
        console.log(`Meoww, nama saya ${this.nama} si kucing ${this.warnaBulu}.`);
    }

    this.main = function () {
        this.energi -= 10;
        console.log(`${this.nama} sedang bermain, sisa energi ${this.energi}.`)
    }
}

let kucingMochi = new Kucing("Mochi", "Oranye");
let kucingGarong = new Kucing("Garong", "Putih Polos");

kucingMochi.mengeong();
kucingGarong.mengeong();

kucingMochi.main();