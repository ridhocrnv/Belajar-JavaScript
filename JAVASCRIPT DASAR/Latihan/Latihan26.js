/* 

🎯 PROYEK LATIHAN BAB 26: ROBOT PRIBADIMU

Kamu akan membuat sebuah object yang merepresentasikan robot pribadimu. Robot ini tidak 
hanya punya data, tapi juga bisa melakukan sesuatu!

Tugas:

1. Buat sebuah object bernama robot.
2. Tambahkan tiga properti data: nama (String), levelBaterai (Number, isi 100), dan aktif 
    (Boolean, isi false).
3. Tambahkan dua method (fungsi) ke dalam robot:
    nyalakan(): Method ini harus:
        1. Mengubah this.aktif menjadi true.
        2.Menampilkan pesan ke console: Halo! ${this.nama} sekarang aktif!
    gunakanBaterai(jumlah): Method ini harus menerima 1 parameter jumlah.
        1. Mengurangi this.levelBaterai sebanyak jumlah.
        2. Menampilkan pesan: ${this.nama} menggunakan ${jumlah}% baterai. Sisa: 
            ${this.levelBaterai}%.
4. Di luar object:
    Panggil robot.nyalakan().
    Panggil robot.gunakanBaterai(15).

*/

const robot = {
    nama: "Probe",
    levelBaterai: 100,
    aktif: false,

    nyalakan: function() {
        this.aktif = true;
        console.log(`Halo! ${this.nama} sekarang aktif!`);
    },

    gunakanBaterai(jumlah) {
        this.levelBaterai -= jumlah;
        console.log(`${this.nama} menggunakan ${jumlah}% baterai. Sisa: ${this.levelBaterai}%.`);
    }
}

robot.nyalakan();
robot.gunakanBaterai(15);