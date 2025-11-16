/* 

📝 Latihan: Uji Coba Regex
Silakan coba selesaikan tiga tugas ini. Tulis kode yang menurut Anda benar.

Tugas 1: Validasi (.test())
Tujuan: Cepat periksa apakah ada error (kesalahan) dalam log.

    Buatlah pola Regex untuk mencari kata "ERROR".
    Gunakan .test() pada dataLog untuk memeriksa apakah pola itu ada.
    Cetak hasilnya (true atau false).

Tugas 2: Ekstraksi (.match())
Tujuan: Dapatkan daftar semua alamat email yang disebutkan di log.

    Buatlah pola Regex untuk mencari alamat email. (Pola sederhana seperti 
    /\b[a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,}\b/ sudah cukup).

    Penting: Kita ingin mengambil semua email, dan kita tidak peduli huruf besar/kecil. (Anda 
    perlu dua flags).

    Gunakan .match() pada dataLog untuk mengambil semua email.
    Cetak hasilnya (seharusnya sebuah Array).

Tugas 3: Pembersihan (.replace())
Tujuan: Sembunyikan (redaksi) semua alamat email untuk alasan privasi.

    Gunakan pola Regex yang sama dari Tugas 2 (yang mencari semua email, case-insensitive).

    Gunakan .replace() pada dataLog untuk mengganti setiap email yang ditemukan 
    dengan string [REDACTED].

    Cetak string baru yang sudah bersih.

*/

let dataLog = "ERROR: User 'admin' failed login. INFO: User 'guest' logged in. ERROR: Email 'test@example.com' not found. INFO: Email 'USER@DOMAIN.COM' verified.";

let RegexError = /ERROR/;
let RegexEmail = /\b[a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,}\b/gi;
let TimpaEmail = dataLog.replace(/\b[a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,}\b/gi, "[REDACTED]");

console.log(RegexError.test(dataLog));
console.log(dataLog.match(RegexEmail));
console.log(TimpaEmail);