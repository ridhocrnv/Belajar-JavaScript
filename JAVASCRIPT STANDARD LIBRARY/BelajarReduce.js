/* 

Modul 11: Agregasi Array: reduce (Logika "Menggabungkan")

1. Pemahaman Dasar (The "Why")

Mari kita tinjau:
    map -> Mengambil 5 item, menghasilkan 5 item baru.
    filter -> Mengambil 5 item, menghasilkan 3 item (atau jumlah yang lebih sedikit).
    Masalah: Bagaimana jika saya punya 5 item, dan saya ingin menghasilkan satu nilai tunggal?
        Contoh: Menjumlahkan [10, 20, 30] menjadi 60.
        Contoh: Mencari total harga di keranjang belanja.
        Contoh: Menggabungkan ["A", "B", "C"] menjadi "ABC".

Di Modul 8, kita memecahkan ini dengan forEach dan variabel "wadah" eksternal. Itu cara "kuno".

    Logika Inti: reduce (mereduksi) berarti "mengurangi" atau "meringkas" sebuah koleksi (
    array) menjadi satu nilai akhir.

    Analogi Bola Salju: Pikirkan reduce seperti bola salju (accumulator). Ia dimulai dari 
    sebuah "benih" (initialValue), lalu "bergulir" melewati array. Di setiap elemen 
    (currentValue), ia mengambil elemen itu dan menggabungkannya ke dalam dirinya, 
    menjadi bola salju yang lebih besar.

2. Penjelasan Inti (The "What")

reduce adalah method yang menjalankan callback function ("penggabung") pada setiap 
elemen, di mana hasil dari satu iterasi menjadi input untuk iterasi berikutnya.

Sintaks reduce punya DUA bagian: array.reduce( callbackFunction, nilaiAwal )

1. callbackFunction(accumulator, currentValue)
Ini adalah instruksi "penggabungan" Anda. Ia menerima DUA argumen utama:
    accumulator (sering disingkat acc):
        Ini adalah "Bola Saljunya".
        Ini adalah nilai yang di-return dari iterasi sebelumnya.
    currentValue (sering disingkat curr):
        Ini adalah elemen array yang sedang "digulir" (dikunjungi).

2. nilaiAwal (Sangat Penting!)
Ini adalah "benih" bola saljunya. Ini adalah nilai pertama yang akan digunakan sebagai 
accumulator pada iterasi pertama.
Jika Anda menjumlahkan angka, nilaiAwal-nya adalah 0.
Jika Anda menggabungkan string, nilaiAwal-nya adalah "".

*/

// 3. Contoh Kode & Logika
// Mari kita taklukkan masalah klasik: menjumlahkan array.

let angka = [10, 20, 30];
let nilaiAwal = 0;

let total = angka.reduce(function (accumulator, currentValue) {

    // Ini adalah "logika penggabungan"
    // "Bola salju (acc) + salju baru (curr)"
    return accumulator + currentValue;

}, nilaiAwal); // <-- Jangan lupa nilaiAwal!

console.log(total); // Output: 60

/* 

Mari kita Telusuri (Trace) Logikanya:
1. nilaiAwal diatur: accumulator dimulai sebagai 0.
2. Iterasi 1:
    accumulator = 0 (dari nilaiAwal)
    currentValue = 10 (elemen pertama)
    return 0 + 10 -> return 10
3. Iterasi 2:
    accumulator = 10 (dari return sebelumnya)
    currentValue = 20 (elemen kedua)
    return 10 + 20 -> return 30
3. Iterasi 3:
    accumulator = 30 (dari return sebelumnya)
    currentValue = 30 (elemen ketiga)
    return 30 + 30 -> return 60
4. Array habis. reduce mengembalikan nilai accumulator terakhir.
5. total menjadi 60.

*/

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya array keranjang belanja (objek). Saya ingin menghitung total harga semua 
barang."

Data Mentah:
let keranjang = [
    { nama: "Buku", harga: 50000 },
    { nama: "Pen", harga: 10000 },
    { nama: "Tas", harga: 150000 }
];

Tujuan: Satu nilai tunggal: 210000.
Pola Pikir (Problem Solving):
1. Tujuan: Satu nilai (Agregasi) dari sebuah array.
2. Perkakas yang Tepat: .reduce()
3. nilaiAwal: Saya menjumlahkan harga (angka). nilaiAwal saya harus 0.
4. Logika "Penggabung" (Callback):
    accumulator (acc) akan menjadi total harga sejauh ini (dimulai dari 0).
    currentValue (item) akan menjadi objek { nama, harga }.
    Saya tidak mau menjumlahkan objek. Saya mau menjumlahkan item.harga.
    Logikanya: return acc + item.harga

*/

let keranjang = [
    { nama: "Buku", harga: 50000 },
    { nama: "Pen", harga: 10000 },
    { nama: "Tas", harga: 150000 }
];


let totalHarga = keranjang.reduce(function (acc, item) {
    return acc + item.harga;
}, 0);

console.log(totalHarga);