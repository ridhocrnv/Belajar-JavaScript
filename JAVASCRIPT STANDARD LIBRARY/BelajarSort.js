let skor = [50, 100, 20];

// Mengurutkan Angka - Cara BENAR (Naik/Ascending)
skor.sort(function (a, b) {
    // a = 50, b = 100 -> 50 - 100 = -50 (negatif) -> 50 di kiri
    // a = 100, b = 20 -> 100 - 20 = 80 (positif) -> 100 di kanan
    return a - b;
});

console.log(skor); // Output: [ 20, 50, 100 ]
// Array ASLI sudah berubah!

// --- Mengurutkan Objek ---
let users = [
    { nama: "Budi", skor: 80 },
    { nama: "Siti", skor: 95 },
    { nama: "Aan", skor: 70 }
];

// Kita urutkan berdasarkan 'skor' dari TERTINGGI ke TERENDAH
users.sort(function (a, b) {
    // a = {nama: "Budi", skor: 80}
    // b = {nama: "Siti", skor: 95}

    // Kita urutkan berdasarkan skor, urutan turun (b - a)
    return b.skor - a.skor;
});

console.log(users);
/* Output:
[
  { nama: "Siti", skor: 95 },
  { nama: "Budi", skor: 80 },
  { nama: "Aan", skor: 70 }
]
*/