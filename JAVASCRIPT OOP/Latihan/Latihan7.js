/* 

🚀 Latihan Project Sederhana

Masalah: Kode Mobil (Induk) kita dari Materi 9 masih menggunakan sintaks lama 
(function + prototype). Ini berantakan.

Tugas: Lakukan refactor (tulis ulang) cetakan Mobil Anda menggunakan sintaks class.

Syarat:
1. Buat class Mobil.
2. Pindahkan logika dari function Mobil(merk, warna) ke dalam method 
constructor(merk, warna). (Property this.merk, this.warna, this.kecepatan).
3. Pindahkan Mobil.prototype.klakson dan Mobil.prototype.tambahKecepatan ke 
dalam body class (sebagai method klakson() dan tambahKecepatan()).

Tes:
1. Buat objek: let mobilAvanza = new Mobil("Toyota Avanza", "Perak");
2. Panggil mobilAvanza.klakson();
3. Panggil mobilAvanza.tambahKecepatan(50);
4. Buat mobilPajero = new Mobil("Mitsubishi Pajero", "Hitam");
5. Lakukan tes pembuktian: console.log(mobilAvanza.klakson === 
mobilPajero.klakson); (Harus true).

💡 Kembangkan Sendiri (Problem Solving):
Tantangan: Lakukan refactor juga pada function Siswa Anda dari latihan Materi 6.

Tugas: Ubah menjadi class Siswa.

Syarat:
constructor harus menerima inputNama, inputKampus, inputSemester.
Harus memiliki method sapaLengkap().

Tes: Buat siswaRidho baru menggunakan class Siswa dan panggil 
siswaRidho.sapaLengkap().

*/

class Mobil {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
        this.kecepatan = 0;
    }

    klakson() {
        console.log(`Mobil ${this.merk} sedang Klakson.`);
    }

    tambahKecepatan(jumlah) {
        this.kecepatan += jumlah;
        console.log(`Mobil ${this.merk} melaju dengan kecepatan ${this.kecepatan} km/h.`);
    }
}

let mobilAvanza = new Mobil("Toyota Avanza", "Perak");
let mobilPajero = new Mobil("Mitsubishi Pajero", "Hitam");

mobilAvanza.klakson();
mobilAvanza.tambahKecepatan(50);

console.log(mobilAvanza.klakson === mobilPajero.klakson);


class Mahasiswa {
    constructor(nama, kampus, semester) {
        this.nama = nama;
        this.kampus = kampus;
        this.semester = semester;
    }

    sapaLengkap() {
        console.log(`Halo, nama saya ${this.nama}. Mahasiswa semester ${this.semester}. Sedang berkuliah di Universitas ${this.kampus}.`);
    }
}

let mahasiswaRidho = new Mahasiswa("Ridho Ahmad Irawan", "Halu Oleo", 3);

mahasiswaRidho.sapaLengkap();