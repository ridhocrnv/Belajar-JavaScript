/* 

Latihan Modul 12: "Mencari Sang Juara"

Tantangan: Anda punya daftar nilai ujian. Anda ingin menemukan nama siswa pertama yang 
mendapat nilai sempurna (100).

Data yang Diberikan: 
let daftarNilai = [
    { nama: "Budi", nilai: 80 }, 
    { nama: "Siti", nilai: 95 },
    { nama: "Aan", nilai: 100 },
    { nama: "Dewi", nilai: 85 },
    { nama: "Joko", nilai: 100 } 
];

Tugas Anda:
1. Gunakan .find() untuk mencari objek siswa pertama yang nilai-nya 100.
2. Dari objek yang Anda temukan, tampilkan properti nama-nya di konsol.

Keluaran yang Diharapkan:
Siswa pertama dengan nilai 100 adalah: Aan

*/

let daftarNilai = [
    { nama: "Budi", nilai: 80 },
    { nama: "Siti", nilai: 95 },
    { nama: "Aan", nilai: 100 },
    { nama: "Dewi", nilai: 85 },
    { nama: "Joko", nilai: 100 }
];

let cariSiswa = daftarNilai.find(siswa => siswa.nilai === 100)
console.log(`Siswa pertama dengan nilai 100 adalah: ${cariSiswa.nama}`);