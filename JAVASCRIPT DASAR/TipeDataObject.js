/* 

🤔 Pemahaman Dasar: Object adalah kartu identitas petualang. Ini adalah variabel yang 
bisa menyimpan banyak data, tetapi setiap data memiliki label (key) sendiri, bukan nomor 
index. Ini berguna untuk mendeskripsikan satu hal secara detail.

🧠 Pola Pikir Logika: Jika kamu ingin menyimpan data tentang seorang pahlawan, akan 
lebih masuk akal menggunakan label seperti nama, level, kekuatan daripada index 0, 
1, 2. Object memungkinkan kita menyimpan data yang saling berhubungan dalam satu 
wadah yang terstruktur dan deskriptif.

*/

// Membuat sebuah Object (kartu identitas)
let petualang = {
    nama: "Aragon",
    level: 15,
    kekuatan: 250,
    siapBertarung: true
}

console.log(`Kartu identitas petualang: ${petualang}`);

// Mengakses data menggunakan labelnya (dot notation)
console.log(`Nama petualang ini adalah: ${petualang.nama}`);
console.log(`Level petualang ini adalah: ${petualang.level}`);

// Mengubah nilai salah satu data
petualang.level = 16;
console.log(`Petualang naik level menjadi: ${petualang.level}`);