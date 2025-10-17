/* 

Kamu adalah penjaga gudang senjata. Petualang akan datang dan kamu harus menentukan 
senjata apa yang boleh mereka ambil berdasarkan level mereka.

Tugas:

1. Salin object profilPetualang versi terstruktur yang sudah kita perbaiki bersama di atas.
2. Buatlah sebuah struktur if-else if-else.
3. Kondisi 1: Jika level petualang di atas 50, tampilkan pesan di console: Halo 
${nama_petualang}, kamu berhak mengambil 'Pedang Phoenix Api'!
4. Kondisi 2: Jika tidak, periksa lagi, jika level petualang di atas 20, tampilkan pesan: Halo 
${nama_petualang}, kamu boleh mengambil 'Busur Angin'!
5. Kondisi 3: Jika tidak memenuhi keduanya, tampilkan pesan: Maaf ${nama_petualang}, 
kamu hanya boleh mengambil 'Belati Latihan'.
6. Coba ubah-ubah nilai level di object-mu dan lihat apakah pesannya berubah sesuai 
aturan!

✨ Tantangan Pengembangan: Tambahkan satu syarat lagi! Untuk mengambil "Pedang Phoenix 
Api", level harus di atas 50 DAN hp harus di atas 1000. Bagaimana caramu menggabungkan 
dua kondisi ini dalam satu if?

*/

let profilPetualang = {
    nama: "Alex",
    level: 99,
    hp: 2000,
    inventaris: ["Buku Mantra", "Tongkat Sihir", "Jubah Pelindung"]
};

if (profilPetualang.level > 50 && profilPetualang.hp > 1500) {
    console.log(`Halo ${profilPetualang.nama}, kamu berhak mengambil 'Pedang Phoenix Api'.`);
} else if (profilPetualang.level > 20) {
    console.log(`Halo ${profilPetualang.nama}, kamu boleh mengambil 'Busur Angin'!.`);
} else {
    console.log(`Maaf ${profilPetualang.nama}, kamu hanya boleh mengambil 'Belati Latihan'.`);
}