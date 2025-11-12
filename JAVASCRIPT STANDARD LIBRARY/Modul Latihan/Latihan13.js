/* 

Latihan Modul 13: "Sistem Kontrol Akses (Whitelist)"

Tantangan: Kebalikan dari blacklist, kita akan membuat whitelist (daftar yang diizinkan). Hanya 
nama yang ada di daftar hakAkses yang boleh masuk.

Data yang Diberikan: let hakAkses = ["Budi", "Aan", "Manajer"];

Tugas Anda:
1. Buat variabel userLogin yang berisi nama (misal: "Siti").
2. Gunakan .includes() untuk mengecek apakah userLogin ada di dalam array hakAkses.
3. Gunakan struktur if...else untuk menampilkan pesan:
    Jika false (tidak ada akses): "Akses Ditolak."
    Jika true (ada akses): "Selamat Datang, [Nama User]!"
4. Coba ganti userLogin menjadi "Budi" dan lihat apakah pesannya berubah.

Keluaran yang Diharapkan (jika userLogin = "Siti"):
Akses Ditolak.

Keluaran yang Diharapkan (jika userLogin = "Budi"):
Selamat Datang, Budi!

*/

let hakAkses = ["Budi", "Aan", "Manajer"];
let userLogin = "Budi";
// let userLogin = "Siti";

let cekLogin = (hakAkses.includes(userLogin)) ? `Selamat Datang ${userLogin}!` : `Akses Ditolak.`;
console.log(cekLogin);