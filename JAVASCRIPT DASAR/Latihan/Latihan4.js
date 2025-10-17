/* 

Saatnya menggabungkan semua yang telah kita pelajari! Buatlah profil lengkap seorang 
petualang yang mencakup data diri (Object) dan barang-barang bawaannya (Array).

Tugas:

1. Buat sebuah Object bernama profilPetualang.
2. Isi object tersebut dengan data berikut:
    nama (String)
    level (Number)
    hp (Health Points, Number)
    inventaris (yang ini isinya adalah sebuah Array dari nama-nama item, contoh: 
    ["Buku Mantra", "Tongkat Sihir", "Jubah Pelindung"]).
3. Gunakan console.log() dan String Template untuk menampilkan semua informasi profil 
tersebut dengan rapi. Kamu harus mengakses properti dari Object dan juga salah satu item 
dari Array di dalamnya.

Contoh Hasil Akhir di Console:

--- PROFIL PETUALANG ---
Nama: Gandalf
Level: 99
HP: 1500
Item Pertama di Tas: Buku Mantra

*/

let profilPetualang = {
    nama: "Alex",
    level: 99,
    hp: 2000,
    inventaris: ["Buku Mantra", "Tongkat Sihir", "Jubah Pelindung"]
};


console.log("--- PROFIL PETUALANG ---");
console.log(`Nama: ${profilPetualang.nama}`);
console.log(`Level: ${profilPetualang.level}`);
console.log(`HP: ${profilPetualang.hp}`);
console.log(`Item Pertama di Tas: ${profilPetualang.inventaris[0]}`);

/* 

✨ Tantangan Pengembangan: Setelah menampilkan semua data, coba tambahkan satu item 
baru ke dalam array inventaris milik profilPetualang. Cari tahu cara menggunakan .
push() pada array di JavaScript. Lalu tampilkan lagi seluruh isi inventarisnya.

*/

profilPetualang.inventaris.push("Pedang Legendaris");
console.log(`Isi ransel petualang adalah: ${profilPetualang.inventaris}.`);
