/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Anda akan membuat class Kucing (versi class, bukan function). Kucing 
punya beberapa nilai default.

Tugas: Buat class Kucing.

Syarat:
    1. Gunakan Public Class Field untuk properti default:
        energi = 100
        jumlahKaki = 4
    2. Gunakan constructor hanya untuk menerima nama.
    3. Buat method main() yang mengurangi this.energi sebanyak 10.

Tes:
1. Buat let kucingGarong = new Kucing("Garong");
2. console.log(kucingGarong.nama); (Harus "Garong")
3. console.log(kucingGarong.jumlahKaki); (Harus 4)
4. console.log(kucingGarong.energi); (Harus 100)
5. Panggil kucingGarong.main();
6. console.log(kucingGarong.energi); (Harus 90)


💡 Kembangkan Sendiri (Problem Solving):

Tantangan: Kita sudah punya class Mahasiswa. Tambahkan satu public class field padanya.
Tugas: Tambahkan class field status = "Aktif"; ke class Mahasiswa Anda.
Tes: Buat mhsRidho dan console.log(mhsRidho.status); (Harus "Aktif").

*/

class Mahasiswa {
    status = "Aktif";

    constructor(nama, kampus, semester) {
        this.nama = nama;
        this.kampus = kampus;
        this.semester = semester;
    }
}

let mhsRidho = new Mahasiswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);
console.log(mhsRidho.status);

class Kucing {
    energi = 100;
    jumlahKaki = 4;

    constructor(nama) {
        this.nama = nama;
    }

    main(jumlah) {
        this.energi -= jumlah;
        console.log(`Energi sekarang: ${this.energi}`);
    }
}

let kucingGarong = new Kucing("Garong");

console.log(kucingGarong.nama);
console.log(kucingGarong.jumlahKaki);
console.log(kucingGarong.energi);
kucingGarong.main(10);
console.log(kucingGarong.energi);