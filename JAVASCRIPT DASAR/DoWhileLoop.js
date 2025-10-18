/* 

Materi 29: Do While Loop

🤔 Pemahaman Dasar: Do While adalah kembaran While yang sedikit lebih nekat. Dia 
akan melakukan (do) aksinya satu kali dulu, baru setelah itu dia memeriksa kondisi 
while. Jadi, blok kodenya dijamin berjalan minimal satu kali, bahkan jika kondisinya dari 
awal sudah false.

🧠 Pola Pikir Logika: Gunakan do-while saat kamu ingin aksinya terjadi setidaknya sekali. 
Contoh paling umum adalah menampilkan menu kepada pengguna. Kamu tampilkan 
menunya dulu sekali (do), baru periksa while ("apakah pilihan pengguna bukan 
'keluar'?").

*/

let password;

do {
    prompt(`Masukkan Password: `);
} while (password !== "JavaScript");

alert("Selamat! Password Benar");