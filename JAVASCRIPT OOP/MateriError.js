/* 

Materi 24: Error (Objek Kesalahan)

🤔 Pemahaman Dasar: Di JavaScript, Error adalah sebuah class bawaan, sama seperti 
Object, Array, atau Kucing yang kita buat.

Tugasnya adalah menjadi "bungkusan" standar untuk informasi ketika terjadi kesalahan.

Setiap kali program Anda crash (misalnya Anda memanggil fungsiYangTidakAda()), di belakang 
layar, JavaScript sedang membuat new ReferenceError(...) dan "melempar"-nya.

🧠 Pola Pikir Logika (Surat Peringatan vs Suar Darurat):
    console.log("Error!"): Ini seperti Anda berbisik di tengah keramaian, "ada masalah". 
    Tidak ada yang peduli, dan program akan terus berjalan, kemungkinan dengan data yang 
    sudah rusak.

    new Error("Masalah!"): Ini seperti Anda menulis surat peringatan yang rinci. Anda 
    membuat objek yang berisi:
        name: Tipe masalah (Misal: Error, TypeError, RangeError).
        message: Pesan yang Anda tulis (Misal: "Semester tidak boleh negatif!").
        stack: "Jejak" di mana surat ini ditulis (baris kode mana yang bermasalah).

*/

console.log("Program dimulai...");

// 1. Membuat instance (objek) dari class Error
// "Input tidak valid!" adalah 'message'-nya
let errorValidasi = new Error("Input tidak valid!");

// 2. Ada juga jenis Error yang lebih spesifik (turunan dari Error)
// TypeError: jika tipe data salah (misal, string diisi angka)
let errorTipe = new TypeError("Input harus berupa angka!");
// RangeError: jika angka di luar jangkauan (misal, semester -1)
let errorJangkauan = new RangeError("Angka harus antara 1 dan 10!");

// --- Mari kita bedah isi 'surat' itu ---
console.log("--- Error 1 ---");
console.log(errorValidasi.name);    // Output: "Error"
console.log(errorValidasi.message); // Output: "Input tidak valid!"

console.log("--- Error 2 ---");
console.log(errorTipe.name);    // Output: "TypeError"
console.log(errorTipe.message); // Output: "Input harus berupa angka!"

console.log("--- Error 3 ---");
console.log(errorJangkauan.name);    // Output: "RangeError"
console.log(errorJangkauan.message); // Output: "Angka harus antara 1 dan 10!"

// 'stack' berisi 'jejak' di mana error ini dibuat
console.log(errorJangkauan.stack); 

// PENTING: Program ini TIDAK crash!
// Kita hanya 'membuat' objek error, kita belum 'melempar'-nya.
console.log("Program selesai dengan normal.");