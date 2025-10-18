/* 

Materi 33: For Of Loop

🤔 Pemahaman Dasar: Mantra for...of adalah kebalikannya. Dia tidak peduli dengan 
nomor kotak surat, dia langsung memberimu isi suratnya (value) satu per satu. 
for...of adalah cara paling modern dan direkomendasikan untuk menjelajahi isi dari 
Array (atau tipe data iterable lainnya seperti String).

🧠 Pola Pikir Logika: Gunakan for...of setiap kali kamu ingin melakukan sesuatu untuk 
setiap item di dalam sebuah Array dan kamu tidak peduli dengan nomor index-nya. Ini 
membuat kodemu lebih bersih dan langsung ke intinya.

*/

const inventaris = ["Perisai", "Obat", "Panah"];

for (const item of inventaris) {
    console.log(`Item di inventaris: ${item}`);
}
