/* 

Latihan Modul 15: "Papan Peringkat"

Tantangan: Anda memiliki array berisi skor-skor mentah dari sebuah permainan. Anda perlu 
menampilkan skor tersebut di papan peringkat, diurutkan dari skor tertinggi ke skor terendah.

Data yang Diberikan: let skorPermainan = [55, 120, 88, 95, 210, 30];

Tugas Anda:

1. Gunakan .sort() pada skorPermainan.
2. Berikan "fungsi pembanding" (compare function) yang benar untuk mengurutkannya secara 
Descending (turun / tertinggi ke terendah).
3. Tampilkan skorPermainan (yang sudah terurut) di konsol.

Keluaran yang Diharapkan:
Papan Peringkat: [ 210, 120, 95, 88, 55, 30 ]

*/

let skorPermainan = [55, 120, 88, 95, 210, 30];

skorPermainan.sort(function (a, b) {
    return b - a;
});

console.log(`Papan Peringkat: ${skorPermainan}`);