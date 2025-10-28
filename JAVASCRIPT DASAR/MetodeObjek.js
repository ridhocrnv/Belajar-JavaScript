/* 

Materi 47: Object Method

🤔 Pemahaman Dasar: Bayangkan "kartu identitas" petualang (Object) kita. Sejauh ini, ia 
hanya berisi data (nama: "Alex", level: 10). Object Method adalah saat kita 
menambahkan function ke dalamnya, sehingga ia juga berisi aksi. Contoh: sapa: 
function() { ... }. Sekarang, petualang kita tidak hanya punya nama, dia bisa menyapa.

🧠 Pola Pikir Logika: Ini adalah dasar dari Object-Oriented Programming (OOP). Kita 
menyatukan data dan perilaku yang berhubungan dengannya dalam satu wadah. Daripada 
memanggil sapa(petualang), kita bisa langsung menyuruh 
petualangnya: petualang.sapa(). Ini jauh lebih logis dan terorganisir.

*/

const petualang = {
    nama: "Aragon",
    hp: 100,

    sapa: function() {
        console.log(`Halo, namaku ${petualang.nama}!`);
    },

    serang: function() {
        console.log(`${petualang.nama} sedang menyerang menggunakan pedang`);
    },

    makan: function(namaMakanan) {
        console.log(`${petualang.nama} sedang makan ${namaMakanan}`);
        petualang.hp += 10;
        console.log(`Hp bertambah menjadi, ${petualang.hp}`);
    }
};

petualang.sapa();
petualang.serang();
petualang.makan("Apel");