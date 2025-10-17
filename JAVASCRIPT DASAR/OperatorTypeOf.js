/* 

🤔 Pemahaman Dasar: Bayangkan kamu punya kaca pembesar ajaib. Saat kamu arahkan 
ke sebuah benda, kaca itu akan memberitahumu jenis benda itu. Itulah typeof! Dia akan 
memberitahumu tipe data dari sebuah variabel ("number", "string", "boolean", 
"object", "undefined").

🧠 Pola Pikir Logika: Ini adalah alat debugging nomor satu. Saat programmu error, hal 
pertama yang harus diperiksa adalah: "Apakah tipe data variabel ini sudah benar?". typeof 
membantumu memastikan kamu tidak mencoba menjumlahkan string dengan number 
secara tidak sengaja.

*/

let skor = 100;
let nama = "alex";
let online = true;
let skill = { ultimate: "Menghilang" };

console.log(typeof skor);
console.log(typeof nama);
console.log(typeof online);
console.log(typeof skill);