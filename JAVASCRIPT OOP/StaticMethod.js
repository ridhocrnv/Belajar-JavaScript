/* 

Materi 23: Static Method (Kemampuan Milik Pabrik)

🤔 Pemahaman Dasar: Static Method adalah method yang "menempel" langsung pada Class 
(Pabrik), bukan pada instance (Produk).

Ini adalah "kemampuan" yang dimiliki oleh Mahasiswa (Class), bukan oleh mhsRidho (instance).

🧠 Pola Pikir Logika (Manajer Pabrik vs Pekerja):
    Instance Method (mhsRidho.sapa()): Ini adalah tugas Pekerja (Produk). Pekerja itu 
    (this) menggunakan datanya sendiri (this.nama) untuk melakukan tugas.

    Static Method (Mahasiswa.buatAturanBaru()): Ini adalah tugas Manajer (Pabrik). 
    Manajer tidak peduli dengan nama satu per satu pekerja. Dia melakukan tugas yang 
    berhubungan dengan "Pabrik" secara keseluruhan.

Kapan kita pakai static method? Untuk fungsi utilitas (helper function). Ini adalah 
fungsi-fungsi yang berhubungan dengan class tersebut, tapi tidak bergantung pada 
data this (data spesifik satu instance).

Contoh paling terkenal di JavaScript adalah class Math:
    Kita tidak pernah melakukan let m = new Math(); m.random();.
    Kita langsung memanggil Pabriknya: Math.random(), Math.floor(10.5).
    random() dan floor() adalah Static Method milik class Math.

Aturan Emas:
Static method dipanggil menggunakan Nama Class (Kucing.getInfo()).
Static method TIDAK BISA mengakses this (karena this adalah milik instance, 
sedangkan method ini milik Pabrik).
Static method BISA mengakses static field (karena keduanya sama-sama milik Pabrik).

*/

class Kalkulator {
    static versi = "1.0";

    static tambah(a, b) {
        return a + b;
    }

    static kurang(a, b) {
        return a - b;
    }

    static getInfoVersi() {
        return `Info versi: ${this.versi}`;
    }
}

console.log(Kalkulator.tambah(10, 5));
console.log(Kalkulator.kurang(10, 5));
console.log(Kalkulator.getInfoVersi());

try {
    let calc = new Kalkulator;
    calc.tambah(10, 10);
} catch(error) {
    console.error(error);
}