/* 

Materi 42: Scope (Ruang Lingkup)

🤔 Pemahaman Dasar: Scope adalah aturan yang menentukan di mana saja sebuah 
variabel bisa diakses. Bayangkan sebuah kastil (Global Scope) dengan banyak kamar 
(Local/Function Scope).
    Global Scope: Variabel yang kamu buat di luar function (di area utama kodemu) bisa 
    diakses dari mana saja, baik di luar maupun di dalam function.

    Local Scope: Variabel yang kamu buat di dalam sebuah function (menggunakan let 
    atau const) hanya bisa diakses di dalam function itu saja. Kamar lain tidak bisa 
    melihat isi kamar ini.

🧠 Pola Pikir Logika: Scope sangat penting untuk keamanan dan kerapian. Ia mencegah 
variabel dari function yang berbeda saling bertabrakan namanya. Selalu usahakan membuat 
variabel di scope sedalam mungkin (di dalam function jika memungkinkan) dan hindari 
membuat terlalu banyak variabel global.

*/

const namaRaja = "Arthur";

function sapaDalamKastil() {
    console.log(`Salam, paduka ${namaRaja}`);
}

function sapaDalamKamar() {
    const namaPenjaga = "Lancelot";
    console.log(`Paduka, ${namaRaja} sedang dijaga oleh ${namaPenjaga}.`);
}

console.log(namaRaja);
sapaDalamKastil();
sapaDalamKamar();