/* 

🎯 PROYEK LATIHAN BAB 23: PEMBERI ANGKA GANJIL

Kamu perlu membuat sebuah generator yang akan memberikanmu angka ganjil satu per satu, 
tanpa henti, setiap kali kamu memintanya.

Tugas:

1. Buat sebuah generator function bernama buatAngkaGanjil.
2. Di dalamnya, buat sebuah variabel angka yang dimulai dari 1.
3. Buat sebuah infinite loop (perulangan tak terbatas) menggunakan while (true).
    Peringatan: Ini aman dilakukan HANYA di dalam generator karena yield akan menjedanya.
4. Di dalam while loop:
    - yield nilai angka.
    - Tambahkan angka sebanyak 2 (misal: angka = angka + 2 atau angka += 2) untuk 
        mendapatkan angka ganjil berikutnya.
5. Di luar fungsi:
    Buat sebuah iterator dengan memanggil const generatorGanjil = buatAngkaGanjil();.
    Panggil generatorGanjil.next() beberapa kali di console.log() dan lihat apa yang 
    terjadi. Tampilkan .value-nya saja.

Contoh Hasil Akhir di Console:
1
3
5
7
... (dan seterusnya, setiap kali kamu panggil .next())

*/

function* buatAngkaGanjil() {
    let angka = 1;

    while (true) {
        yield angka;
        angka += 2;
    }
}

const generatorGanjil = buatAngkaGanjil();

console.log(generatorGanjil.next().value);
console.log(generatorGanjil.next().value);
console.log(generatorGanjil.next().value);
console.log(generatorGanjil.next().value);
