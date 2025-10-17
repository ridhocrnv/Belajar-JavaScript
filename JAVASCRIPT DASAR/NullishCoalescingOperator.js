/* 

🤔 Pemahaman Dasar: Bayangkan kamu bertanya, "Siapa namamu?". Jika orang itu tidak 
punya nama (null atau undefined), kamu akan memanggilnya "Petualang Tanpa Nama". 
Operator `??` bekerja persis seperti itu. Ia menyediakan nilai cadangan HANYA jika nilai di 
sebelah kirinya adalah null atau undefined

🧠 Pola Pikir Logika: Terkadang kita butuh nilai default untuk sebuah variabel. `??` adalah 
cara paling aman untuk melakukannya karena ia tidak akan tertipu oleh nilai 0, false, atau 
string kosong (""), tidak seperti operator lain.

*/

let namaPanggilan = null;

// Menggunakan ?? untuk memberikan nilai default
let namaUntukDisapa = namaPanggilan ?? "Bro";
console.log(`Halo, ${namaUntukDisapa}!.`); // Hasilnya: Halo, Bro!.

let jumlahEmas = null;

let jumlahEmasDitampilkan = jumlahEmas ?? "Belum memiliki emas.";
console.log(`Jumlah emasmu: ${jumlahEmasDitampilkan}`);