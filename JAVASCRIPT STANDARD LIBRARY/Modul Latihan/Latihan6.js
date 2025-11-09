/* 

5. Latihan Modul 6: "Si Penebak Hari"

Tantangan: Buatlah sebuah skrip yang bisa menampilkan nama hari (Senin, Selasa, dll.) dari 
tanggal saat ini.

Batasan:
    new Date() tidak memberi Anda nama hari (dia memberi index 0-6 via getDay()).
    Anda harus membuat "penerjemah" Anda sendiri.

Tugas Anda:
1. Buat sebuah Array (daftar) yang berisi nama-nama hari, sebagai "kamus" Anda.
    let daftarHari = ["Minggu", "Senin", "Selasa", ... , "Sabtu"];
2. Buat objek Date untuk "sekarang".
3. Gunakan getDay() untuk mendapatkan index hari saat ini (angka 0-6).
4. Gunakan index tersebut untuk mengambil nama hari yang benar dari daftarHari Anda.
5. Tampilkan hasilnya.

Keluaran yang Diharapkan: (Jika hari ini adalah Minggu)
Hari ini adalah: Minggu

(Jika hari ini adalah Rabu)
Hari ini adalah: Rabu

*/

let sekarang = new Date().getDay();
let daftarHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

console.log(`Hari ini adalah: ${daftarHari[sekarang]}`);