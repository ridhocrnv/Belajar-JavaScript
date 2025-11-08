/* 

Latihan Modul 2: "The Data Cleaner"

Tantangan: Anda menerima data "kotor" dari sistem lama. Data ini digabung dalam satu string 
dengan format yang aneh.

let dataKotor = "ID:jkt-005|NAMA:Siti Aminah|STATUS:Aktif"

Tugas Anda: Tuliskan skrip untuk mengekstrak informasi berikut dari dataKotor dan 
menampilkannya di konsol:
1. Cek Status: Cek apakah user includes() status "Aktif". Tampilkan true atau false.
2. Ambil Nama: Ambil nama "Siti Aminah" saja. (Pikirkan cara split() yang efisien).
3. Ambil ID Kota: Ambil "JKT" (hanya 3 huruf kode kota dari ID).
    Petunjuk: Anda harus split() dulu untuk dapat jkt-005, lalu slice() untuk dapat 
    jkt, lalu toUpperCase() untuk dapat JKT.

Keluaran yang Diharapkan:
Status Aktif: true
Nama: Siti Aminah
Kode Kota: JKT

*/

let dataKotor = "ID:jkt-005|NAMA:Siti Aminah|STATUS:Aktif";

// 1. Cek Status (Sudah Sempurna)
let cekStatus = dataKotor.includes("Aktif");
console.log(`Status Aktif: ${cekStatus}`);

// 2. Split Utama (Sudah Sempurna)
let dataBersih = dataKotor.split("|");
// dataBersih = ["ID:jkt-005", "NAMA:Siti Aminah", "STATUS:Aktif"]

// --- Logika Baru Untuk Nama ---
// Ambil bagian nama: "NAMA:Siti Aminah"
let bagianNama = dataBersih[1]; // "NAMA:Siti Aminah"
// Pecah berdasarkan pemisah ":"
let dataNama = bagianNama.split(":"); // ["NAMA", "Siti Aminah"]
// Ambil elemen kedua (index 1)
let nama = dataNama[1];
console.log(`Nama: ${nama}`); // Output: Nama: Siti Aminah

// --- Logika Baru Untuk Kode Kota ---
// Ambil bagian ID: "ID:jkt-005"
let bagianID = dataBersih[0]; // "ID:jkt-005"
// Pecah berdasarkan ":"
let dataID = bagianID.split(":"); // ["ID", "jkt-005"]
// Ambil bagian kedua: "jkt-005"
let idLengkap = dataID[1]; // "jkt-005"
// Pecah lagi berdasarkan "-" untuk memisahkan kota dan nomor
let idTerpecah = idLengkap.split("-"); // ["jkt", "005"]
// Ambil bagian pertama (index 0) dan ubah ke huruf besar
let kodeKota = idTerpecah[0].toUpperCase(); // "JKT"
console.log(`Kode Kota: ${kodeKota}`);