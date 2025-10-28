/* 

Materi 48: Kata Kunci this

🤔 Pemahaman Dasar: Lihat kode di atas. Di dalam sapa(), kita harus menulis 
petualang.nama. Ini agak merepotkan. Bagaimana jika nama variabelnya (petualang) kita 
ganti? Method-nya akan rusak. Kata kunci this adalah solusi ajaib. Di dalam sebuah object 
method, this secara otomatis merujuk pada object itu sendiri (si "pemilik" method).

🧠 Pola Pikir Logika: Gunakan this di dalam object method untuk mengakses properti 
atau method lain dari object yang sama. Ini membuat method kita menjadi independen dan 
bisa digunakan di object lain.

*/

const petualang = {
    nama: "Legolaf",
    ras: "Elf",

    sapa: function() {
        console.log(`Halo, aku ${this.nama} dari ras ${this.ras}!`);
    },

    lihatStatus() {
        this.sapa();
        console.log(`Statusku baik-baik saja!`);
    }
}

petualang.sapa();
petualang.lihatStatus();