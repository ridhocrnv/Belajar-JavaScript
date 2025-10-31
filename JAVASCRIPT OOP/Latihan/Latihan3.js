/* 

🚀 Latihan Project Sederhana (Implementasi):
Masalah: Kamu perlu membuat cetakan untuk Siswa.

Tugas: Buat Constructor Function bernama Siswa.

Property: Di dalamnya, berikan 2 property dengan nilai default:

nama (isi dengan "Siswa Baru")

semester (isi dengan 1)

Tes: Buat 1 objek siswaBaru dari cetakan Siswa dan console.log() namanya.

*/

function Siswa() {
    this.nama = "Siswa Baru";
    this.semester = 1;
}

let siswaBaru = new Siswa();

console.log(siswaBaru.nama);