/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Anda punya class Mahasiswa (dari latihan Materi 10). Tapi logikanya, 
Mahasiswa adalah seorang Orang. Kita bisa membuat class Orang sebagai Induk.

Tugas 1 (Induk): Buat class Orang baru.
    constructor(nama): Set this.nama = nama;.
    method sapa(): console.log(Halo, nama saya ${this.nama}.);

Tugas 2 (Anak): Lakukan refactor pada class Mahasiswa Anda.
Ubah definisinya menjadi: class Mahasiswa extends Orang { ... }
Di dalam constructor(nama, kampus, semester):
1. Panggil constructor Induk menggunakan super() untuk mengurus nama.
2. Hapus this.nama = nama; (karena sudah diurus super()).
3. Set this.kampus dan this.semester seperti biasa.

Tes:
Buat objek: let mhsRidho = new Mahasiswa("Ridho", "Halu Oleo", 3);
Panggil method warisan: mhsRidho.sapa(); (Harus "Halo, nama saya Ridho.")
Panggil method asli: mhsRidho.sapaLengkap(); (Harus tetap bekerja)

Kembangkan Sendiri (Problem Solving):
Tantangan: Method sapaLengkap() milik Mahasiswa sekarang duplikat.

    sapa() (Induk): "Halo, nama saya Ridho."

    sapaLengkap() (Anak): "Halo, nama saya Ridho. Mahasiswa semester 3. Sedang 
    berkuliah di Universitas Halu Oleo."

Tugas: Lakukan refactor pada sapaLengkap() agar TIDAK duplikat. Gunakan 
super.sapa() untuk mendapatkan "Halo, nama saya Ridho." lalu tambahkan sisa string-
nya. (Catatan: Anda mungkin harus mengubah sapa() agar me-return string, bukan 
console.log).

*/

class Orang {
    constructor(nama) {
        this.nama = nama;
    }

    sapa() {
        return(`Halo, nama saya ${this.nama}.`);
    }
}

class Mahasiswa extends Orang {
    constructor(nama, kampus, semester) {
        super(nama);
        this.kampus = kampus;
        this.semester = semester;
    }

    sapaLengkap() {
        let sapaTemplate = super.sapa();
        console.log(`${sapaTemplate} Mahasiswa semester ${this.semester}. Sedang berkuliah di ${this.kampus}.`)
    }
}

let mhsRidho = new Mahasiswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);

console.log(mhsRidho.sapa()); // Ini akan mencetak string dari method induk
mhsRidho.sapaLengkap();