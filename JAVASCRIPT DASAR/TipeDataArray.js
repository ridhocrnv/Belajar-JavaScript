/* 

🤔 Pemahaman Dasar: Array adalah sebuah ransel petualang! Ini adalah sebuah variabel 
spesial yang bisa menampung banyak benda secara berurutan. Setiap kantong di dalam 
ransel diberi nomor, yang disebut index, dan penomoran selalu dimulai dari 0.

🧠 Pola Pikir Logika: Daripada membuat banyak variabel seperti item1 = "Pedang", 
item2 = "Perisai", item3 = "Obat", kita bisa satukan semuanya dalam satu ransel 
bernama inventaris. Ini membuat pengelolaan data yang banyak menjadi jauh lebih

*/

// Membuat sebuah Array (ransel)
let inventaris = ["Pedang", "Perisai", "Obat", "Panah"];

console.log(`Isi seluruh ranselku: ${inventaris}.`);

// Mengambil benda dari kantong nomor 1 (kedua)
console.log(`Isi ranselku pada index [1] : ${inventaris[1]}`);

// Mengganti isi kantong nomor 2 (ketiga)
inventaris[2] = "Obat Kuat";
console.log(`Isi ranselku setelah diubah: ${inventaris}.`);