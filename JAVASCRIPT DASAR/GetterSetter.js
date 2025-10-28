/* 

Materi 50: Getter dan Setter

🤔 Pemahaman Dasar:Getter dan Setter adalah method spesial yang terlihat seperti properti.

get (Getter): Digunakan untuk mengambil data. Ia terlihat seperti properti, tapi 
sebenarnya menjalankan function untuk (misalnya) menggabungkan atau mengkalkulasi 
nilai.

set (Setter): Digunakah untuk mengatur data. Ia terlihat seperti kamu sedang 
mengubah properti, tapi sebenarnya menjalankan function yang bisa berisi validasi atau 
logika lain

🧠 Pola Pikir Logika:

    Gunakan get saat kamu ingin punya "properti" yang nilainya adalah hasil kalkulasi dari 
    properti lain (contoh: namaLengkap yang merupakan gabungan namaDepan dan 
    namaBelakang

    Gunakan set saat kamu ingin melakukan sesuatu (seperti validasi) setiap kali sebuah 
    properti diubah (contoh: "level tidak boleh diisi angka negatif").

*/

const pemain = {
    namaDepan: "Alex",
    namaBelakang: "Cobra",
    _level: 1,

    get namaLengkap() {
        console.log(`Getter namaLengkap dipanggil!`);
        return (`${this.namaDepan} ${this.namaBelakang}`);
    },

    set level(levelBaru) {
        console.log(`Setter level dipanggil!`);
        if (levelBaru <= pemain._level) {
            console.log("Level baru harus lebih tinggi dari level sekarang!");
        } else {
            console.log(`Selamat! ${this.namaDepan} naik ke level ${levelBaru}!`);
            this._level = levelBaru;
        }
    }
}

console.log(`Nama pemain: ${pemain.namaLengkap}`);

pemain.level = 5;
pemain.level = 3;

console.log(`Level sekarang: ${pemain._level}`)