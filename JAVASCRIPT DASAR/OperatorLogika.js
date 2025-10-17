/* 

🤔 Pemahaman Dasar:
Jika kamu punya dua hasil perbandingan (true atau false), operator 
logika membantumu menggabungkannya.

DAN (&&): Menghasilkan true hanya jika kedua sisinya true.
(Contoh: Aku bisa masuk jika punya kunci DAN pintunya tidak dikunci).

ATAU (||): Menghasilkan true jika salah satu sisinya true.
(Contoh: Aku akan senang jika diberi permen ATAU diberi es krim).

BUKAN (!): Membalik nilai. !true menjadi false, dan !false
menjadi true.

*/

// Contoh Kode

let nilai = true;
let kehadiran = false;

let ujian = nilai && kehadiran;
let ujian1 = nilai || kehadiran;

console.log("Apakah boleh ikut ujian? ", ujian);
console.log("Apakah boleh ikut ujian? ", ujian1);