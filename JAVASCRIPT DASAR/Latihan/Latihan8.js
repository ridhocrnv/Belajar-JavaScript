/* 

Kamu menemukan sebuah mesin penjual minuman ajaib. Mesin ini menerima input berupa nama 
minuman dan akan mengeluarkan deskripsi tentang minuman tersebut.

Tugas:

1. Gunakan `prompt()` untuk bertanya kepada pengguna: "Selamat datang! Mau pesan apa? 
(Health Potion, Mana Potion, Stamina Potion)". Simpan jawabannya di sebuah 
variabel.
2. Gunakan struktur switch untuk memeriksa variabel jawaban tersebut.
3. Buat 3 case:
    case "Health Potion": Tampilkan alert("Ramuan ini akan memulihkan 50 HP-mu!").
    case "Mana Potion": Tampilkan alert("Ramuan ini akan memulihkan 100 Mana-mu!").
    case "Stamina Potion": Tampilkan alert("Ramuan ini akan membuatmu bisa berlari tanpa lelah!").
4. Jangan lupa tambahkan break setelah setiap case.
5. Buat sebuah default yang akan menampilkan alert("Maaf, minuman itu tidak 
tersedia di sini.") jika pengguna mengetik nama yang lain.

✨ Tantangan Pengembangan: Bagaimana jika pengguna mengetik "health potion" (semua 
huruf kecil)? Tentu case "Health Potion" tidak akan cocok. Bisakah kamu mencari cara agar 
input pengguna (apapun cara penulisannya) diubah menjadi format yang sama (misalnya, semua 
huruf kecil) sebelum masuk ke switch? (Petunjuk: cari mantra .toLowerCase() untuk string).

*/

let minuman = prompt("Selamat Datang! Mau pesan apa? (Health Potion, Mana Potion, Stamina Potion)");

switch (minuman.trim().toLowerCase()) {
    case "health potion":
        alert("Ramuan ini akan memulihkan 50 HP-mu");
        break;
    case "mana potion":
        alert("Ramuan ini akan memulihkan 100 Mana-mu");
        break;
    case "stamina potion":
        alert("Ramuan ini akan membuatmu bisa berlari tanpa lelah!");
        break;
    default:
        alert("Maaf, minuman itu tidak tersedia di sini.");
}