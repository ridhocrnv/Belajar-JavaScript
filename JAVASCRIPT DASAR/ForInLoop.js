/* 

Materi 32: For In Loop

🤔 Pemahaman Dasar: Mantra for...in digunakan untuk menjelajahi label (key atau 
index) dari sebuah Object atau Array. Bayangkan kamu punya sekumpulan kotak surat. 
for...in tidak memberimu isi suratnya, tapi memberimu nomor dari setiap kotak 
surat satu per satu.

🧠 Pola Pikir Logika: Gunakan for...in saat kamu peduli dengan nama properti sebuah 
Object, bukan hanya nilainya. Ini jarang digunakan untuk Array, karena bisa jadi tidak 
berurutan dan menyertakan properti lain yang tidak kita inginkan. Fokus utama for...in 
adalah untuk Object.

*/

const petualang = {
    nama: "Alex",
    senjata: "Kapak",
    ras: "Dwarf",
};

for (const properti in petualang) {
    const nilai = petualang[properti];
    console.log(`Properti: ${properti}, Nilai: ${nilai}.`);
}
