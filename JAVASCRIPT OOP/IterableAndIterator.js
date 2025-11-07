/* 

Materi 27: Iterable dan Iterator

🤔 Pemahaman Dasar: Ini adalah dua konsep yang bekerja sama.

1. Iterable (Benda yang bisa di-looping):
    Ini adalah "Koleksi"-nya. Pikirkan ini seperti Album CD atau Playlist Spotify.
    Ia adalah sebuah objek yang berjanji, "Saya berisi banyak data, dan saya tahu cara 
    memberi Anda alat untuk memutarnya satu per satu."

2. Iterator (Alat pemutarnya):
    Ini adalah "Laser pemutar CD" atau "Tombol next" di Spotify.
    Ini adalah objek yang melakukan pekerjaan "berjalan". Dia tahu:
        Data apa yang sedang diputar (value).
        Cara pindah ke data berikutnya (next()).
        Kapan datanya habis (done: true).

Bagaimana for...of Bekerja (Di Balik Layar): 
Saat Anda menjalankan for (let item of iterable):
1. JS bertanya ke "Album CD" (Iterable): "Tolong beri saya 'Laser' (Iterator) Anda."
    const iterator = iterable[Symbol.iterator]();
2. JS menekan tombol "next" untuk pertama kali.
    let result = iterator.next();
3. JS mengecek: "Apakah lagunya sudah habis?" (result.done === true)
4. Jika belum habis (!result.done):
    item = result.value; (Ambil datanya)
    Jalankan kode di dalam loop.
    Kembali ke langkah 2 (tekan "next" lagi).

🧠 Pola Pikir Logika (Membuat Class Kita Iterable): Agar class kita 
(misal: class RuangKelas) bisa di-for...of, kita harus mengikuti protokol tersebut.

Protokolnya (Kontrak):
1. Class kita harus punya method dengan nama spesial: [Symbol.iterator]().
2. Method ini harus mengembalikan sebuah objek Iterator.
3. Objek Iterator itu harus punya method bernama next().
4. Method next() itu harus mengembalikan objek { value: ..., done: ... }.

*/

class RuangKelas {
    constructor() {
        this.mahasiswa = [];
    }

    tambahMhs(nama) {
        this.mahasiswa.push(nama);
    }

    [Symbol.iterator]() {
        let index = 0;
        let daftarMhs = this.mahasiswa;

        return {
            next: function() {
                if (index < daftarMhs.length) {
                    return {
                        value: daftarMhs[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

let IlmuKomputer = new RuangKelas();

IlmuKomputer.tambahMhs("Ridho");
IlmuKomputer.tambahMhs("Budi");
IlmuKomputer.tambahMhs("Ririn");

console.log("Daftar Mahasiswa di Ilmu Komputer:");

for (let namaMhs of IlmuKomputer) {
    console.log("- " + namaMhs);
}