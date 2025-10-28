/* 

🎯 PROYEK LATIHAN BAB 22: PENJUMLAH ANGKA AJAIB (FAKTORIAL)

Kita akan membuat salah satu contoh recursive paling terkenal: Faktorial. Faktorial dari 5 (ditulis 
5!) adalah 5 * 4 * 3 * 2 * 1.
    faktorial(5) adalah 5 * faktorial(4)
    faktorial(4) adalah 4 * faktorial(3)
    ...dan seterusnya, sampai faktorial(1) yang hasilnya 1 (ini base case kita).

Tugas:

1. Buat sebuah function bernama faktorial yang menerima satu parameter angka.
2. Di dalam fungsi, buat Base Case: Jika angka sama dengan 1, fungsi harus me-return nilai 1.
3. Di luar base case (di-else), fungsi harus me-return nilai dari: angka * faktorial(angka - 1).
4. Di luar fungsi, panggil faktorial(5) dan simpan hasilnya di variabel hasilFaktorial.
5. Tampilkan hasilFaktorial ke console. (Seharusnya hasilnya 120).

*/

function faktorial(angka) {
    if (angka === 1) {
        return 1;
    } else {
        return angka * faktorial(angka - 1);
    }
}

const hasilFaktorial = faktorial(5);
console.log(hasilFaktorial);
