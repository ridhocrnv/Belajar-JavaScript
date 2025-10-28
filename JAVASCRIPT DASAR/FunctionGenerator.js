/* 

Materi 44: Function Generator

🤔 Pemahaman Dasar: Generator Function dibuat dengan menambahkan tanda bintang 
(*) setelah kata function (contoh: function* nama() {}). Di dalamnya, kita tidak 
menggunakan return. Kita menggunakan kata kunci baru: yield.

    yield (artinya "memberikan" atau "menghasilkan"): Ini seperti return yang bisa 
    dijeda. Saat yield dipanggil, ia akan mengembalikan sebuah nilai dan function akan 
    "tertidur" di titik itu.

    Untuk "membangunkannya", kita menggunakan metode .next().

🧠 Pola Pikir Logika: Generator sangat berguna saat kamu perlu menghasilkan urutan 
data yang sangat besar (atau tak terbatas) tetapi tidak ingin menyimpannya semua di 
memori sekaligus. Contoh: mengambil data dari database satu per satu, atau membuat 
urutan angka Fibonacci tanpa batas. Kamu hanya perlu "meminta" nilai berikutnya saat kamu 
membutuhkannya.

*/

function* buatUrutanAngka() {
    console.log(`Generator dimulai...`);
    yield 1;
    console.log(`Generator dilanjutkan...`);
    yield 2;
    console.log(`Generator dilanjutkan lagi...`);
    yield 3;
    console.log(`Generator selesai.`);
}

const generator = buatUrutanAngka();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());