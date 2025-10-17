/* 

🤔 Pemahaman Dasar: Operator in adalah mantra untuk memeriksa "kartu identitas" 
(Object). Kamu bisa bertanya, "Apakah ada label level di dalam object profil?". 
Jawabannya selalu true atau false.

🧠 Pola Pikir Logika: Ini sangat berguna untuk menghindari error. Sebelum mencoba 
menggunakan profil.level, ada baiknya kita periksa dulu apakah properti level itu 
benar-benar ada. Jika tidak, program kita bisa-bisa error.

*/

let petualang = {
    nama: "Alex",
    hp: 500,
};

let checkName = "nama" in petualang;
let checkWeapon = "senjata" in petualang;

console.log(`Apakah di Object Petualang Memiliki Nama: ${checkName}.`);
console.log(`Apakah di Object Petualang Memiliki Senjata: ${checkWeapon}.`);
