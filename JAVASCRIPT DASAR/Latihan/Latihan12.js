/* 

Kamu adalah seorang pandai besi yang memiliki mesin tempa otomatis. Kamu ingin membuat 5 
buah "Pedang Latihan". Tugasmu adalah memprogram mesin tersebut menggunakan for loop.

Tugas:

1. Buatlah sebuah for loop yang akan berputar sebanyak 5 kali.
2. Di setiap putaran, tampilkan pesan ke console yang menyatakan pedang keberapa yang 
sedang dibuat.
3. Setelah loop selesai, tampilkan pesan di console: "Pekerjaan selesai! 5 Pedang Latihan 
sudah siap."

Contoh Hasil Akhir di Console:

Mesin mulai menempa Pedang Latihan ke-1...
Mesin mulai menempa Pedang Latihan ke-2...
Mesin mulai menempa Pedang Latihan ke-3...
Mesin mulai menempa Pedang Latihan ke-4...
Mesin mulai menempa Pedang Latihan ke-5...
Pekerjaan selesai! 5 Pedang Latihan sudah siap.

✨ Tantangan Pengembangan: Buat sebuah array kosong bernama gudangSenjata. Di dalam 
loop, setiap kali "membuat" pedang, tambahkan string "Pedang Latihan" ke dalam array 
gudangSenjata menggunakan .push(). Setelah loop selesai, tampilkan isi dari 
gudangSenjata di console untuk membuktikan bahwa gudangmu sekarang berisi 5 pedang.

*/

let mesinOtomatis = "Pedang Latihan";
let gudangSenjata = [];

for (let i = 1; i <= 5; i++) {
    console.log(`Mesin mulai menempa ${mesinOtomatis} ke-${i}...`);
    gudangSenjata.push(mesinOtomatis)
}
console.log(`Pekerjaan selesai! 5 Pedang Latihan sudah siap.`);

console.log(gudangSenjata);