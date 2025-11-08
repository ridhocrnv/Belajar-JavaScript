/* 

Modul 2: Objek String & Method Utamanya

1. Pemahaman Dasar (The "Why")

String (teks) adalah salah satu tipe data paling fundamental. Anda akan selalu berurusan dengan 
teks: nama pengguna, input formulir, judul artikel, pesan error, dll.
    Logika Inti: Pikirkan String sebagai "seuntai manik-manik" (huruf) yang berurutan. Setiap 
    manik-manik punya nomor posisi, yang kita sebut index (dimulai dari 0).

    Fakta Kunci (Penting!): String di JavaScript itu Immutable (Abadi/Tidak Bisa Diubah). Saat 
    Anda "mengubah" sebuah string, Anda sebenarnya tidak mengubah yang lama. Anda 
    membuat string baru berdasarkan yang lama.

2. Penjelasan Inti (The "What")

Karena kita tidak bisa mengubah string-nya langsung, JavaScript memberi kita method (fungsi 
bawaan) untuk "membuat" string baru dari string lama. Ini 4 perkakas utama kita:
    1. .toUpperCase() / .toLowerCase() (Palu Pengubah Case)
        Logika: Untuk "menormalisasi" teks.

        Fungsi: Membuat string baru yang semua hurufnya menjadi besar (toUpperCase) atau 
        kecil (toLowerCase).

        Kapan dipakai? Saat perbandingan data tidak boleh sensitif huruf (misal, mencari 
        "admin" padahal user mengetik "Admin") atau untuk memformat tampilan.

    2. .includes(searchText) (Detektor)
        Logika: Untuk bertanya "Apakah teks ini mengandung...?"

        Fungsi: Mengecek apakah searchText ada di dalam string utama. 
        Mengembalikan true atau false.

        Kapan dipakai? Validasi input, pengecekan, atau fitur pencarian sederhana.

    3. .slice(startIndex, endIndex) (Pisau Bedah)
        Logika: Untuk "mengiris" atau "mengambil" sebagian teks.

        Fungsi: Mengambil teks mulai dari startIndex sampai sebelum 
        endIndex. Jika endIndex dikosongkan, ia akan mengambil sampai akhir.

        Kapan dipakai? Saat Anda tahu persis posisi (index) teks yang ingin Anda ambil.

    4. .split(separator) (Mesin Pemecah)
        Logika: Untuk "memecah" satu string menjadi banyak bagian.

        Fungsi: Memecah string berdasarkan separator (karakter pemisah) dan 
        mengembalikan hasilnya sebagai Array (daftar) baru.

        Kapan dipakai? Saat Anda punya data yang terstruktur dengan pemisah (seperti koma, 
        titik dua, atau spasi) dan Anda ingin memprosesnya satu per satu.

*/

// Contoh Kode & Logika

let dataFile = "Laporan-Bulanan-2025.pdf";

// 1. Logika 'includes': Apakah ini file PDF?
let apakahPDF = dataFile.includes(".pdf");
console.log("Apakah ini PDF?", apakahPDF); // Output: true

// 2. Logika 'toUpperCase': Kita ingin simpan nama file
//    sebagai ID unik, jadi kita ubah jadi huruf besar.
let fileID = dataFile.toUpperCase();
console.log("File ID:", fileID); // Output: LAPORAN-BULANAN-2025.PDF

// 3. Logika 'slice': Kita hanya ingin mengambil tahunnya ("2025").
//    Pola pikir: "2025" dimulai di index ke-16 dan selesai di 20.
//    L(0) a(1) p(2) o(3) r(4) a(5) n(6) -(7) B(8) u(9) l(10) ...
//    Kita bisa hitung manual: "2025" mulai di index 16.
let tahun = dataFile.slice(16, 20); // Ambil dari 16 sampai SEBELUM 20
console.log("Tahun Laporan:", tahun); // Output: 2025

// 4. Logika 'split': Ini cara yang lebih cerdas untuk mengambil
//    nama file dan ekstensinya.
//    Pola pikir: Pecah string ini berdasarkan pemisah '.'
let bagian = dataFile.split(".");
console.log(bagian); // Output: ["Laporan-Bulanan-2025", "pdf"]

// Sekarang kita bisa ambil nama filenya dengan mudah
let namaFileSaja = bagian[0];
console.log("Nama File:", namaFileSaja); // Output: Laporan-Bulanan-2025

console.log("========================");

/* 

4. Implementasi & Problem Solving

Masalah: "Saya punya data dari URL: domain.com/profile?user=Budi&role=admin. Saya ingin 
mengekstrak nama (Budi) dan rolenya (admin) untuk ditampilkan."

Pola Pikir (Problem Solving):
1. Tujuan: Dapat Budi dan admin.
2. Observasi: Data yang saya inginkan ada setelah tanda ?. Data dipisahkan oleh tanda &. 
Setiap data punya format key=value.
3. Rencana (Logika): a. Saya tidak peduli domain.com/profile. Saya hanya mau bagian 
query (setelah ?). Saya akan split() pakai ?. b. Hasilnya akan jadi 
["domain.com/profile", "user=Budi&role=admin"]. Saya ambil bagian kedua (index 1). c. 
Sekarang saya punya user=Budi&role=admin. Ini ada dua data. Saya akan split() lagi 
pakai &. d. Hasilnya akan jadi ["user=Budi", "role=admin"]. Ini sudah bagus. e. Untuk 
user=Budi, saya split() pakai =. Hasilnya ["user", "Budi"]. Saya ambil bagian 
kedua. f. Saya lakukan hal yang sama untuk role=admin.

*/

let url = "domain.com/profile?user=Budi&role=admin";

let query = url.split("?")[1];

let params = query.split("&");

let userData = params[0].split("=");

let roleData = params[1].split("=");

console.log(`Nama User: ${userData[1]}`);
console.log(`Jabatan: ${userData[0]}`);

console.log(`Nama Admin: ${roleData[1]}`);
console.log(`Jabatan: ${roleData[0]}`);