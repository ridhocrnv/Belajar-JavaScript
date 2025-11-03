/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Di class Mahasiswa, method gantiPin Anda sudah bagus. Tapi, mungkin kita 
ingin memvalidasi bahwa PIN baru itu kuat (misal: harus 6 digit angka).

Tugas: Buat private method baru di class Mahasiswa.
1. Buat private method bernama #isValidPin(pin).
2. Isi logikanya: return (typeof pin === 'string' && pin.length === 6 && 
!isNaN(pin)) (Artinya: harus string, panjang 6, dan bukan "Bukan Angka").

Refactor gantiPin:
1. Di dalam gantiPin(pinLama, pinBaru), setelah mengecek pinLama benar...
2. Tambahkan cek baru: if (this.#isValidPin(pinBaru))...
3. Jika valid, ubah PIN. Jika tidak, console.error("Error: PIN baru tidak valid! 
Harus 6 digit angka.").

Tes:
1. Buat mhsRidho.
2. Coba mhsRidho.gantiPin("123456", "abcde"); (Harus gagal dengan error 
"PIN baru tidak valid!").
3. Coba mhsRidho.gantiPin("123456", "987654"); (Harus berhasil).

💡 Kembangkan Sendiri (Problem Solving):
Tantangan: Buat satu private method lagi di class Mahasiswa bernama 
#catatLog(aksi). Method ini hanya melakukan console.log([LOG RAHASIA] - 
${this.nama} - ${aksi});

Tugas: Panggil this.#catatLog() ini dari dalam method lain.
    Di dalam set semester(value), panggil this.#catatLog("Mengubah semester menjadi " + value);
    Di dalam gantiPin(...) (jika berhasil), panggil this.#catatLog("Mengubah PIN.");

Tes: Panggil mhsRidho.semester = 5;. Anda harus melihat pesan log rahasia itu muncul.

*/

class Mahasiswa {
    status = "Aktif";
    #semester;
    #pinKRS = "123456";

    constructor(nama, kampus, semester) {
        this.nama = nama;
        this.kampus = kampus;
        this.semester = semester;
    }

    get semester() {
        return this.#semester;
    }

    set semester(value) {
        if (typeof value !== "number") {
            console.log(`Nilai harus angka`);
            return;
        }
        if (value < 1) {
            console.log(`Nilai tidak boleh negatif`);
            return;
        }

        this.#semester = value;
        this.#cekLog(`Mengubah semester menjadi ${value}`);
    }

    gantiPin(pinLama, pinBaru) {
        if (pinLama !== this.#pinKRS) {
            console.error(`PIN lama salah!`);
            return
        }

        if (!this.#isValidPin(pinBaru)) {
        console.error("Error: PIN baru tidak valid! Harus 6 digit angka.");
        return; // Gagal, hentikan method
        }

        this.#pinKRS = pinBaru;
        console.log("PIN berhasil diubah!");

        this.#cekLog("Mengubah PIN.");
    }

    #isValidPin(pin) {
        if ((typeof pin === 'string' && pin.length === 6 && !isNaN(pin))) {
            return (`harus string, panjang 6, dan bukan "Bukan Angka"`);
        }
    }

    #cekLog(aksi) {
        console.log(`[LOG RAHASIA] - ${this.nama} - ${aksi}`);
    }
}

let mhsRidho = new Mahasiswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);
mhsRidho.gantiPin("123456", "987654");
mhsRidho.semester = 5;
