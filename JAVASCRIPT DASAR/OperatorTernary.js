/* 

🤔 Pemahaman Dasar: Ini adalah mantra if-else dalam satu baris. Sangat cepat dan 
efisien untuk keputusan sederhana. Strukturnya adalah: kondisi ? nilai_jika_true : 
nilai_jika_false.

🧠 Pola Pikir Logika: Saat kamu hanya ingin menentukan nilai sebuah variabel berdasarkan 
satu kondisi simpel, menggunakan if-else 4 baris terasa terlalu panjang. Ternary Operator 
merangkumnya menjadi 1 baris, membuat kodemu lebih padat dan mudah dibaca (jika sudah 
terbiasa).

*/

let level = 75;

let kategori;

if (level > 50) {
    kategori = "Kategori Mahir";
} else {
    kategori = "Kategori Pemula.";
}

console.log(`Kategori Level Kamu Adalah: ${kategori}`);

let kategoriTernary = level > 50 ? "Kategori Mahir" : "Kategori Pemula";
console.log(`Kategori Level Kamu Adalah: ${kategoriTernary}`);
