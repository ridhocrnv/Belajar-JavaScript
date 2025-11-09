/* 

Modul 4: Objek Math (Utilitas Matematika)

1. Pemahaman Dasar (The "Why")

Operasi dasar (+, -, *, /) tidak cukup. Bagaimana jika Anda perlu:
    Mendapat angka acak untuk game (lempar dadu, undian)?
    Membulatkan tagihan ke atas (misal, Rp 233.1 menjadi Rp 234)?
    Menemukan skor tertinggi di antara 5 pemain?

Melakukan ini secara manual sangat merepotkan.
    Logika Inti: JavaScript menyediakan "kotak perkakas" matematika bernama Math. Ini 
    adalah objek global (seperti JSON) yang berisi fungsi-fungsi siap pakai.

    Fakta Kunci: Math adalah objek statis. Anda tidak pernah membuat objek Math baru. 
    Anda hanya menggunakan perkakas di dalamnya. (Anda memanggil Math.random(), bukan 
    new Math()).

2. Penjelasan Inti (The "What")

Kita akan fokus pada 4 perkakas paling kuat dan sering digunakan:

    - Math.random() (Mesin Acak)
        Logika: "Beri saya angka acak."
        Fungsi: Menghasilkan angka desimal acak antara 0 (inklusif) dan 1 (eksklusif).
        Hasil: Bisa 0.1234..., 0.9876..., 0.0001..., tapi tidak akan pernah 1.

    - Math.floor(angka) (Pembulat ke Lantai)
        Logika: "Paksa bulatkan angka ini ke bawah."
        Fungsi: Menghilangkan semua desimal dan mengembalikan angka bulat terdekat di bawahnya.
        Contoh: Math.floor(5.99) -> 5. Math.floor(5.1) -> 5.

    - Math.ceil(angka) (Pembulat ke Langit-langit)
        Logika: "Paksa bulatkan angka ini ke atas."
        Fungsi: Jika ada desimal (sekecil apapun), bulatkan ke angka bulat terdekat di atasnya.
        Contoh: Math.ceil(5.1) -> 6. Math.ceil(5.99) -> 6. Math.ceil(5.0) -> 5 (karena tidak ada desimal).

    - Math.max(a, b, c...) (Sang Juara)
        Logika: "Dari semua angka ini, mana yang terbesar?"
        Fungsi: Menerima daftar angka (dipisah koma) dan mengembalikan angka dengan nilai 
        tertinggi. (Ada juga Math.min() untuk kebalikannya).

*/

// 3. Contoh Kode & Logika

// 1. Math.random() - Si Acak
let acak = Math.random();
console.log("Angka acak:", acak); // Output: Sesuatu seperti 0.4571...

// 2. Math.floor() - Si Lantai
let hargaKotor = 105.75;
let hargaBulatBawah = Math.floor(hargaKotor);
console.log("Bulat ke bawah:", hargaBulatBawah); // Output: 105

// 3. Math.ceil() - Si Langit-langit
let ongkirKotor = 2.1; // Berat 2.1 kg
let ongkirBulatAtas = Math.ceil(ongkirKotor);
console.log("Ongkir (kg):", ongkirBulatAtas); // Output: 3 (dihitung 3 kg)

// 4. Math.max() - Si Juara
let skorA = 50;
let skorB = 85;
let skorC = 70;
let skorTertinggi = Math.max(skorA, skorB, skorC);
console.log("Skor tertinggi:", skorTertinggi); // Output: 85

/* 

4. Implementasi & Problem Solving

Masalah: "Saya sedang membuat game lempar dadu. Saya perlu satu angka acak antara 1 dan 6."

Pola Pikir (Problem Solving): Ini adalah logika paling penting saat menggunakan 
Math.random().
    1. Alat Dasar: Math.random(). Ini memberi saya 0.0 s.d. 0.999...
    2. Tujuan: Saya perlu 6 kemungkinan angka (1, 2, 3, 4, 5, 6).
    3. Langkah 1 (Perluas Rentang): Saya kalikan Math.random() dengan 6.
        Math.random() * 6 -> Hasilnya adalah 0.0 s.d. 5.999...
    4. Langkah 2 (Hilangkan Desimal): Saya tidak mau desimal. Saya pakai Math.floor() 
        untuk membulatkan ke bawah.
        Math.floor(Math.random() * 6) -> Hasilnya adalah 0, 1, 2, 3, 4, atau 5.
    5. Langkah 3 (Geser Rentang): Ini sudah 6 angka, tapi mulainya dari 0. Saya ingin mulai dari 
        1. Saya cukup tambahkan 1 di akhir.
        Math.floor(Math.random() * 6) + 1

*/

// Rumus: Math.floor(Math.random() * (max - min + 1)) + min
// Kasus dadu: max=6, min=1
// Math.floor(Math.random() * (6 - 1 + 1)) + 1
// Math.floor(Math.random() * 6) + 1

let lemparanDadu = Math.floor(Math.random() * 6) + 1;
console.log(`Anda melempar dadu dan mendapat: ${lemparanDadu}`); // Output: Angka acak antara 1 s.d. 6