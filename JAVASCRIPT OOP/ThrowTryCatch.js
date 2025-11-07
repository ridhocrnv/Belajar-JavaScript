/* 

Materi 25: Error Handling (throw, try, catch, finally)

🤔 Pemahaman Dasar:
throw (Lempar): Ini adalah perintah untuk "menembakkan suar darurat". Saat JavaScript 
melihat throw, ia langsung berhenti menjalankan kode di fungsi itu, dan "melempar" objek 
Error ke atas, mencari siapa yang akan menangkapnya. Jika tidak ada yang menangkap, 
program akan CRASH.

try (Coba): Ini adalah "Zona Berbahaya". Kita memberi tahu JavaScript, "Saya akan 
menjalankan kode di dalam blok {...} ini. Hati-hati, kode ini mungkin akan throw error."

catch (Tangkap): Ini adalah "Jaring Pengaman" atau "Tim Penanganan Darurat". Blok ini 
hanya berjalan jika blok try melempar error. Objek Error yang dilempar akan 
"ditangkap" sebagai parameter (misal, catch (error)).

finally (Pasti Dijalankan): Ini adalah "Tim Pembersih". Blok ini selalu berjalan, tidak 
peduli try berhasil atau catch harus menangkap error. Berguna untuk membersihkan 
(misal: "tutup koneksi database").

🧠 Pola Pikir Logika (Pabrik & Zona Keamanan):
1. Setter (Pekerja): set semester(value) adalah Pekerja di pabrik. Saat dia menerima 
bahan baku (value) yang buruk (misal -2), dia tidak lagi return (lapor pasif). Dia 
sekarang throw (teriak "BAHAYA!" dan menekan tombol stop darurat).
2. throw: Tombol stop itu menghentikan seluruh lini produksi (set semester berhenti).
3. try (Zona Keamanan): Kode pemanggil (mhsRidho.semester = -2;) kita letakkan di 
dalam zona try. Kita tahu panggilan ini berisiko memicu alarm.
4. catch (Manajer Keamanan): Manajer ini (catch) sedang menunggu di luar Zona 
Keamanan. Saat alarm berbunyi (error di-throw), dia langsung masuk, "menangkap" si 
Error, dan menanganinya (misal, console.error("Data semester salah!")), sehingga 
pabrik tidak perlu tutup total.
5. Program di luar Zona Keamanan (console.log("Program tetap jalan")) bisa terus 
berlanjut karena Manajer Keamanan sudah menanganinya.

*/

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
    mhsRidho.semester = -2;
    console.log("Semester berhasil diubah.");
} catch(error) {
    console.error("--- TERJADI MASALAH! ---");
    console.error("Nama Error: " + error.name);
    console.error("Pesan Error: " + error.message);
} finally {
    console.log("--- Blok Finally ---");
    console.log("Pengecekan data selesai, entah berhasil atau gagal.");
}

console.log("Program tetap berjalan sampai akhir.");