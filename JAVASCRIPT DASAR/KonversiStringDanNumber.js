/* 

🤔 Pemahaman Dasar: Kadang, kita mendapatkan angka dalam bentuk teks (String), 
misalnya "50". Kita tidak bisa melakukan matematika padanya ("50" + 10 hasilnya akan 
"5010"). Kita perlu mengubah teks itu menjadi angka sungguhan (Number) terlebih dahulu.

🧠 Pola Pikir Logika: Ini sangat penting saat menerima 
input dari pengguna. Hampir semua input dari luar dianggap sebagai String. Sebelum diolah (dihitung, dibandingkan), kita harus 
pastikan tipenya sudah benar. Ini adalah langkah validasi data.

*/

let stringAngka = "100";
let angka = 10;

let hasilSalah = stringAngka + angka;
console.log(`Hasilnya adalah: ${hasilSalah}`);

let stringJadiAngka = parseInt(stringAngka);

let hasilBenar = stringJadiAngka + angka;
console.log(`Hasilnya adalah: ${hasilBenar}`);

/* 

💡 Penjelasan Kode:
parseInt(): Mantra untuk mengubah sebuah String menjadi Number (bilangan bulat).

*/