/* 

Materi 26: Membuat Class Error Sendiri

🤔 Pemahaman Dasar: class Error bawaan JavaScript adalah sebuah Induk (Parent). Kita 
bisa membuat class "Anak" yang mewarisi (extends) semua kemampuannya (name, 
message, stack).

Ini memungkinkan kita membuat jenis error baru yang lebih spesifik untuk aplikasi kita, seperti:
ValidasiError
ApiError
DatabaseError
PinSalahError

🧠 Pola Pikir Logika (Spesialisasi Dokter):
Error (Induk): Ini adalah "Dokter Umum". Dia tahu ada "penyakit" (message), tapi 
tidak spesifik.
ValidasiError (Anak): Ini adalah "Dokter Spesialis Kulit". Dia adalah seorang Dokter 
(extends Error), tapi dia punya nama spesialisasi (this.name = "ValidasiError").

Mengapa ini Penting? Di dalam blok catch, kita sekarang bisa "mengecek DNA" error-nya 
menggunakan instanceof:

*/

try {
    // ... kode ...
} catch (error) {
    if (error instanceof ValidasiError) {
        // Tangani error validasi secara spesifik
        console.log("Mohon cek input Anda: " + error.message);
    } else if (error instanceof ApiError) {
        // Tangani error API
        console.log("Server sedang sibuk, coba lagi nanti.");
    } else {
        // Error umum lainnya
        console.error("Terjadi error tak dikenal:", error);
    }
}


class ValidasiError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidasiError";
    }
}

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
        if (typeof dataSemester !== "number") {
            throw new ValidasiError("Nilai harus angka!");
        }
        if (dataSemester < 1) {
            throw new ValidasiError("Nilai tidak boleh negatif!");
        }
        this._semester = dataSemester;
    }
}

let mhsRidho = new Mahasiswa("Ridho", "UHO", 3);

try {
    mhsRidho.semester = "lima";
} catch(error) {
    console.error(error);
    console.log(error.name);
    console.log(error.message);

    if (error instanceof ValidasiError) {
        console.log("==> Ini adalah Error Validasi!");
    }
}