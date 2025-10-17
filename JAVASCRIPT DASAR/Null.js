/* 

🤔 Pemahaman Dasar: `null` berbeda. Bayangkan kamu punya kotak ajaib, dan kamu 
sengaja mengisinya dengan "kertas kosong". null adalah nilai yang kita, sebagai 
programmer, berikan secara engaja untuk mengatakan, "Saya sudah periksa, dan di sini 
memang tidak ada data apa-apa."

🧠 Pola Pikir Logika: `null` sangat berguna untuk menandai kekosongan yang disengaja. 
Contohnya, kamu membuat program untuk mencari data musuh. Jika musuh ditemukan, 
kamu simpan data musuh (Object) ke dalam variabel. Jika tidak ditemukan, kamu isi variabel 
itu dengan null. Ini cara yang jelas untuk memberitahu bagian lain dari programmu bahwa 
"pencarian sudah selesai, dan hasilnya nihil."

*/

let dataPemainTerpilih = null; // Awalnya, tidak ada pemain yang dipilih

// Anggaplah ada proses pemilihan... lalu pemain "Alex" terpilih
dataPemainTerpilih = {
    nama: "Alex",
    level: 99,
};

console.log(dataPemainTerpilih); // Menampilkan object data Alex

// Jika pemain keluar, kita bisa set lagi ke null
dataPemainTerpilih = null;
console.log(`Pemain keluar, data dikosongkan: `, dataPemainTerpilih);

/* 

Perbedaan Kunci:
`undefined`: Kecelakaan (lupa mengisi variabel).
`null`: Disengaja (sengaja diisi dengan nilai "kosong").

*/