/* 

Latihan Modul 19: "Membuat Cetakan Kode Pos"

Tantangan: Anda perlu membuat "cetakan" (pola RegExp) untuk memvalidasi Kode Pos Indonesia.

Aturan: Kode Pos Indonesia (untuk latihan ini) kita anggap sebagai 5 digit angka, tidak kurang 
tidak lebih.
    "12345" -> Lolos
    "123" -> Gagal
    "123456" -> Gagal
    "abcde" -> Gagal

Tugas Anda:
1. Buat variabel polaKodePos.
2. Isi variabel itu dengan pola RegExp literal (/.../) yang mendefinisikan aturan di atas.
3. Gunakan ^ (awal), $ (akhir), dan \d (digit).
4. Anda perlu menentukan "kuantitas" yang tepat. (Petunjuk: Kuantitas untuk jumlah tepat 
ditulis sebagai {n}).

Petunjuk (Clue):
"5 digit angka" bisa ditulis \d\d\d\d\d atau lebih singkatnya \d{5}.

Keluaran yang Diharapkan: (Anda hanya perlu menulis variabel polanya, belum 
menggunakannya) let polaKodePos = /...;

*/

let polaKodePos = /^d\{5}$/;