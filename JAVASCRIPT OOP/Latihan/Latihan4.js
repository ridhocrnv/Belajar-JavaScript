/* 

🚀 Latihan Project Sederhana (Implementasi):
Masalah: Objek Siswa (dari latihan Materi 4) masih "pasif".

Tugas: Lanjutkan Constructor Function Siswa Anda.

Method: Tambahkan 1 method:

sapa(): Method ini harus console.log("Halo, nama saya " + this.nama + " 
dan saya semester " + this.semester + ".");

Tes:

Buat siswaBaru dari cetakan Siswa.

Panggil method siswaBaru.sapa().

*/

function Siswa() {
    this.nama = "Siswa Baru";
    this.semester = 1;

    this.sapa = function() {
        console.log(`Halo, nama saya ${this.nama} dan saya semester ${this.semester}.`)
    }
}

let siswaBaru = new Siswa();

siswaBaru.sapa();