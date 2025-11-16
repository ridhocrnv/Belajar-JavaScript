/* 

Modul 22: Grup Penangkapan (Capturing Groups)

Sejauh ini, kita mencocokkan seluruh pola. Tapi, bagaimana jika kita hanya 
ingin sebagian dari pola itu?

Misalnya, kita punya User: 'admin'. Kita mungkin bisa mencocokkan seluruh 
string itu, tapi yang sebenarnya kita inginkan hanyalah admin.

Inilah gunanya Capturing Groups.
    Apa itu? Cara untuk "mengelompokkan" bagian dari pola Anda.
    Bagaimana caranya? Cukup dengan membungkus bagian pola yang Anda 
    inginkan dengan tanda kurung biasa ().

1. Capturing Groups dengan .match()

Saat Anda menggunakan () dalam pola, Array hasil dari .match() akan berubah.
    Indeks [0] masih berisi seluruh kecocokan.
    Indeks [1] akan berisi teks yang cocok dengan grup pertama ().
    Indeks [2] akan berisi teks yang cocok dengan grup kedua (), dan seterusnya.

Contoh: Mari kita coba ambil nama pengguna dari log.

let log = "INFO: User 'guest' logged in.";

// Pola kita mencari "User: '[nama]'"
// Kita tambahkan () di sekitar bagian yang ingin kita 'tangkap' (yaitu [a-z]+)
let polaUser = /User '([a-z]+)'/;

let hasil = log.match(polaUser);

console.log(hasil);

Outputnya:
[
  "User 'guest'",   // Indeks 0: Seluruh kecocokan
  "guest",          // Indeks 1: Kecocokan grup pertama (\w+)
  index: 6,
  input: "INFO: User 'guest' logged in.",
  groups: undefined
]

2. Capturing Groups dengan .replace()

Grup penangkapan menjadi super-kuat saat dipakai dengan .replace(). Anda bisa merujuk 
kembali teks yang ditangkap di dalam string pengganti.

    $1 merujuk pada teks yang ditangkap oleh grup pertama ().
    $2 merujuk pada teks yang ditangkap oleh grup kedua ().
    $0 (atau $&) merujuk pada seluruh teks yang cocok.

Contoh: Katakanlah kita ingin memformat ulang nama, dari "NamaDepan NamaBelakang" 
menjadi "NamaBelakang, NamaDepan".

let nama = "Budi Doremi";

// Pola: (kata pertama) spasi (kata kedua)
// Grup 1: (\w+) -> Budi
// Grup 2: (\w+) -> Doremi
let polaFormatNama = /(\w+) (\w+)/;

// Kita ganti dengan: [teks grup 2], [teks grup 1]
let namaBaru = nama.replace(polaFormatNama, "$2, $1");

console.log(namaBaru);
// Output: Doremi, Budi

Contoh Lain (Menambah Teks): Mari kita ubah Rp15000 menjadi Rp 15.000.

let harga = "Harga: Rp15000";

// Grup 1: (Rp)
// Grup 2: (\d+)
let polaHarga = /(Rp)(\d+)/;

// Kita ganti dengan: $1 (grup 1) spasi $2 (grup 2)
// (Contoh ini belum menambahkan titik, tapi sudah memisahkan spasi)
let hargaBaru = harga.replace(polaHarga, "$1 $2");

console.log(hargaBaru);
// Output: Harga: Rp 15000

*/

let harga = "Harga: Rp15000";

// Grup 1: (Rp)
// Grup 2: (\d+)
let polaHarga = /(Rp)(\d+)/;

// Kita ganti dengan: $1 (grup 1) spasi $2 (grup 2)
// (Contoh ini belum menambahkan titik, tapi sudah memisahkan spasi)
let hargaBaru = harga.replace(polaHarga, "$1 $2");

console.log(hargaBaru);
// Output: Harga: Rp 1500

let nama = "Budi Doremi";

// Pola: (kata pertama) spasi (kata kedua)
// Grup 1: (\w+) -> Budi
// Grup 2: (\w+) -> Doremi
let polaFormatNama = /(\w+) (\w+)/;

// Kita ganti dengan: [teks grup 2], [teks grup 1]
let namaBaru = nama.replace(polaFormatNama, "$2, $1");

console.log(namaBaru);
// Output: Doremi, Budi