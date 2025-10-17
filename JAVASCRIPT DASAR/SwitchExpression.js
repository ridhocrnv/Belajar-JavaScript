/* 

🤔 Pemahaman Dasar: Bayangkan seorang resepsionis di sebuah penginapan dengan 
banyak kunci. Kamu memberikan nomormu (variabel), lalu dia akan langsung menuju laci 
(case) yang sesuai dengan nomormu dan memberikan kuncinya (kode yang dijalankan). 
switch jauh lebih cepat dan rapi daripada bertanya satu-satu: 
"Apakah nomormu 1? Apakah nomormu 2? Apakah nomormu 3?".

🧠 Pola Pikir Logika: Gunakan switch saat kamu punya satu variabel dan ingin 
melakukan hal yang berbeda untuk setiap nilai spesifik dari variabel tersebut. Contoh: 
menentukan hari berdasarkan angka (1=Senin, 2=Selasa), atau memberikan hadiah 
berdasarkan ranking (1=Emas, 2=Perak, 3=Perunggu).

*/

let pilihanSenjata = prompt("Pilih senjatamu: (1=Pedang, 2=Panah, 3=Tongkat Sihir)");

// parseInt untuk mengubah string dari prompt menjadi number
let pilihanAngka = parseInt(pilihanSenjata);

switch (pilihanAngka) {
    case 1:
        alert("Kamu memilih Pedang! Cocok untuk pertarungan jarak dekat.");
        break; // 'break' artinya: berhenti di sini, jangan periksa case lain.
    case 2:
        alert("Kamu memilih Panah! Hebat untuk menyerang dari jauh.");
        break;
    case 3:
        alert("Kamu memilih Tongkat Sihir! Keluarkan mantra terkuatmu!");
        break
    default:
        // 'default' berjalan jika tidak ada 'case' yang cocok.
        alert("Pilihan tidak tersedia! Kamu terpaksa bertarung dengan tangan kosong.");
}

/* 

💡 Penjelasan Kode:
switch (variabel): Memulai blok switch, memeriksa variabel.

case nilai: Loncati ke blok ini jika variabel === nilai.

break: Sangat penting! Tanpa break, program akan "terjatuh" dan menjalankan kode 
di case berikutnya juga.

default: Mirip seperti blok else terakhir, sebagai penampung jika tidak ada yang 
cocok.

*/