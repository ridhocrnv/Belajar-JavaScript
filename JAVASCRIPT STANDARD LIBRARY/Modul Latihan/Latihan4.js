/* 

Latihan Modul 4: "Sistem Undian Sederhana"

Tantangan: Anda sedang membuat dua fungsi kecil untuk sistem undian.

Data yang Diberikan: let skorPemain1 = 58; let skorPemain2 = 93; let skorPemain3 = 71;

Tugas Anda:
1. Cari Pemenang Skor: Gunakan Math.max() untuk menemukan skor tertinggi dari ketiga 
pemain dan tampilkan di konsol.
2. Buat "Koin Ajaib": Buatlah simulasi lempar koin.
    Gunakan Math.random().
    Buat logika if...else: Jika angka acaknya di bawah 0.5, tampilkan "Hasil: ANGKA".
    Jika tidak (yaitu 0.5 atau lebih), tampilkan "Hasil: GAMBAR".

Keluaran yang Diharapkan:
Skor tertinggi adalah: 93
Hasil: ANGKA

(atau "Hasil: GAMBAR", tergantung keberuntungan Anda!)

*/

let skorPemain = [58, 93, 71];

let cariPemenang = Math.max(...skorPemain);
console.log(`Skor tertinggi adalah: ${cariPemenang}`);

let koinAjaib = Math.random();

let hasil = (koinAjaib < 0.5) ? "Hasil: ANGKA" : "Hasil: GAMBAR";
console.log(hasil);