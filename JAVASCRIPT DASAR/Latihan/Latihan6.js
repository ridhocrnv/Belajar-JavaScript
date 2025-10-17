/* 

Kamu menemukan sebuah gerbang kuno yang terkunci oleh kata sandi. Kamu harus membuat 
program yang meminta kata sandi kepada pengguna dan hanya akan membuka gerbang jika kata 
sandinya benar.

Tugas:
1. Buat sebuah variabel kataSandiRahasia dan isi dengan sebuah kata sandi pilihanmu 
(contoh: "NagaEmas123").
2. Gunakan `prompt()` untuk bertanya kepada pengguna: "Masukkan kata sandi untuk 
membuka gerbang:". Simpan jawaban pengguna ke dalam sebuah variabel baru, misalnya 
inputPengguna.
3. Gunakan if-else untuk membandingkan inputPengguna dengan kataSandiRahasia.
4. Jika kata sandinya benar, gunakan alert() untuk menampilkan pesan: "Selamat! 
Gerbang telah terbuka untukmu!"
5. Jika kata sandinya salah, gunakan alert() untuk menampilkan pesan: "Kata sandi 
salah! Gerbang tetap terkunci.".


✨ Tantangan Pengembangan: Sebelum menanyakan kata sandi, gunakan confirm() untuk 
bertanya: "Gerbang ini dijaga oleh sihir kuno. Apakah kamu berani melanjutkan?". Jika 
pengguna menekan "Cancel", tampilkan alert("Kamu memilih untuk mundur. Pilihan yang 
bijak.") dan program tidak perlu menanyakan kata sandi lagi. (Petunjuk: kamu akan butuh if 
di dalam if, atau if untuk menangani kasus "Cancel" terlebih dahulu).

*/
let namaPengguna = prompt("Masukkan nama pengguna");
let Konfirmasi = confirm(`Gerbang ini dijaga oleh sihir kuno. Apakah kamu berani melanjutkan ${namaPengguna}?`);

if (!Konfirmasi) {
    alert(`Kamu memilih untuk mundur. Pilihan yang bijak.`);
} else {
    let kataSandi = "NagaEmas123";
    let inputPengguna = prompt("Masukkan kata sandi untuk membuka gerbang:");

    if (inputPengguna == kataSandi) {
        alert(`Selamat, ${namaPengguna}! Gerbang telah terbuka untukmu!`);
    } else {
        alert("Kata sandi salah! Gerbang tetap terkunci.");
    }
}