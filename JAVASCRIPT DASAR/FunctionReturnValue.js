/* 

Materi 36: Function Return Value

🤔 Pemahaman Dasar: Bayangkan kamu punya fungsi hitungLuas(10, 5). Saat ini, fungsi 
itu hanya menampilkan hasilnya di console. Dengan return, fungsi itu tidak lagi "berteriak" 
hasilnya, melainkan memberikan hasil (angka 50) itu kembali kepadamu secara 
diam-diam. Kamu bisa menangkap angka 50 itu dan menyimpannya di variabel luasRumah untuk 
digunakan nanti.

🧠 Pola Pikir Logika: return adalah cara kita membuat fungsi menjadi bagian dari 
perhitungan yang lebih besar. Kamu bisa menggabungkan beberapa fungsi: totalBiaya = 
hitungHargaBarang() + hitungPajak(). Ini tidak mungkin dilakukan jika fungsi hanya 
console.log(). return mengubah fungsi dari sekadar pelaksana perintah menjadi 
penghasil data.

*/

function kali(angka1, angka2) {
    const hasil = angka1 * angka2;
    return hasil;

    console.log(`Hasil ${angka1} x ${angka2} = ${hasil}`);
}

const hasilPerkalian = kali(10, 10);
const hasilPerkalianLain = kali(4, 5);

console.log(`Hasil Perkalian: ${hasilPerkalian}`);
console.log(`Hasil Perkalian Lain: ${hasilPerkalianLain}`);

const total = hasilPerkalian + hasilPerkalianLain;
console.log(`Total dari perkalian : ${total}`);

/* 

💡 Penjelasan Kode:
    return nilai;: Mantra untuk mengakhiri eksekusi fungsi dan mengirimkan nilai kembali.

*/