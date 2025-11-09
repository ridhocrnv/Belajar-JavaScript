/* 

Latihan Modul 5: "Membuat Kalender Pribadi"

Tantangan: Tuliskan skrip yang membuat dan menampilkan 3 objek Date yang berbeda di 
konsol:

1. Waktu Sekarang: Buat variabel waktuSekarang yang berisi tanggal dan waktu saat ini.
2. Tahun Baru: Buat variabel tahunBaru yang mewakili tanggal 1 Januari 2026. Gunakan cara 
"String" (new Date("...")).
3. Hari Lahir Anda (atau tanggal acak): Buat variabel hariLahir menggunakan cara 
"Spesifik" (new Date(tahun, bulan, tanggal)). Ingat "Jebakan Bulan"! (Jika Anda tidak 
nyaman, gunakan saja tanggal 3 Oktober 2025, 2025-10-03).

Keluaran yang Diharapkan: (Tanggal/waktu Anda akan berbeda, tapi formatnya akan seperti ini)

Waktu Sekarang: Sun Nov 09 2025 12:35:10 GMT+0800 (...)
Tahun Baru: Wed Jan 01 2026 08:00:00 GMT+0800 (...)
Hari Lahir: Fri Oct 03 2025 00:00:00 GMT+0800 (...)

*/

let now = new Date();
let newYear = new Date("2026-01-01");
let birthDay = new Date(2005, 2, 26);

console.log(`Waktu Sekarang: ${now}`);
console.log(`Tahun Baru: ${newYear}`);
console.log(`Hari Lahir: ${birthDay}`);