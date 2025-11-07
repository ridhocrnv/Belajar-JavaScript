class Mahasiswa {
    constructor(nama, kampus, semester) {
        this.nama = nama;
        this.kampus = kampus;
        this.semester = semester;
    }

    get semester() {
        console.log(`GETTER: Seseorang membaca data semester...`);
        return `${this._semester}`
    }

    set semester(dataSemester) {
        console.log("SETTER: Seseorang mencoba mengubah data semester...");

        if (typeof dataSemester !== "number") {
            return new TypeError("Nilai harus angka");
        }

        if (dataSemester < 1) {
            return new RangeError("Semester tidak boleh kurang dari 1!");
        }

        console.log("Data diterima!");
        this._semester = dataSemester;
    }
}

let mhsRidho = new Mahasiswa("Ridho", "Universitas Halu Oleo", 3);

console.log(mhsRidho.semester = "lima");
console.log(mhsRidho.semester = -2);
mhsRidho.semester = 4;

class KonfigurasiGame {
    static kesulitan = "NORMAL";
    static bahasa = "id-ID";

    static setKesulitan(levelBaru) {
        // Daftar level yang diizinkan
        const levelValid = ["MUDAH", "NORMAL", "SULIT"];

        // --- PERBAIKAN #1 & #2 DI SINI ---
        // Validasi dulu SEBELUM mengubah data
        if (!levelValid.includes(levelBaru)) {
            // Jika 'levelBaru' TIDAK ADA di dalam 'levelValid'
            return new Error("Level tidak dikenali!");
        }

        // Jika lolos validasi, BARU ubah datanya
        KonfigurasiGame.kesulitan = levelBaru;
    }
}

// Tes:
console.log("Kesulitan Awal:", KonfigurasiGame.kesulitan); // "NORMAL"
console.log(KonfigurasiGame.setKesulitan("SUPER SULIT")); // Mengembalikan Error
console.log("Kesulitan Gagal:", KonfigurasiGame.kesulitan); // "NORMAL" (Data aman!)
console.log(KonfigurasiGame.setKesulitan("SULIT")); // undefined (sukses)
console.log("Kesulitan Sukses:", KonfigurasiGame.kesulitan); // "SULIT" (Data berubah!)

console.log(KonfigurasiGame.setKesulitan("SUPER SULIT"));