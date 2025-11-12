/* 

Latihan Modul 17: "Kamus Harga Buah"

Tantangan: Anda sedang membuat sistem kasir. Anda perlu Map untuk menyimpan harga buah
dengan cepat.

Data yang Diberikan:
    "Apel" harganya 5000
    "Pisang" harganya 3000
    "Mangga" harganya 7000

Tugas Anda:
1. Buat Map baru bernama hargaBuah.
2. Gunakan .set() untuk menambahkan 3 buah dan harganya di atas (Key: String, Value: Number).
3. Buat variabel buahDicari berisi "Pisang".
4. Gunakan .get() untuk mengambil harga dari buahDicari dan tampilkan di konsol.
5. Gunakan .has() untuk mengecek apakah "Durian" ada di dalam hargaBuah dan 
tampilkan hasilnya (true/false).

Keluaran yang Diharapkan:
Harga Pisang: 3000
Apakah ada Durian: false

*/

let hargaBuah = new Map();

hargaBuah.set("Apel", 5000);
hargaBuah.set("Pisang", 3000);
hargaBuah.set("Mangga", 7000);

let buahDicari = "Pisang";

// FIX: Gunakan KEY ("Pisang") untuk mendapatkan VALUE (3000)
let hargaPisang = hargaBuah.get(buahDicari); 
console.log(`Harga Pisang: ${hargaPisang}`); // Output: Harga Pisang: 3000

let cekDurian = hargaBuah.has("Durian");
console.log(`Apakah ada Durian: ${cekDurian}`); // Output: Apakah ada Durian: false