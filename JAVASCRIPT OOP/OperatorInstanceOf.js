/* 

Materi 21: Operator instanceof

🤔 Pemahaman Dasar: instanceof adalah operator (seperti +, -, atau ===) yang 
mengembalikan nilai boolean (true atau false).

Tugasnya adalah menjawab satu pertanyaan:
"Apakah objek ini dibuat menggunakan cetakan Class ini, atau cetakan Induk-nya?"

Sintaks: objek instanceof Class
mhsRidho instanceof Mahasiswa -> (Apakah Ridho adalah instance dari Mahasiswa?)
mhsRidho instanceof Orang -> (Apakah Ridho adalah instance dari Orang?)

🧠 Pola Pikir Logika (Tes DNA Rantai Prototype): Ini adalah bagian terpenting. instanceof 
jauh lebih pintar daripada sekadar mengecek cetakan langsungnya.

Saat Anda bertanya mhsRidho instanceof Orang:
1. JavaScript tidak hanya bertanya, "Apakah mhsRidho dibuat oleh new Orang()?"
2. JavaScript bertanya, "Mari kita lihat rantai prototype milik mhsRidho. Apakah 
Orang.prototype ada di mana saja dalam rantai itu?"

Mari kita telusuri rantai mhsRidho (dari Materi 16): mhsRidho ---> Mahasiswa.prototype ---> 
Orang.prototype ---> Object.prototype

instanceof adalah alat untuk "membaca" rantai prototype yang sudah kita bangun susah payah.

*/

class Orang {
    constructor(nama) {
        this.nama = nama;
    }

    sapa() {
        console.log(`Halo, ${this.nama}!.`);
    }
}

class Mahasiswa extends Orang {
    constructor(nama, kampus, semester) {
        super(nama);
        this.kampus = kampus;
        this.semester = semester;
    }

    sapaLengkap() {
        console.log(`Halo, nama saya ${this.nama}. Mahasiswa semester ${this.semester}. Dari ${this.kampus}.`);
    }
}

class Kucing {
    constructor(nama) {
        this.nama = nama;
    }
}

let mhsRidho = new Mahasiswa("Ridho", "UHO", 3);
let pakBudi = new Orang("Pak Budi");
let kucingGarong = new Kucing("Garong");

console.log("--- Tes Mahasiswa ---");
console.log(mhsRidho instanceof Orang);
console.log(mhsRidho instanceof Mahasiswa);
console.log(mhsRidho instanceof Object);

console.log("--- Tes Pak Budi ---");
console.log(pakBudi instanceof Orang);
console.log(pakBudi instanceof Mahasiswa);
console.log(pakBudi instanceof Object);

console.log("--- Tes Kucing ---");
console.log(kucingGarong instanceof Kucing);
console.log(kucingGarong instanceof Mahasiswa);
console.log(kucingGarong instanceof Object);