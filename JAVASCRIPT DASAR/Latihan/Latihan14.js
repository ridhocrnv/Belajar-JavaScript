/* 

🎯 PROYEK LATIHAN BAB 14: PENYORTIR RAMUAN AJAIB

Kamu punya ban berjalan (conveyor belt) yang membawa 10 ramuan. Kamu harus mengambil 
semua "Ramuan Penyembuh", tetapi jika kamu menemukan "Ramuan Racun", kamu harus segera 
menghentikan mesinnya karena berbahaya!

Tugas:

1. Buat sebuah array daftarRamuan yang berisi campuran ramuan, pastikan ada "Ramuan 
    Racun" di dalamnya. Contoh: ["Ramuan Penyembuh", "Ramuan Mana", "Ramuan Racun", 
    "Ramuan Penyembuh", ...] (total 10).
2. Buat sebuah array kosong ramuanTerambil.
3. Gunakan for loop untuk memeriksa setiap item di daftarRamuan.
4. Di dalam loop:

    Gunakan if untuk memeriksa jika ramuan saat ini adalah "Ramuan Racun". Jika ya, 
    tampilkan pesan "BAHAYA! Ramuan Racun terdeteksi! Mesin dihentikan!" lalu 
    gunakan break.

    Gunakan if lain untuk memeriksa jika ramuan saat ini bukan "Ramuan Penyembuh". 
    Jika ya, tampilkan pesan "Bukan ramuan penyembuh, dilewati." lalu gunakan 
    continue.

    Jika ramuan itu adalah "Ramuan Penyembuh", tampilkan pesan bahwa ramuan itu 
    diambil dan masukkan ke dalam array ramuanTerambil menggunakan .push().
5. Setelah loop selesai (baik karena break atau selesai normal), tampilkan isi dari 
    ramuanTerambil.

*/

let daftarRamuan = [
    "Ramuan Penyembuh",
    "Ramuan Mana",
    "Ramuan Racun",
    "Ramuan Penyembuh",
    "Ramuan Penyembuh",
    "Ramuan Penyembuh",
    "Ramuan Racun",
    "Ramuan Mana",
    "Ramuan Racun",
    "Ramuan Penyembuh",
];

let ramuanTerambil = [];

for (let i = 0; i < daftarRamuan.length; i++) {
    if (daftarRamuan[i] === "Ramuan Racun") {
        console.log(`BAHAYA! Ramuan Racun Terdeteksi! Mesin dihentikan!`);
        break;
    }
    if (daftarRamuan[i] !== "Ramuan Penyembuh") {
        console.log(`Bukan ramuan penyembuh, lewati.`);
        continue;
    }
    ramuanTerambil.push(daftarRamuan[i]);
    console.log(ramuanTerambil);
}
