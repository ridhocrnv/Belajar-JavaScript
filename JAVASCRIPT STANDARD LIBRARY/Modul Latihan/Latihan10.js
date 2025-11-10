/* 

Latihan Modul 10: "Saringan E-mail Valid"

Tantangan: Anda mendapat data dari form input yang jelek. Anda memiliki array berisi string, 
beberapa adalah e-mail, beberapa adalah teks sampah.

Data yang Diberikan: let daftarInput = ["budi@mail.com", "siti@mail.com", "spam", "agus@mail.com", "testing", "admin@web.com"];

Aturan: Untuk latihan ini, kita anggap e-mail "valid" adalah string yang mengandung karakter @.

Tugas Anda: Gunakan .filter() pada daftarInput untuk membuat array baru bernama 
emailValid yang hanya berisi string yang mengandung karakter @.

(Ingat dari Modul 2: perkakas apa yang bisa mengecek apakah string mengandung string lain?)

Keluaran yang Diharapkan:
Email valid: [ "budi@mail.com", "siti@mail.com", "agus@mail.com", "admin@web.com" ]

*/

let daftarInput = ["budi@mail.com", "siti@mail.com", "spam", "agus@mail.com", "testing", "admin@web.com"];

let emailValid = daftarInput.filter(function (email) {
    return email.includes("@");
})

console.log(`Email valid: ${emailValid}`);