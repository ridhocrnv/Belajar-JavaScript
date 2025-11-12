/* 

Modul 14: Manipulasi Array: .slice() (Mengiris) vs .splice() (Memotong/Menyisipkan)

1. Pemahaman Dasar (The "Why")

Inilah masalah kita: let nama = ["Budi", "Siti", "Aan", "Dewi"];
Masalah 1 (Salinan): Saya ingin mendapatkan array baru yang hanya berisi "Siti" dan 
"Aan". Saya tidak mau array asli saya berubah.
Masalah 2 (Modifikasi): Saya ingin menghapus "Siti" dari array asli dan menggantinya 
dengan "Joko".

Dua masalah ini terlihat mirip, tapi solusinya sangat berbeda. Satu butuh "mesin fotokopi", satu 
lagi butuh "pisau bedah".

2. Penjelasan Inti (The "What")

A. .slice(startIndex, endIndex) (Si Mesin Fotokopi 📸)
    Logika: "Mengiris" (slice) atau "menyalin" sebagian dari array.
    Sifat: Immutable (Abadi). Dia tidak pernah mengubah array aslinya.
    Hasil: Mengembalikan ARRAY BARU yang berisi elemen-elemen yang disalin.

    Parameter
        startIndex: Mulai menyalin dari index ini (termasuk).
        endIndex: Berhenti menyalin sebelum index ini (tidak termasuk).
        Jika dikosongkan slice(): Menyalin seluruh array.

B. .splice(startIndex, deleteCount, ...items) (Si Pisau Bedah 🧑‍⚕️)
    Logika: "Memotong" (splice) dan "menyambung" array.
    Sifat: Mutable (Merusak). Dia selalu mengubah array aslinya secara permanen.
    Hasil: Mengembalikan array baru yang berisi elemen-elemen yang dihapus. (Ini sering 
    menjebak. Yang kita pedulikan adalah array aslinya berubah).

    Parameter:
        startIndex: Mulai melakukan operasi bedah dari index ini.
        deleteCount: Berapa banyak elemen yang mau dihapus.

*/

// 3. Contoh Kode & Logika
// Mari kita bedah array yang sama dengan dua perkakas berbeda. let buah = ["Apel", 
//     "Jeruk", "Mangga", "Anggur"];

// Skenario A: .slice() (Saya mau salinan "Jeruk" dan "Mangga")

let buah = ["Apel", "Jeruk", "Mangga", "Anggur"];

// Ambil irisan mulai dari index 1 ("Jeruk")
// sampai SEBELUM index 3 ("Anggur")
let irisanBuah = buah.slice(1, 3);

console.log("Hasil Slice:", irisanBuah); // Output: [ "Jeruk", "Mangga" ]
console.log("Array Asli:", buah); // Output: [ "Apel", "Jeruk", "Mangga", "Anggur" ]
// Array asli AMAN, tidak berubah!

// Skenario B: .splice() (Saya mau hapus "Jeruk" dan "Mangga")

// Mulai dari index 1 ("Jeruk"), hapus 2 elemen
let elemenDihapus = buah.splice(1, 2);

console.log("Elemen Dihapus:", elemenDihapus); // Output: [ "Jeruk", "Mangga" ]
console.log("Array Asli:", buah); // Output: [ "Apel", "Anggur" ]
// Array asli RUSAK, sudah berubah!

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya antrian ["Budi", "Siti", "Aan"]. Saya perlu menyisipkan 'Dewi' di 
antara 'Budi' dan 'Siti' (di index 1)."

Pola Pikir (Problem Solving):
1. Tujuan: Menyisipkan di tengah. Array asli harus berubah.
2. Identifikasi: Ini adalah operasi "bedah". Bukan "fotokopi".
3. Perkakas yang Tepat: .splice().
4. Logika .splice():
    startIndex: Saya mau menyisipkan di index 1.
    deleteCount: Berapa yang mau saya hapus? 0. Saya tidak mau menghapus siapapun.
    items...: Apa yang mau saya sisipkan? "Dewi".
    Perintah: antrian.splice(1, 0, "Dewi");

*/

let antrian = ["Budi", "Siti", "Aan"];
console.log("Antrian Awal:", antrian);

// Mulai di index 1,
// Hapus 0 elemen,
// Sisipkan "Dewi"
antrian.splice(1, 0, "Dewi");

console.log("Antrian Baru:", antrian);
// Output: [ "Budi", "Dewi", "Siti", "Aan" ]