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
            throw new TypeError("Nilai harus angka");
        }

        if (dataSemester < 1) {
            throw new RangeError("Semester tidak boleh kurang dari 1!");
        }

        console.log("Data diterima!");
        this._semester = dataSemester;
    }
}

let mhsRidho = new Mahasiswa("Ridho", "UHO", 3);

console.log("Program dimulai...");

try {
    console.log("Mencoba mengubah semester...");
    mhsRidho.semester = "lima";
    console.log("Semester berhasil diubah.");
} catch (error) {
    console.error("--- TERJADI MASALAH! ---");
    console.error("Nama Error: " + error.name);
    console.error("Pesan Error: " + error.message);
} finally {
    console.log("--- Blok Finally ---");
    console.log("Pengecekan data selesai, entah berhasil atau gagal.");
}

console.log("Program tetap berjalan sampai akhir.");

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
            throw new Error("Level tidak dikenali!");
        }

        // Jika lolos validasi, BARU ubah datanya
        KonfigurasiGame.kesulitan = levelBaru;
    }
}

try {
    console.log("Mencoba mengubah level kesulitan...");
    KonfigurasiGame.setKesulitan("SUPER SULIT");
    console.log("Level kesulitan berhasil diubah.");
} catch (error) {
    console.error("--- TERJADI MASALAH! ---");
    console.error("Nama Error: " + error.name);
    console.error("Pesan Error: " + error.message);
} finally {
    console.log("--- Blok Finally ---");
    console.log("Pengecekan data selesai, entah berhasil atau gagal.");
}