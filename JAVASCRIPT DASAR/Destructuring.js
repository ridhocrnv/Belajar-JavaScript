/* 

Materi 52: Destructuring Array & Object

🤔 Pemahaman Dasar:

    Object Destructuring: Bayangkan kamu punya object petualang. Daripada menulis 
    let nama = petualang.nama; dan let level = petualang.level;, kamu bisa 
    melakukannya dalam satu baris: const { nama, level } = petualang;.

    Array Destructuring: Bayangkan kamu punya array inventaris. Daripada menulis let 
    item1 = inventaris[0]; dan let item2 = inventaris[1];, kamu bisa menulis: 
    const [item1, item2] = inventaris;.

🧠 Pola Pikir Logika: Tujuannya adalah membuat kodemu lebih singkat dan lebih mudah 
dibaca. Ini sangat berguna saat kamu perlu mengambil banyak properti dari sebuah object 
(misalnya, data dari server) atau beberapa item dari sebuah array.

*/

const hero = {
    namaHero: "Archer Queen",
    hp: 5000,
    level: 80,
    senjata: "Busur-X",
}

// Cara LAMA
// const nama = hero.namaHero;
// const hp = hero.hp;

// Cara BARU (Destructuring)
// Nama variabel HARUS SAMA dengan nama properti
const { namaHero, hp, level, senjata } = hero;

console.log(`Nama: ${namaHero}`);
console.log(`Senjata: ${senjata}`);

// Contoh Kode Array
const koordinat = [120, -15];

const [x, y] = koordinat;

console.log(`Koordinat X: ${x}`);
console.log(`Koordinat Y: ${y}`);