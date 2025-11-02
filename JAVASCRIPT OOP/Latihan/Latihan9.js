/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: class Mahasiswa Anda masih rentan. mhsRidho.semester = -5 masih bisa dilakukan.

Tugas: Amankan properti semester di class Mahasiswa Anda.
1. Di constructor, ubah this.semester = semester menjadi this._semester = semester.
2. Buat get semester() yang mengembalikan this._semester.
3. Buat set semester(value) yang memiliki logika validasi:
    Jika value bukan angka (typeof value !== 'number') ATAU value kurang dari 1, cetak 
    console.error("Error: Semester tidak valid.") dan return (hentikan).

    Jika valid, set this._semester = value;.

Tes:
1. Buat mhsRidho seperti biasa.
2. console.log(mhsRidho.semester); (Harus memanggil get dan menampilkan 3).
3. Coba mhsRidho.semester = -2; (Harus memanggil set dan menampilkan error)
4. Coba mhsRidho.semester = 5; (Harus memanggil set dan berhasil).
5. console.log(mhsRidho.semester); (Harus menampilkan 5).

Kembangkan Sendiri (Problem Solving):

Tantangan (Computed Property): Di class Orang, ubah 
constructor(nama) menjadi constructor(namaDepan, namaBelakang). Simpan di this.namaDepan dan 
this.namaBelakang. Lalu, buat get namaLengkap() (tanpa setter) yang menggabungkan 
this.namaDepan + " " + this.namaBelakang.

Tes: Buat let orang = new Orang("Budi", "Santoso"); lalu panggil 
console.log(orang.namaLengkap); (Harus "Budi Santoso").

*/

class Orang {
    constructor(namaDepan, namaBelakang) {
        this.namaDepan = namaDepan;
        this.namaBelakang = namaBelakang;
    }

    get namaLengkap() {
        return `${this.namaDepan} ${this.namaBelakang}`;
    }
}

let orang = new Orang("Budi", "Santoso");
console.log(orang.namaLengkap);

class Mahasiswa {
    constructor(nama, kampus, semester) {
        this.nama = nama;
        this.kampus = kampus;
        this.semester = semester;
    }

    get semester() {
        console.log(`GETTER: Seseorang membaca data semester...`);
        return `${this._semester}`
    }

    set semester(dataSemester) {
        console.log("SETTER: Seseorang mencoba mengubah data semester...");

        if (typeof dataSemester !== "number") {
            console.error("Error: Data semester harus berupa angka!");
            return; // Ditolak!
        }

        if (dataSemester < 1) {
            console.log("Error: Data semester tidak boleh negatif!");
            return;
        }

        console.log("Data diterima!");
        this._semester = dataSemester;
    }
}

let mhsRidho = new Mahasiswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);

mhsRidho.semester = -2;
console.log(mhsRidho.semester);

mhsRidho.semester = 5;
console.log(mhsRidho.semester);

mhsRidho._semester = -100;
console.log(mhsRidho.semester);