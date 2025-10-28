/* 

Materi 45: Arrow Function

🤔 Pemahaman Dasar: Arrow Function (Fungsi Panah) menggantikan kata function 
dengan tanda panah =>. Ini membuat kode lebih singkat dan (bagi banyak orang) lebih 
mudah dibaca

🧠 Pola Pikir Logika: Gunakan arrow function hampir di setiap tempat kamu akan 
menggunakan anonymous function (seperti yang kita simpan di variabel di Bab 20). Ini 
adalah standar modern.

*/

// Cara LAMA (Anonymous Function biasa)
const sapaLama = function (nama) {
    console.log(`Halo, ${nama}`);
};

// Cara BARU (Arrow Function)
// 1. Ganti 'function' dengan '=>' setelah parameter
const sapaBaru = (nama) => {
    console.log(`Halo, ${nama}`);
};

// 2. Jika parameter HANYA ADA SATU, tanda kurung () boleh hilang
const sapaLebihSingkat = (nama) => {
    console.log(`Halo, ${nama}`);
};

// 3. Jika isi fungsi HANYA SATU BARIS 'return',
// tanda kurung {} dan kata 'return' boleh hilang!
// Ini disebut 'implicit return'.
const sapaPalingSingkat = (nama) => `Halo, ${nama}`;

// Semua fungsi di atas melakukan hal yang sama!
console.log(sapaPalingSingkat(`Alex`)); // Hasilnya: Halo, Alex