/* 

🤔 Pemahaman Dasar: Dalam konteks logika (seperti di dalam if (...)), JavaScript akan 
secara otomatis "memaksa" nilai apapun menjadi true atau false.

    Falsy (Sisi Gelap): Ada 6 nilai yang akan selalu dianggap false. Mereka adalah:
        1. false (tentu saja)
        2. 0 (angka nol)
        3. "" atau '' (string kosong)
        4. null
        5. undefined
        6. NaN (Not a Number, hasil dari operasi matematika yang aneh seperti 0 / 0)

    Truthy (Sisi Cahaya): SEMUA nilai selain 6 nilai di atas akan dianggap true. 
    Termasuk "hello", angka 10, [] (array kosong), dan {} (object kosong).

🧠 Pola Pikir Logika: Dengan pengetahuan ini, kita bisa menyederhanakan kode. Daripada 
menulis if (nama !== ""), kita bisa langsung menulis if (nama). Karena jika nama adalah string kosong (""), ia 
adalah falsy, dan blok if tidak akan berjalan.

*/

let namaPemain = prompt("Masukkan nama pemain:"); // Coba masukkan nama, atau biarkan kosong

if (namaPemain) { // Jika namaPemain itu TRUTHY (bukan string kosong)
    console.log(`Halo, ${namaPemain}`);
} else { // Jika namaPemain itu FALSY (string kosong)
    console.log(`Nama tidak boleh kosong!`);
}

let jumlahNyawa = 0;

if (jumlahNyawa) { // 0 adalah FALSY
    console.log(`Masih memiliki nyawa.`);
} else {
    console.log(`Game Over`); // Kode ini yang akan berjalan
}