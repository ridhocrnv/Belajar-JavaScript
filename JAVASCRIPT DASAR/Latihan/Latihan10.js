/* 

Kamu diberi data profil dua petualang. Salah satunya memiliki data yang lengkap, sementara yang 
lain tidak. Tugasmu adalah membuat program yang bisa menampilkan info mereka tanpa 
menyebabkan error.

Tugas:

1. Buat dua object:
    profilLengkap: berisi nama dan object stats di dalamnya. Object stats berisi hp dan mana.
    profilKosong: hanya berisi nama.
2. Buat sebuah variabel namaTampilan. Gunakan ?? untuk mengisinya dengan 
profilLengkap.nama atau "Profil Misterius" jika nama tidak ada.
3. Buat sebuah variabel manaTampilan. Gunakan kombinasi ?. dan ?? dalam satu baris 
untuk melakukan ini:
    Coba ambil mana dari profilLengkap dengan aman (profilLengkap.stats?.mana).
    Jika hasilnya null atau undefined, berikan nilai default 10.
4. Tampilkan namaTampilan dan manaTampilan dari profilLengkap ke console.
5. Ulangi langkah 2 & 3 untuk profilKosong dan tampilkan hasilnya juga. Kamu akan lihat 
bagaimana mantra ini beraksi!

Contoh Hasil Akhir di Console:

Nama: (Nama dari profilLengkap)
Mana: (Mana dari profilLengkap)
---
Nama: (Nama dari profilKosong)
Mana: 10

*/

let profilLengkap = {
    nama: null,
    stats: {
        hp: null,
        mana: null
    }
};

let profilKosong = {
    nama: null
};

let namaTampilan = profilLengkap.nama ?? "Profil Misterius";
let namaTampilan2 = profilKosong.nama ?? "Profil Misterius";

let manaTampilan = profilLengkap.stats?.mana ?? 10;
let manaTampilan2 = profilKosong.stats?.mana ?? 10;

console.log(`Nama: ${namaTampilan}`);
console.log(`Mana: ${manaTampilan}`);
console.log(`---`);
console.log(`Nama: ${namaTampilan2}`);
console.log(`Mana: ${manaTampilan2}`);