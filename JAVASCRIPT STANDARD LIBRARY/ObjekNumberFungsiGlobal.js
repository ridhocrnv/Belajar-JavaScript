/*

Modul 3: Objek Number & Fungsi Global (Konversi & Cek Angka)

1. Pemahaman Dasar (The "Why")

Masalah Terbesar: Data yang Anda dapatkan dari pengguna (misal, dari form di web) atau dari 
sistem lain hampir selalu berbentuk String (Teks), bahkan jika isinya adalah angka.

Anda tidak bisa langsung menghitung "100" + "50". JavaScript akan menganggapnya sebagai 
teks dan menggabungkannya menjadi "10050". Ini bencana!

    Logika Inti: Kita butuh perkakas yang bisa "membaca" sebuah string dan mengekstrak nilai 
    numerik (angka) dari dalamnya.

    Problem Solving: Setelah kita mencoba mengubahnya, kita juga butuh perkakas untuk 
    mengecek: "Apakah hasil konversi ini benar-benar sebuah angka yang valid, atau gagal?"

2. Penjelasan Inti (The "What")

Inilah tiga perkakas global utama kita untuk bekerja dengan angka:

    1. parseInt(teks) (Analis Angka Bulat)
    2. parseFloat(teks) (Analis Angka Pecahan)
    3. isNaN(nilai) (Detektor Kegagalan)

*/

/* 

3. Contoh Kode & Logika
Mari kita lihat para analis ini bekerja:

*/

let data1 = "100px"; // Teks dari CSS
let data2 = "20.5em"; // Teks lain dari CSS
let data3 = "Harga: 300"; // Teks dari input user
let data4 = "Gagal";

// 1. Logika parseInt (Hanya mau angka bulat, berhenti di 'p')
let angkaBulat = parseInt(data1);
console.log(angkaBulat); // Output: 100

// parseInt 'membuang' desimal
let angkaBulatLagi = parseInt(data2);
console.log(angkaBulatLagi); // Output: 20 (data 0.5 hilang!)

// 2. Logika parseFloat (Mau angka pecahan, berhenti di 'e')
let angkaPecahan = parseFloat(data2);
console.log(angkaPecahan); // Output: 20.5 (datanya utuh!)

// 3. Logika "Gagal"
// parseInt membaca "Harga: 300". 
// Karakter pertama ('H') BUKAN angka. Ia langsung berhenti.
let gagal = parseInt(data3);
console.log(gagal); // Output: NaN (Not a Number)

// parseFloat juga gagal
let gagalLagi = parseFloat(data4);
console.log(gagalLagi); // Output: NaN


/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya data dari form belanja. Input jumlah barang ada di variabel jumlahInput 
= "5 buah" dan input harga satuan ada di hargaInput = "Rp10.000". Saya harus menghitung 
total belanja."

Pola Pikir (Problem Solving):
1. Tujuan: totalBelanja = (angka dari jumlahInput) * (angka dari hargaInput).
2. Identifikasi Masalah: Saya tidak bisa mengalikan "5 buah" dengan "Rp10.000"
3. Perkakas untuk jumlahInput: Saya perlu angka 5. Ini angka bulat. Saya pakai parseInt.
4. Perkakas untuk hargaInput: Saya perlu angka 10000. parseInt("Rp10.000") akan 
gagal (NaN) karena dimulai dengan "R".
5. Revisi Rencana (Pembersihan + Konversi): a. Saya harus bersihkan string-nya dulu. 
(Meskipun kita belum belajar replace, anggap kita bisa bersihkan jadi "10000"). b. Untuk 
jumlahInput = "5 buah", parseInt("5 buah") akan bekerja. Ia membaca 5, lalu 
berhenti di spasi. Hasilnya 5. Sempurna. c. Untuk hargaInput yang sudah dibersihkan 
(misal jadi "10000"), parseInt("10000") akan memberi hasil 10000.
6. Validasi: Bagaimana jika user mengetik jumlahInput = "satu"? a. parseInt("satu") 
akan menghasilkan NaN. b. totalBelanja = NaN * 10000 akan menghasilkan NaN. c. 
Logika Pengaman: Saya harus mengecek dengan isNaN!

*/

let jumlahInput = "5 buah";
let hargaInput = "10000"; // Anggap sudah dibersihkan

// Konversi data input ke angka
let jumlah = parseInt(jumlahInput); // Hasil: 5
let harga = parseInt(hargaInput); // Hasil: 10000

// Cek Dulu Sebelum Menghitung!
if (isNaN(jumlah) || isNaN(harga)) {
    console.log("Error: Input tidak valid! Pastikan semua diisi angka.");
} else {
    // Hanya jika keduanya angka valid, kita hitung
    let totalBelanja = jumlah * harga;
    console.log(`Total belanja Anda: Rp${totalBelanja}`); // Rp50000
}