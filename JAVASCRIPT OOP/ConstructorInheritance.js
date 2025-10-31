/* 

Materi 7: Constructor Inheritance (Pewarisan Properti)

🤔 Pemahaman Dasar: Inheritance (Pewarisan) adalah konsep di mana sebuah "Cetakan Anak" 
(Child Constructor) bisa mengambil semua Property dan Method dari "Cetakan Induk" (Parent 
Constructor).

Hubungannya adalah "IS-A" (Adalah Seorang/Sebuah):
    Mahasiswa adalah seorang Orang.
    Truk adalah sebuah Mobil.
    Kucing adalah seekor Binatang.

Logikanya, Mahasiswa (Anak) harusnya punya semua sifat Orang (Induk), seperti nama dan 
umur. PLUS, Mahasiswa punya sifatnya sendiri, seperti nim dan kampus.

*/

// --- PABRIK INDUK (Parent) ---
function Orang(nama) {
    this.nama = nama;

    this.makan = function () {
        console.log(this.nama + " sedang makan nasi.");
    };
}

// --- PABRIK ANAK (Child) ---
function Mahasiswa(nama, nim) {
    // "Pinjam" resep dari Pabrik Orang.
    // 'this' di sini adalah 'this' milik Mahasiswa
    // 'nama' diteruskan ke constructor Orang
    Orang.call(this, nama);

    // Property & Method spesifik Mahasiswa
    this.nim = nim;
    this.belajar = function () {
        console.log(this.nama + " dengan NIM " + this.nim + " sedang belajar OOP.");
    };
}

// --- Produksi ---
// Kita hanya panggil pabrik Anak, tapi dia otomatis memanggil pabrik Induk
let ridho = new Mahasiswa("Ridho Ahmad Irawan", "F1G1XXXX");

// --- Tes Hasil ---
console.log(ridho.nama);  // Output: Ridho Ahmad Irawan (Property dari Orang)
console.log(ridho.nim);   // Output: F1G1XXXX (Property dari Mahasiswa)

ridho.makan();   // Output: Ridho Ahmad Irawan sedang makan nasi. (Method dari Orang)
ridho.belajar(); // Output: Ridho Ahmad Irawan dengan NIM F1G1XXXX sedang belajar OOP. (Method dari Mahasiswa)