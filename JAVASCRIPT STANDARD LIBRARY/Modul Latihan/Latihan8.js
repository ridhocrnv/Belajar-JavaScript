/* 

Latihan Modul 8: "Daftar Nilai Mahasiswa"

Tantangan: Anda memiliki array berisi daftar nilai ujian. Anda ingin mencetak status "Lulus" atau 
"Gagal" untuk setiap nilai.

Data yang Diberikan: let nilaiUjian = [85, 42, 90, 65, 55]; Aturan:
Nilai KKM (Batas Lulus) adalah 60.
Jika nilai 60 atau lebih, statusnya "Lulus".
Jika nilai di bawah 60, statusnya "Gagal".

Tugas Anda: Gunakan forEach untuk mengiterasi nilaiUjian. Di dalam callback function, 
gunakan logika if...else untuk mencetak status setiap nilai.

Keluaran yang Diharapkan:
Nilai 85: Lulus
Nilai 42: Gagal
Nilai 90: Lulus
Nilai 65: Lulus
Nilai 55: Gagal

*/

let nilaiUjian = [85, 42, 90, 65, 55];

nilaiUjian.forEach(function (nilai) {
    let status = (nilai < 60) ? "Gagal" : "Lulus";
    console.log(`Nilai ${nilai}: ${status}`);
});