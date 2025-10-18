/* 

🎯 PROYEK LATIHAN BAB 15: LAPORAN INVENTARIS

Kamu harus membuat dua jenis laporan dari data seorang petualang. Satu laporan detail tentang 
statistiknya (menggunakan for...in pada Object), dan satu lagi laporan tentang barang 
bawaannya (menggunakan for...of pada Array).

Tugas:

1. Buat sebuah object dataPetualang yang berisi:
    nama: "Legolas"
    level: 30
    ras: "Elf"
    inventaris: ["Busur Elf", "Panah Perak", "Jubah Gaib"]

2. Laporan Pertama (Statistik):
    - Gunakan for...in untuk menjelajahi object dataPetualang.
    - Di dalam loop, gunakan if untuk mengabaikan properti inventaris (kita tidak mau 
        menampilkannya di sini). Petunjuk: if (properti === "inventaris") continue;.
    - Tampilkan setiap properti dan nilainya ke console.

3. Laporan Kedua (Barang Bawaan):
    - Gunakan for...of untuk menjelajahi array dataPetualang.inventaris.
    - Tampilkan setiap item yang ditemukan ke console.

Contoh Hasil Akhir di Console:

--- Statistik Petualang ---
nama: Legolas
level: 30
ras: Elf
--- Barang Bawaan ---
- Busur Elf
- Panah Perak
- Jubah Gaib

*/

// Kita membuat sebuah 'Object' yang berisi semua data tentang petualang.
// 'inventaris' adalah sebuah properti yang nilainya berupa 'Array'.
const dataPetualang = {
    nama: "Legolas",
    level: 30,
    ras: "Elf",
    inventaris: ["Busur Elf", "Panah Perak", "Jubah Gaib"],
};

console.log("--- Statistik Petualang ---");

// Kita gunakan 'for...in' karena kita ingin menjelajahi SETIAP PROPERTI (atau 'key')
// yang ada DI DALAM object 'dataPetualang'.
for (const properti in dataPetualang) {

    // Di setiap putaran, kita periksa APAKAH nama properti saat ini adalah "inventaris".
    if (properti === "inventaris") { 
        // Jika ya, kita gunakan 'continue' untuk MELOMPATI sisa kode di putaran ini
        // dan langsung lanjut ke properti berikutnya.
        continue;
    }
    let nilai = dataPetualang[properti];
    console.log(`${properti}: ${nilai}`);
}

console.log("--- Barang Bawaan ---");
for (item of dataPetualang.inventaris) {
    console.log(`- ${item}`);
}