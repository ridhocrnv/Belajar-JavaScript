/* 

Latihan Modul 16: "Inventarisasi Tag"

Tantangan: Anda sedang membangun sistem blog. Pengguna telah memasukkan banyak tag 
untuk artikel mereka, dan datanya berantakan dengan banyak duplikat.

Data yang Diberikan: let daftarTag = ["javascript", "web", "css", "html", "web", 
"javascript", "react", "css", "js"];

(Perhatikan: "javascript" dan "js" dianggap berbeda, itu tidak masalah)

Tugas Anda:
1. Buat variabel tagUnik.
2. Gunakan Set untuk mendapatkan jumlah (angka) dari tag unik yang ada. 
(Gunakan properti .size).
3. Tampilkan hasilnya di konsol.

Keluaran yang Diharapkan:
Total tag unik: 6

*/

let daftarTag = ["javascript", "web", "css", "html", "web", 
"javascript", "react", "css", "js"];

let tagUnik = new Set(daftarTag);

console.log(`Total tag unik: ${tagUnik.size}`);