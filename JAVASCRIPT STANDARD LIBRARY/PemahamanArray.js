/* 

Modul 7: Pengenalan Array (Metode Dasar)

1. Pemahaman Dasar (The "Why")

Bayangkan Anda punya 5 skor pemain. Apakah Anda akan menyimpannya seperti ini? let skor1 
= 90; let skor2 = 85; let skor3 = 100; ...dan seterusnya sampai skor5.

Ini sangat tidak efisien. Bagaimana jika ada 1000 pemain?

Logika Inti: Pikirkan Array sebagai lemari arsip atau rantang bersusun. Ini adalah satu 
variabel tunggal (lemari) yang bisa menampung banyak nilai (arsip) sekaligus.

Struktur: Setiap arsip di dalam lemari punya nomor "laci" yang kita sebut index (dimulai dari 
0). Ini sama persis dengan index pada String.

Problem Solving: Array memecahkan masalah pengelolaan data dalam jumlah besar. Ia 
memungkinkan kita menyimpan, mengakses, dan memanipulasi koleksi data dengan mudah.

2. Penjelasan Inti (The "What")

Array adalah tipe data khusus di JavaScript yang berfungsi sebagai daftar yang berurutan. 
Anda membuatnya dengan kurung siku [].

Kita akan fokus pada 4 perkakas dasar untuk mengelola "lemari" ini:
1. length (Si Pengukur)
    Logika: "Berapa banyak arsip di dalam lemari ini?"

    Fungsi: Ini adalah properti (bukan fungsi), jadi tidak pakai (). Ia mengembalikan jumlah 
    total elemen di dalam array.

    Penting: Jika length adalah 3, maka index terakhirnya adalah 2 (karena index mulai 
    dari 0).

2. push(elemenBaru) (Si Penambah di Belakang)
    Logika: "Masukkan arsip baru ini ke laci paling akhir."

    Fungsi: Menambahkan satu (atau lebih) elemen ke akhir array. Ini mengubah (mutasi) 
    array aslinya.

3. pop() (Si Pengambil dari Belakang)
    Logika: "Keluarkan arsip dari laci paling akhir dan berikan padaku."

    Fungsi: Menghapus elemen terakhir dari array dan mengembalikan elemen yang 
    dihapus itu. Ini juga mengubah array aslinya.

4. join(separator) (Si Penggabung)
    Logika: "Ambil semua arsip, susun jadi satu, dan tempelkan jadi satu teks."

    Fungsi: Menggabungkan semua elemen array menjadi satu String tunggal, dipisahkan 
    oleh separator yang Anda tentukan.

*/

// 3. Contoh Kode & Logika
// Mari kita kelola sebuah daftar belanja:

// Membuat Array: daftar belanjaan kita
let keranjang = ["Apel", "Jeruk", "Mangga"];

// 1. Mengakses Elemen (Pakai Index)
console.log(keranjang[0]); // Output: "Apel" (Index 0)
console.log(keranjang[1]); // Output: "Jeruk" (Index 1)

// 2. Properti 'length' (Mengukur)
console.log(keranjang.length); // Output: 3

// 3. Method 'push' (Menambah di Akhir)
keranjang.push("Anggur");
// 'keranjang' sekarang menjadi: ["Apel", "Jeruk", "Mangga", "Anggur"]
console.log(keranjang);

// 4. Method 'pop' (Menghapus dari Akhir)
let barangTerakhir = keranjang.pop();
// 'keranjang' sekarang menjadi: ["Apel", "Jeruk", "Mangga"]
console.log(barangTerakhir); // Output: "Anggur" (elemen yang kita keluarkan)
console.log(keranjang);

// 5. Method 'join' (Menggabungkan jadi Teks)
let strukBelanja = keranjang.join(", "); // Pisahkan dengan ", "
console.log(strukBelanja); // Output: "Apel, Jeruk, Mangga"

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya data nama pengguna yang dimasukkan satu per satu: 
user1 = "budi", user2 = "siti", user3 = "agus". Saya ingin mengubahnya menjadi satu string untuk 
database, di mana setiap nama dipisahkan oleh titik koma (;)."

Pola Pikir (Problem Solving):
1. Tujuan: Mendapat satu string "budi;siti;agus".
2. Masalah: Datanya terpisah di 3 variabel. Sulit dikelola.
3. Langkah 1 (Koleksi): Hal pertama yang harus saya lakukan adalah memasukkan semua data 
ini ke satu "wadah". Perkakas yang tepat? Array.
4. Langkah 2 (Penggabungan): Sekarang saya punya ["budi", "siti", "agus"]. Saya 
perlu mengubah daftar ini menjadi satu string dengan pemisah ;
5. Perkakas yang Tepat: join() adalah perkakas yang dirancang persis untuk ini.

*/

let user1 = "budi";
let user2 = "siti";
let user3 = "agus";

// Langkah 1: Buat Array kosong untuk jadi wadah
let daftarUser = [];

// Masukkan data ke wadah
daftarUser.push(user1);
daftarUser.push(user2);
daftarUser.push(user3);

console.log(daftarUser); // ["budi", "siti", "agus"]

// Langkah 2: Gabungkan dengan pemisah ';'
let dataString = daftarUser.join(";");

console.log(dataString); // "budi;siti;agus"