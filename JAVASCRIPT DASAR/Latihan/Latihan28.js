/* 

🎯 PROYEK LATIHAN BAB 28: MEMBONGKAR DATA MISI

Kamu menerima sebuah object data misi yang kompleks. Tugasmu adalah membongkar 
data-data pentingnya ke dalam variabel-variabel agar mudah digunakan.

Tugas:

1. Buat sebuah object dataMisi yang berisi:
    namaMisi: "Selamatkan Putri"
    lokasi: "Kastil Naga"
    levelKesulitan: "Sangat Sulit"
    hadiah: { emas: 5000, item: "Pedang Legendaris" }
2. Gunakan Destructuring Object dalam satu baris untuk mengambil namaMisi dan 
levelKesulitan dari dataMisi ke dalam variabel.
3. Tantangan: Gunakan Destructuring Bersarang (Nested Destructuring) dalam satu baris 
untuk mengambil properti item yang ada di dalam hadiah. (Petunjuk: sintaksnya const 
{ propertiLuar: { propertiDalam } } = object;).
4. Tampilkan ketiga variabel yang sudah kamu buat (namaMisi, levelKesulitan, dan item) 
ke console.

*/

const dataMisi = {
    namaMisi: "Selamatkan Putri",
    lokasi: "Kastil Naga",
    levelKesulitan: "Sangat Sulit",
    hadiah: {
        emas: 5000,
        item: "Pedang Legendaris"
    }
}

const { namaMisi, levelKesulitan } = dataMisi;
const { hadiah: { emas, item } } = dataMisi;

console.log(`Nama misi: ${namaMisi}`);
console.log(`Kesulitan: ${levelKesulitan}`);
console.log(`Item: ${item}`);