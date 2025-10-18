/* 

Materi 34: Function (Fungsi)

🤔 Pemahaman Dasar: Bayangkan kamu punya resep untuk membuat "Ramuan 
Penyembuh". Resep itu berisi langkah-langkah: "ambil botol", "masukkan air", "tambahkan 
daun herbal", "aduk 3 kali". Daripada mengulang semua langkah itu setiap kali ingin 
membuat ramuan, kamu cukup menamai resep itu buatRamuanPenyembuh(). Sekarang, 
kamu hanya perlu berkata buatRamuanPenyembuh(), dan semua langkah itu akan otomatis 
terlaksana.

🧠 Pola Pikir Logika: Function membantu kita memecah masalah besar menjadi 
potongan-potongan kecil yang bisa dikelola. Jika kamu membuat game, kamu tidak menulis semua 
logika dalam satu file raksasa. Kamu akan membuat function serangMusuh(), function 
bukaPeti(), function naikLevel(), dan seterusnya. Ini membuat kodemu sangat 
terorganisir dan mudah diperbaiki jika ada error.

*/

function sapaPetualang() {
    console.log(`Halo, Petualang!`);
    console.log(`Selamat datang di dunia JavaScript.`);
    console.log(`Semoga petualanganmu menyenangkan!`);
}

sapaPetualang();
console.log(`---`);
sapaPetualang();

/* 

💡 Penjelasan Kode:
    function namaFungsi() { ... }: Ini adalah sintaks untuk membuat sebuah fungsi.

    namaFungsi();: Ini adalah sintaks untuk memanggil fungsi tersebut, yang akan 
    menjalankan semua kode di dalamnya.

*/