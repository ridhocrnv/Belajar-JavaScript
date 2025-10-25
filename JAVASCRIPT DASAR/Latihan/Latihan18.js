/* 

🎯 PROYEK LATIHAN BAB 18: KALKULATOR DAMAGE SENJATA

Kamu perlu membuat sebuah kalkulator untuk menentukan damage serangan seorang petualang. 
Kamu akan membuat fungsi yang menerima kekuatan petualang dan bonus senjata, lalu 
mengembalikan total damage-nya.

Tugas:

1. Buat sebuah function bernama hitungTotalDamage.
2. Fungsi ini harus menerima dua parameter: kekuatanDasar dan bonusSenjata.
3. Di dalam fungsi, jumlahkan kedua parameter tersebut dan simpan di variabel totalDamage.
4. Gunakan return untuk mengembalikan nilai dari totalDamage.
5. Di luar fungsi:

    Panggil hitungTotalDamage dengan argumen, misalnya 100 dan 25. Simpan 
    hasilnya di variabel damageSerangan1.

    Panggil lagi dengan argumen berbeda, misalnya 80 dan 40. Simpan hasilnya di 
    variabel damageSerangan2.

    Tampilkan kedua variabel damageSerangan1 dan damageSerangan2 ke console untuk 
    membuktikan kalkulatormu bekerja.

*/

function hitungTotalDamage(kekuatanDasar, bonusSenjata) {
    const totalDamage = kekuatanDasar + bonusSenjata;
    return totalDamage;
}

const damageSerangan1 = hitungTotalDamage(100, 25);
const damageSerangan2 = hitungTotalDamage(80, 40);

console.log(`Damage Serangan 1: ${damageSerangan1}`);
console.log(`Damage Serangan 2: ${damageSerangan2}`);
