/* 

Materi 35: Function Parameter

🤔 Pemahaman Dasar: Bayangkan function buatRamuan() kita. Saat ini, ia hanya bisa 
membuat satu jenis ramuan. Parameter adalah seperti menambahkan label kosong pada 
resepmu: "Bahan Utama: ______". Sekarang, saat kamu ingin membuat ramuan, kamu bisa 
bilang buatRamuan("Daun Herbal") atau buatRamuan("Jamur Biru"). Function-nya tetap 
sama, tapi hasilnya berbeda tergantung "bahan" yang kamu berikan.

🧠 Pola Pikir Logika: Parameter membuat function kita menjadi alat serbaguna, bukan 
hanya alat sekali pakai. Daripada membuat sapaJakarta(), sapaBandung(), 
sapaSurabaya(), kita cukup buat satu function sapaKota(namaKota). Ini adalah inti dari 
membuat kode yang efisien dan tidak berulang (Don't Repeat Yourself / DRY).

*/

function sapa(nama) {
    console.log(`Halo, ${nama}! Senang bertemu denganmu.`);
}

sapa("Alex");
sapa("Link");

function hitungLuas(panjang, lebar) {
    let hasil = panjang * lebar;
    console.log(`Luas persegi panjang dengan sisi ${panjang}x${lebar} adalah ${hasil}`);
}

hitungLuas(10, 5);
hitungLuas(20, 10);

/* 

💡 Penjelasan Kode:
    Parameter: Variabel yang didefinisikan di dalam kurung saat membuat function.
    Argumen: Nilai yang dimasukkan ke dalam parameter saat memanggil function.

*/