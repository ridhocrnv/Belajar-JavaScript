/* 

🤔 Pemahaman Dasar: Bayangkan kamu disuruh oleh seorang kapten untuk menembakkan 
meriam sebanyak 10 kali. Kamu akan melakukan tiga hal:
1. Inisialisasi: Kamu mulai menghitung dari tembakan ke-1.
2. Kondisi: Kamu akan terus menembak selama hitunganmu belum mencapai 10.
3. Iterasi: Setiap kali selesai menembak, kamu menaikkan hitunganmu (1 menjadi 2, 2 
menjadi 3, dst.).

For Loop memiliki persis tiga bagian ini, yang ditulis dalam satu baris: for 
(inisialisasi; kondisi; iterasi) { ... }.

🧠 Pola Pikir Logika: Kapan kita butuh perulangan? Setiap kali kamu berpikir, "Aku harus 
melakukan hal ini untuk setiap item di tasku," atau "Ulangi langkah ini sebanyak X kali." 
Menampilkan semua nama dalam daftar, menghitung total dari sekumpulan angka, atau 
membuat 100 musuh muncul di layar, semuanya menggunakan loop.

*/

// Menampilkan hitungan 0 sampai 1.000.000 di console
// Inisialisasi: let hitungan = 0; (kita mulai dari 0)
// Kondisi: hitungan <= 1.000.000; (lanjutkan selama hitungan masih di bawah atau sama dengan 1.000.000)
// Iterasi: hitungan++ (setelah satu putaran, tambah hitungan sebanyak 1)

let ransel = ["Pedang", "Perisai", "Obat", "Panah"];

// ransel.length adalah jumlah item di dalam array (yaitu 4)
// Index array dimulai dari 0, jadi kita loop dari 0 sampai kurang dari 4.
for (let i = 0; i < ransel.length; i++) {
    let kolomRansel = ransel[i];
    console.log(`Isi tas ransel ke-${i} : ${kolomRansel}`);
}


