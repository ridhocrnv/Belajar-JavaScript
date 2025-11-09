/* 

Latihan Modul 7: "Manajemen Antrian Sederhana"

Tantangan: Anda sedang membuat sistem antrian untuk loket. Antrian adalah contoh sempurna 
dari logika "Masuk di Belakang, Keluar dari Depan" (First-In, First-Out). Tapi untuk latihan ini, 
kita akan gunakan "Masuk di Belakang, Keluar dari Belakang" (Last-In, First-Out) menggunakan 
push dan pop.

Tugas Anda:
1. Buat sebuah array kosong bernama antrian.
2. Ada 3 orang datang: "Budi", "Siti", dan "Aan" (masukkan ke antrian satu per satu 
menggunakan push).
3. Setelah "Aan" masuk, tampilkan di konsol: "Jumlah antrian sekarang: [jumlah]" 
(Gunakan length).
4. Loket memanggil 1 orang: Panggil orang terakhir yang masuk (gunakan pop).
5. Tampilkan di konsol: "[Nama] silakan ke loket." (Gunakan variabel hasil dari pop).
6. Tampilkan di konsol: "Sisa antrian: [daftar antrian]". (Gunakan join untuk 
menampilkan sisa antrian sebagai string yang rapi, misal: "Budi, Siti").

Keluaran yang Diharapkan:
Jumlah antrian sekarang: 3
Aan silakan ke loket.
Sisa antrian: Budi, Siti

*/

let orang1 = "Budi";
let orang2 = "Siti";
let orang3 = "Aan";

let antrian = [];

antrian.push(orang1);
antrian.push(orang2);
antrian.push(orang3);

console.log(`Jumlah antrian sekarang: ${antrian.length}`);
console.log(`${antrian.pop()} silakan ke loket.`);

let sisaAntrian = antrian.join(", ");
console.log(`Sisa antrian: ${sisaAntrian}`);