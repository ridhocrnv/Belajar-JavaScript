/* 

🚀 Latihan Project Sederhana (Implementasi):

Masalah: Di Materi 17, class Mahasiswa kita masih pakai _semester. Itu tidak aman.

Tugas: Lakukan refactor (perbaikan) pada class Mahasiswa Anda untuk menggunakan 
private field yang sesungguhnya.

Syarat:
1. Hapus public class field status (jika ada, untuk menyederhanakan).
2. Ganti backing property _semester menjadi private field #semester.
3. Di constructor, ubah this.semester = semester (yang memanggil setter) menjadi inisialisasi 
private field: this.#semester = semester; (Catatan: Untuk private field, kita set langsung dulu, 
lalu kita buatkan set publiknya).
4. Perbarui get semester() agar return this.#semester;.
5. Perbarui set semester(value) agar memvalidasi value dan (jika lolos) 
mengatur this.#semester = value;.

Tes:
1. Buat let mhsRidho = new Mahasiswa("Ridho", "UHO", 3);
2. Coba mhsRidho.semester = 5; (Harus berhasil via Setter).
3. console.log(mhsRidho.semester); (Harus 5, via Getter).
4. Coba mhsRidho.semester = -1; (Harus ditolak oleh Setter).
5. Coba akses langsung: console.log(mhsRidho.#semester); (Harus ERROR! Ini 
bukti keamanannya). Anda mungkin perlu membungkus ini dalam try...catch agar 
program tidak berhenti.

Kembangkan Sendiri (Problem Solving):
Tantangan: Di class Mahasiswa, tambahkan private field baru: #pinKRS = "123456";
Tugas: Buat satu public method bernama gantiPin(pinLama, pinBaru).
Logika: Method ini harus mengecek: if (pinLama === this.#pinKRS), maka 
this.#pinKRS = pinBaru; dan console.log("PIN berhasil diubah!"). Jika tidak, 
console.error("PIN lama salah!").

Tes: Buktikan Anda tidak bisa mengakses mhsRidho.#pinKRS dari luar, tapi Anda bisa 
mengubahnya pakai mhsRidho.gantiPin("123456", "654321");.

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
    }

    gantiPin(pinLama, pinBaru) {
        try {
            if (pinLama === this.#pinKRS) {
                this.#pinKRS = pinBaru;
                console.log("PIN berhasil diubah!");
            } else {
                console.error("PIN lama salah!")
            }
        } catch (error) {
            console.error(error);
        }
    }
}

let mhsRidho = new Mahasiswa("Ridho Ahmad Irawan", "Universitas Halu Oleo", 3);

mhsRidho.semester = 3;
console.log(mhsRidho.semester);

mhsRidho.gantiPin("123456", "654321");