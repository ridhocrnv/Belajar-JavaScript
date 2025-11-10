/* 

Modul 9: Transformasi Array: map (Logika "Mengubah" Setiap Elemen)

1. Pemahaman Dasar (The "Why")

Di Modul 8, kita punya nilaiUjian = [85, 42, 90] dan kita mencetak statusnya satu per satu. 
Tapi kita tidak menyimpan hasil status itu.

Bagaimana jika kita butuh Array baru yang berisi statusnya? statusUjian = ["Lulus", 
"Gagal", "Lulus"]

2. Penjelasan Inti (The "What")

map adalah method array yang membuat array baru dengan menjalankan callback function 
pada setiap elemen di array asli.

Dua Aturan Emas map:
1. map selalu mengembalikan array baru.
2. Array baru tersebut selalu memiliki panjang (length) yang sama dengan array aslinya.

Sintaks (Perhatikan return!):

let arrayBaru = arrayAsli.map(function(item) {
  // 'item' adalah elemen saat ini

  // Apapun yang di-'return' di sini
  // akan menjadi elemen di arrayBaru
  return item * 2; 
});

function(item): Ini adalah Callback Function (instruksi pabrik).

return ...: Ini adalah bagian paling krusial. Nilai yang Anda return adalah produk jadi 
yang akan dimasukkan ke dalam array baru. Jika Anda lupa return, array baru Anda akan 
berisi [undefined, undefined, undefined].

*/

// 3. Contoh Kode & Logika
// Mari kita ubah array angka menjadi array string:
let angka = [1, 2, 3, 4];

// Kita ingin array baru: [ "Item 1", "Item 2", "Item 3", "Item 4" ]
let newArray = angka.map(function (item) {
    return `Item ${item}`;
})

console.log(angka);
console.log(newArray);

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya data dari database, tapi formatnya jelek. Saya perlu menampilkannya 
dengan rapi."

let dataUser = [
    { id: 1, nama: "budi", email: "BUDI@MAIL.COM" },
    { id: 2, nama: "siti", email: "SITI@MAIL.COM" }
];

Tujuan: Saya ingin array baru berisi data yang sudah "dibersihkan" untuk ditampilkan di web, di 
mana namanya huruf besar pertama dan emailnya huruf kecil.

Pola Pikir (Problem Solving):
1. Tujuan: Array baru [{...}, {...}] dengan data yang diformat.
2. Identifikasi: Array asli punya 2 elemen. Array baru saya juga pasti punya 2 elemen. 
Panjangnya sama. Ini adalah Transformasi.
3. Perkakas yang Tepat: map.
4. Logika "Pabrik" (Callback): a. Fungsi saya akan menerima satu user (objek) di setiap 
iterasi. b. Saya harus return sebuah objek baru ({}) c. Di dalam objek baru itu, saya 
akan format datanya: * namaBaru = user.nama.slice(0, 1).toUpperCase() + 
user.nama.slice(1) (Ambil huruf pertama -> besarkan, gabung dengan sisa nama) * 
emailBaru = user.email.toLowerCase() d. Kembalikan objek barunya.

*/

let dataUser = [
    { id: 1, nama: "budi", email: "BUDI@MAIL.COM" },
    { id: 2, nama: "siti", email: "SITI@MAIL.COM" }
];

let dataBersih = dataUser.map(function (user) {
    // Transformasi Nama
    let namaBersih = user.nama.charAt(0).toUpperCase() + user.nama.slice(1);
    // Transformasi Email
    let emailBersih = user.email.toLowerCase();

    // Return objek baru yang sudah ditransformasi
    return {
        nama: namaBersih,
        email: emailBersih
    };
});

console.log(dataBersih);