/*

🤔 Pemahaman Dasar: Sekarang bagian yang lebih ajaib. Apa yang terjadi jika kita 
menggunakan operator && (DAN) dan || (ATAU) pada nilai-nilai yang bukan true atau 
false? Mereka tidak selalu menghasilkan true atau false!

    Operator || (ATAU): Mencari nilai Truthy pertama dari kiri ke kanan. Jika 
    menemukan, ia akan mengembalikan nilai itu. Jika tidak ada, ia akan mengembalikan nilai 
    terakhir.

    Operator && (DAN): Mencari nilai Falsy pertama dari kiri ke kanan. Jika menemukan, 
    ia akan mengembalikan nilai itu. Jika semuanya truthy, ia akan mengembalikan nilai 
    terakhir.

🧠 Pola Pikir Logika: Ini adalah "jalan pintas" versi lama untuk memberikan nilai default atau 
menjalankan fungsi jika kondisi terpenuhi.

    let nama = inputUser || "Tamu" (Jika inputUser falsy, nama akan menjadi 
    "Tamu").

    adaKoneksi && jalankanDownload() (Fungsi jalankanDownload hanya akan 
    dieksekusi jika adaKoneksi truthy).

*/

// Contoh Operator || (ATAU)
let namaPanggilan = "";
let namaDefault = "Pengguna";
let namaFinal = namaPanggilan || namaDefault;
console.log(`Nama yang ditampilkan: ${namaFinal}.`); // Hasilnya: "Pengguna"

// Contoh Operator && (DAN)
let pemainSiap = true;
// Karena pemainSiap adalah truthy, ekspresi akan lanjut dan mengembalikan nilai terakhir.
let statusGame = pemainSiap && "Mulai Permainan";
console.log(`Status Game: ${statusGame}.`); // Hasilnya: "Mulai Permainan!"

/* 

Penting: Untuk memberi nilai default, sekarang lebih disarankan memakai ?? (Nullish 
Coalescing) dari bab sebelumnya, karena || akan salah jika nilainya 0 atau "" padahal 
itu nilai yang valid.

*/