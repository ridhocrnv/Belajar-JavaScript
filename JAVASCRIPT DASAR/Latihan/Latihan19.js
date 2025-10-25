/* 

🎯 PROYEK LATIHAN BAB 19: PEMBUAT TIM PETUALANG

Kamu perlu membuat sebuah fungsi untuk membentuk tim petualang. Sebuah tim harus memiliki 
seorang kapten, dan bisa memiliki beberapa anggota (atau tidak ada sama sekali).

Tugas:

1. Buat sebuah function bernama buatTim.
2. Fungsi ini harus menerima dua parameter:
    namaKapten (parameter wajib).
    ...daftarAnggota (rest parameter untuk menampung semua nama anggota)
3. Di dalam fungsi:
    Tampilkan nama kapten ke console.
    Gunakan if untuk memeriksa apakah array daftarAnggota memiliki isi (gunakan 
    daftarAnggota.length > 0).
    Jika ada anggotanya, gunakan for...of loop untuk menampilkan setiap nama anggota.
    Jika tidak ada anggotanya, tampilkan pesan bahwa kapten ini berpetualang sendirian.
4. Panggil fungsi buatTim beberapa kali dengan jumlah anggota yang berbeda-beda.
    Panggilan pertama: hanya dengan nama kapten.
    Panggilan kedua: dengan kapten dan satu anggota.
    Panggilan ketiga: dengan kapten dan tiga anggota.

*/

function buatTim(namaKapten, ...daftarAnggota) {
    console.log(`Halo, ${namaKapten}!`);

    if (daftarAnggota.length > 0) {
        for (const anggota of daftarAnggota) {
            console.log(`Daftar anggota tim: ${anggota}`);
        }
    } else {
        console.log(`Kapten ${namaKapten} berpetualang sendirian.`);
    }

    console.log(`---`);
}

// buatTim(`Alex`);
buatTim("Alex", "Jojo", "Kimmy", "Darmian");
buatTim("Alex", "Jojo", "Kimmy", "Darmian");
buatTim("Alex", "Jojo", "Kimmy", "Darmian");
