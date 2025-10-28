/* 

🎯 PROYEK LATIHAN BAB 25: PABRIK SAPAAN PRIBADI

Kamu akan membuat sebuah "pabrik sapaan" (outer function) yang akan menghasilkan "robot 
penyapa" (inner function). Setiap robot penyapa harus mengingat nama yang diberikan 
kepadanya saat ia dibuat.

Tugas:

1. Buat sebuah function bernama buatPenyapa yang menerima satu parameter nama.
2. Di dalam buatPenyapa, return sebuah anonymous function (atau arrow function) baru.
3. Inner function ini harus menerima satu parameter sapaan (contoh: "Selamat Pagi", "Halo").
4. Di dalam inner function tersebut, tampilkan ke console gabungan dari sapaan dan nama 
yang ia "ingat" dari closure-nya. (Contoh: console.log(${sapaan}, ${nama}!);).
5. Di luar fungsi:
    - Buat "robot penyapa" pertama: const sapaBudi = buatPenyapa("Budi");.
    - Buat "robot penyapa" kedua: const sapaAlex = buatPenyapa("Alex");.
6. Panggil kedua "robot" tersebut dengan sapaan yang berbeda:
    - sapaBudi("Selamat Pagi");
    - sapaAlex("Halo");
    - sapaBudi("Selamat Tidur");

*/

const buatPenyapa = (nama) => {
    return (sapaan) => {
        console.log(`${sapaan}, ${nama}`);
    };
};

const sapaBudi = buatPenyapa("Budi");
const sapaAlex = buatPenyapa("Alex");

sapaBudi("Selamat Pagi");
sapaAlex("Halo");
sapaBudi("Selamat Tidur");
