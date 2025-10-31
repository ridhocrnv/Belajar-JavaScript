/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Siswa kita masih "Siswa Baru" (dari Materi 5). Kita ingin mendaftarkan siswa 
dengan data yang benar saat mereka dibuat.

Tugas: Modifikasi Constructor Function Siswa Anda.
Parameter: Tambahkan parameter inputNama dan inputKampus.

Logika:
    Gunakan inputNama untuk mengisi this.nama.
    Gunakan inputKampus untuk mengisi property baru bernama kampus.
    (Biarkan semester tetap 1 sebagai default).
    Modifikasi method sapa() agar berbunyi: "Halo, saya " + this.nama + " dari "
    + this.kampus + "."

Tes:
Buat dua siswa:
    let siswaRidho = new Siswa("Ridho Ahmad", "Universitas Halu Oleo");
    let siswaBudi = new Siswa("Budi Santoso", "Universitas Gadjah Mada");

Panggil siswaRidho.sapa().
Panggil siswaBudi.sapa().
Cek semester Ridho: console.log(siswaRidho.semester); (Harusnya 1).

Kembangkan Sendiri (Problem Solving):
Tantangan: semester masih di-set default ke 1. Bagaimana jika kamu ingin mendaftarkan 
siswa yang sudah semester 3?
Coba: Modifikasi cetakan Siswa agar menerima parameter ketiga, inputSemester, dan 
gunakan itu untuk mengisi this.semester.

*/

function Siswa(inputNama, inputKampus, inputSemester) {
    this.nama = inputNama;
    this.semester = inputSemester;
    this.kampus = inputKampus;

    this.sapa = function() {
        console.log(`Halo, nama saya ${this.nama} dari ${this.kampus}.`)
    }

    this.sapaLengkap = function() {
        console.log(`Halo, perkenalkan nama saya ${this.nama} saya mahasiswa semester ${this.semester} dan berkuliah di kampus ${this.kampus}.`)
    }
}

let siswaRidho = new Siswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);
let siswaBudi = new Siswa("Budi Santoso", "Universitas Gadjah Mada", 5);

siswaRidho.sapaLengkap();
siswaBudi.sapa();