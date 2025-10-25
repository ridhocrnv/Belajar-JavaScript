/* 

🎯 PROYEK LATIHAN BAB 17: PIDATO YANG LEBIH PERSONAL

Saatnya meningkatkan mantra pidatomu dari bab sebelumnya. Kamu ingin bisa menyebutkan 
nama kota dan nama monster yang sedang mengancam kota tersebut.

Tugas: 

1. Salin function mulaiPetualangan dari latihan sebelumnya.
2. Modifikasi function tersebut agar menerima dua parameter: namaKota dan namaMonster.
3. Ubah console.log() di dalamnya agar menggunakan kedua parameter tersebut untuk 
membuat pidato yang dinamis.
4. Panggil function mulaiPetualangan() tersebut sebanyak dua kali dengan argumen yang 
berbeda setiap kalinya.

Contoh Hasil Akhir di Console:

// Panggilan pertama
Perhatian, para penduduk Oakhaven!
Petualang pemberani telah tiba untuk mengalahkan Goblin!
Mari kita mulai petualangan ini!
---
// Panggilan kedua
Perhatian, para penduduk Riverdell!
Petualang pemberani telah tiba untuk mengalahkan Naga!
Mari kita mulai petualangan ini!

*/

function mulaiPetualangan(kota, monster) {
    console.log(`Perhatian, para penduduk ${kota}!`);
    console.log(`Petualang pemberani telah tiba untuk mengalahkan ${monster}!`);
    console.log(`Mari kita mulai petualangan ini!`);
}

mulaiPetualangan("Oakhaven", "Goblin");
console.log(`---`);
mulaiPetualangan("Riverdell", "Naga");