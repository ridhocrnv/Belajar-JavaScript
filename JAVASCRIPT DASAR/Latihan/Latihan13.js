/* 

🎯 PROYEK LATIHAN BAB 13: PERTARUNGAN MELAWAN GOBLIN

Kamu akan mensimulasikan sebuah pertarungan sederhana melawan Goblin. Pertarungan akan 
terus berlanjut hingga HP Goblin habis.

Tugas:

1. Buat variabel hpGoblin dengan nilai 50.
2. Buat variabel seranganBerhasil dengan nilai awal 0.
3. Gunakan while loop dengan kondisi selama hpGoblin > 0.
4. Di dalam loop:
    - Kurangi hpGoblin dengan angka acak antara 5 dan 15 (simulasi damage). Kamu bisa 
      gunakan Math.floor(Math.random() * 11) + 5; untuk ini.
    - Tambah seranganBerhasil sebanyak 1.
    - Tampilkan ke console pesan seperti: "Serangan ke-1! HP Goblin tersisa: (sisa HP)".
5. Setelah loop selesai, tampilkan pesan di console: "Goblin telah dikalahkan dalam 
${seranganBerhasil} serangan!"

*/

let hpGoblin = 50;
let seranganBerhasil = 0;

while (hpGoblin > 0) {
    hpGoblin -= Math.floor(Math.random() * 11) + 5;
    seranganBerhasil++;
    if (hpGoblin <  0) {
        hpGoblin = 0;
    }
    console.log(`Serangan ke-${seranganBerhasil}! HP Goblin tersisa: ${hpGoblin}`);
}

console.log(`Goblin telah dikalahkan dalam ${seranganBerhasil} serangan!`);