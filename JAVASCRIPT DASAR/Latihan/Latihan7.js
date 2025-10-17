/* 

Kamu memiliki sebuah peti harta karun (Array) yang berisi beberapa item. Namun, beberapa slot 
di peti itu mungkin kosong. Tugasmu adalah membuat program yang bisa memeriksa isi sebuah 
slot di peti.

Tugas:

1. Buat sebuah variabel bernama pemenangMisi dan sengaja isi dengan null untuk 
menandakan belum ada pemenangnya.
2. Buat sebuah Array bernama petiHartaKarun yang berisi beberapa item, misalnya: 
["Berlian", "Peta Kuno", "Surat Misterius"].
3. Gunakan prompt() untuk bertanya kepada pengguna: "Masukkan nomor slot peti yang 
ingin kamu periksa (0, 1, atau 2):". Simpan jawabannya di variabel.
4. Gunakan jawaban pengguna untuk mengakses item di dalam petiHartaKarun. Simpan 
hasilnya di variabel itemDitemukan.
5. Gunakan if untuk memeriksa apakah itemDitemukan itu undefined.
    jika undefined (artinya pengguna memasukkan nomor slot yang tidak ada), tampilkan 
    alert("Slot itu tidak ada! Kamu tidak menemukan apa-apa.")

    Jika tidak undefined, tampilkan alert(Selamat! Kamu menemukan: 
    ${itemDitemukan}`).

✨ Tantangan Pengembangan: Setelah menampilkan item yang ditemukan (jika ada), ubah nilai 
variabel pemenangMisi dari null menjadi nama pengguna yang sudah kamu minta di latihan 
sebelumnya. Lalu, tampilkan pesan di console.log() yang mengumumkan pemenangnya 
menggunakan variabel pemenangMisi.

*/

let pemenangMisi = null;
let petiHartaKarun = ["Berlian", "Peta Kuno", "Surat Misterius"];

let namaPengguna = prompt("Masukkan nama pengguna anda: ");

let nomorSlot = prompt("Masukkan nomor slot peti yang ingin kamu periksa (0, 1, atau 2)");

let itemDitemukan = petiHartaKarun[nomorSlot];

if (itemDitemukan == undefined) {
    alert("Slot itu tidak ada! Kamu tidak menemukan apa-apa");
} else {
    alert(`Selamat! Kamu menemukan: ${itemDitemukan}`);

    pemenangMisi = {
        nama: namaPengguna,
    }

    console.log(`Pemenang Lomba Harta Karun adalah: ${pemenangMisi.nama}`);
}