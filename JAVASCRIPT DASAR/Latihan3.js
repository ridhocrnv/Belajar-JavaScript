/* 

Kamu ditugaskan menjadi penjaga gerbang sebuah wahana petualangan. Tugasmu adalah 
membuat program untuk secara otomatis memeriksa apakah seorang anak boleh naik atau tidak.

Syarat Naik Wahana:
Minimal umur 10 tahun.
Minimal tinggi 140 cm.

Tugas:

1. Buat variabel namaAnak, umurAnak, dan tinggiAnak. Isi dengan data anak pertama 
(misal: "Amel", 8, 135).

2. Buat dua variabel boolean:
'lolosSyaratUmur' yang berisi hasil perbandingan umur anak dengan syarat umur.
'lolosSyaratTinggi' yang berisi hasil perbandingan tinggi anak dengan syarat tinggi.

3.Buat variabel boolean terakhir bernama bolehNaik yang berisi hasil penggabungan dua 
syarat di atas menggunakan operator logika DAN (&&).

4. Gunakan String Template dan console.log() untuk menampilkan hasilnya dengan format: 
Halo ${namaAnak}, hasil pengecekan: ${bolehNaik}.

5. Bonus: Coba ganti nilai variabel umurAnak dan tinggiAnak seolah-olah ada anak lain 
yang mendaftar, dan lihat apakah hasilnya berubah sesuai logika.

*/

let namaAnak = "Amel";
let umurAnak = 8;
let tinggiAnak = 135;

let lolosSyaratUmur = umurAnak >= 10;
let lolosSyaratTinggi = tinggiAnak >= 140;

let bolehNaik = lolosSyaratUmur && lolosSyaratTinggi;

console.log(`Halo ${namaAnak}, hasil pengecekkan: ${bolehNaik}.`);