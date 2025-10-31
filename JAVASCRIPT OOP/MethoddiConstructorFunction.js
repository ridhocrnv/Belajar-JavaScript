/* 

Materi 5: Method di Constructor Function

🤔 Pemahaman Dasar: Objek kita masih "pasif". Kucing kita cuma punya data, tapi tidak bisa 
melakukan apa-apa. Method adalah "Kemampuan" atau "Perilaku" yang kita tempelkan ke objek.

Ini adalah "fungsi" yang hidup di dalam this.

🧠 Pola Pikir Logika: Bayangkan this adalah sebuah robot mainan.

this.nama = "Robo" -> Ini adalah Property (stiker nama di robot).
this.bicara = function() { ... } -> Ini adalah Method (tombol "Bicara" di punggung robot).

Saat kita menempelkan sebuah function ke this, kita memberinya "kemampuan". Dan yang 
paling keren, "kemampuan" itu bisa mengakses "sifat" dari robot itu sendiri (menggunakan 
this di dalam method).

*/

function Kucing() {
    this.nama = "Mochi";
    this.warnaBulu = "Putih";

    this.mengeong = function() {
        console.log(`Meoww, nama saya ${this.nama}`);
    }
}

let kucingA = new Kucing();
let kucingB = new Kucing();
kucingB.nama = "Garong";

kucingA.mengeong();
kucingB.mengeong();