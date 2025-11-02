/* 

BAB 7: PEWARISAN SINTAKS MODERN (EXTENDS & SUPER)

Di bab ini, kita akan melakukan hal yang sama persis dengan Bab 4 & 5 (Constructor & 
Prototype Inheritance), tapi dengan sintaks class yang 10x lebih bersih.

Materi 14, 15, & 16: extends, super(), dan super.method()
Kita akan gabungkan 3 materi ini karena mereka adalah satu kesatuan yang tidak bisa dipisahkan.

1. extends (Pewarisan Method/Prototype)
    Apa ini? extends adalah kata kunci yang menggantikan 
    Object.create(Parent.prototype) dan perbaikan .constructor.

    Fungsinya: extends secara otomatis "menyambungkan rantai prototype".

    Logika: Saat Anda menulis class Truk extends Mobil, Anda memberi tahu JavaScript:
        "Saya mau buat class Truk, yang merupakan 'anak' dari class Mobil. Tolong, secara 
        otomatis, sambungkan Truk.prototype ke Mobil.prototype."

        Perbandingan Sintaks (Warisan Method):
            Cara Lama: Truk.prototype = Object.create(Mobil.prototype);
            Cara Baru: class Truk extends Mobil { ... }

2. super() (Super Constructor / Pewarisan Properti)

    Apa ini? super() adalah kata kunci yang menggantikan Mobil.call(this, merk, warna).

    Fungsinya: super() adalah cara kita untuk memanggil constructor milik Induk dari 
    dalam constructor Anak.

    Logika: Saat Anda di dalam constructor Truk, Anda memanggil super(merk, warna). 
    Anda memberi tahu JavaScript:
        "Saya (Truk) butuh merk dan warna. Tapi, saya tidak tahu cara membuatnya. 
        Tolong panggil constructor-nya Mobil (Induk saya), dan biarkan dia yang 
        mengerjakan bagian merakit this.merk dan this.warna."

        Aturan Wajib: Di dalam constructor Anak, Anda WAJIB memanggil super() sebelum Anda 
        boleh menggunakan kata kunci this. Ini karena this sebenarnya "dibuat" oleh constructor 
        Induk.

    Perbandingan Sintaks (Warisan Properti):
        Cara Lama: Mobil.call(this, merk, warna);
        Cara Baru: super(merk, warna);

3. super.method() (Super Method)

    Apa ini? Ini adalah fitur baru yang tidak ada padanannya di cara lama (kita harus memanggil 
    Parent.prototype.method.call(this) yang sangat ribet).

    Fungsinya: Memanggil method milik Induk dari dalam method Anak.

    Logika: Bayangkan Mobil punya method info(). Truk juga ingin punya method 
    info(), tapi dengan tambahan info kapasitasBak.

*/

class Mobil {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
        this.kecepatan = 0;
    }

    klakson() {
        console.log(`Mobil ${this.merk} berbunyi: Tiiinnn!.`);
    }

    info() {
        return `Mobil ${this.merk} warna ${this.warna}.`;
    }
}

class Truk extends Mobil {
    constructor(merk, warna, kapasitasBak) {
        super(merk, warna);
        this.kapasitasBak = kapasitasBak;
    }

    info() {
        let infoTemplate = super.info();

        console.log(`${infoTemplate} Kapasitas: ${this.kapasitasBak}.`);
    }
}

let trukHino = new Truk("Hino", "Hijau", "20 Ton");

console.log(`trukHino.merk`);
trukHino.klakson();
trukHino.info();