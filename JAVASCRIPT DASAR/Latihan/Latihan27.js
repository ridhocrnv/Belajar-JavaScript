/* 

🎯 PROYEK LATIHAN BAB 27: PROFIL PEMAIN YANG LEBIH CANGGIH

Kamu akan membuat object pemain yang memiliki getter untuk status lengkap dan setter untuk 
validasi skor.

Tugas:

1. Buat sebuah object bernama pemain.
2. Tambahkan dua properti data: nama (String) dan _skor (Number, isi dengan 0. Kita 
    gunakan _ untuk data internal).
3. Buat sebuah Getter bernama status.
    get status() harus me-return sebuah string yang berisi: "Nama: [nama], Skor: 
    [_skor]". (Gunakan this.nama dan this._skor).
4. Buat sebuah Setter bernama skorBaru.
    set skorBaru(skor) harus menerima satu parameter skor.

    Di dalamnya, tambahkan validasi: Jika skor yang baru lebih kecil dari 0, tampilkan 
    pesan "Skor tidak boleh negatif!".

    Jika tidak (jika valid), ubah nilai this._skor menjadi skor yang baru dan tampilkan 
    pesan "Skor berhasil diperbarui.".
5. Di luar object:
    Coba atur skornya: pemain.skorBaru = 150; (ini akan berhasil).
    Coba atur skornya lagi: pemain.skorBaru = -10; (ini akan gagal karena validasi).
    Tampilkan status terakhir: console.log(pemain.status); (gunakan getter-nya).

*/

const pemain = {
    nama: "Alex",
    _skor: 0,

    get status() {
        return (`Nama: ${this.nama}, Skor: ${this._skor}`);
    },

    set skorBaru(skor) {
        if (skor < 0) {
            console.log("Skor tidak boleh negatif!");
        } else {
            this._skor = skor;
            console.log("Skor berhasil diperbarui.");
        }
    }
}

pemain.skorBaru = 150;
pemain.skorBaru = -10;
console.log(pemain.status);