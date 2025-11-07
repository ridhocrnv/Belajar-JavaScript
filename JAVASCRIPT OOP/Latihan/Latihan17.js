class LevelError extends Error {
    constructor(message) {
        super(message);
        this.name = "LevelError";
    }
}

class PinError extends Error {
    constructor(message) {
        super(message);
        this.name = "PinError";
    }
}

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
            throw new TypeError(`Nilai harus angka`);
            return;
        }
        if (value < 1) {
            throw new TypeError(`Nilai tidak boleh negatif`);
            return;
        }

        this.#semester = value;
    }

    gantiPin(pinLama, pinBaru) {
        if (pinLama === this.#pinKRS) {
            this.#pinKRS = pinBaru;
            console.log("PIN berhasil diubah!");
        } else {
            throw new PinError("PIN lama salah!")
        }
    }
}

let mhsRidho = new Mahasiswa("Ridho", "UHO", 3);

try {
    mhsRidho.gantiPin("000", "010505");
} catch(error) {
    console.error(error);
    console.log(error.name);
    console.log(error.message);
}


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
            throw new LevelError("Level tidak dikenali!");
        }

        // Jika lolos validasi, BARU ubah datanya
        KonfigurasiGame.kesulitan = levelBaru;
    }
}

try {
    KonfigurasiGame.setKesulitan("SUPER SUPER SULIT");
} catch (error) {
    console.error(error);
    console.log(error.name);
    console.log(error.message);
}