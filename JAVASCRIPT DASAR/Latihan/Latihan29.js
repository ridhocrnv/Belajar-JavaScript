/* 

🎯 PROYEK LATIHAN BAB 29: PERBURUAN BUG

Kamu diberi kode yang rusak. Tugasmu adalah menggunakan Strict Mode dan Debugger 
untuk menemukan dan memperbaikinya.

Tugas:

1. Salin kode "rusak" di bawah ini ke dalam console-mu (atau file HTML/JS).
2. Langkah 1 (Strict Mode): Tambahkan "use strict"; di baris paling atas. Jalankan. Apa 
yang terjadi? Kesalahan apa yang ditunjukkan? Perbaiki kesalahan itu (Petunjuk: ada variabel 
yang lupa dideklarasikan).
3. Langkah 2 (Debugger): Setelah kesalahan pertama diperbaiki, program masih memberikan 
hasil yang aneh (NaN). Letakkan debugger; di dalam loop untuk menjeda program.
4. Periksa nilai item dan total di setiap putaran. Kamu akan melihat bahwa salah satu 
item bukan angka.
5. Perbaiki logikanya: gunakan if untuk memastikan kamu hanya menambahkan ke total 
jika item-nya adalah number.

// Salin kode ini untuk diperbaiki
// JANGAN PERBAIKI DULU, jalankan apa adanya

daftarSkor = [100, 50, "70", 20]; // Kesalahan 1: lupa 'const'
let total = 0;

for (const item of daftarSkor) {
    // Kesalahan 2: "70" adalah string, bukan number
    // Letakkan debugger di sini
    total = total + item; 
}

console.log(`Total skor adalah: ${total}`); // Hasilnya NaN (Not a Number)

*/

"use strict";

const daftarSkor = [100, 50, "70", 20];
let total = 0;

for (const item of daftarSkor) {
    debugger;
    if (typeof item !== "number") {
        console.log(`Menemukan data aneh, dilewati: ${item}`);
        continue;
    }
    total = total + item;
}

console.log(`Total skor adalah: ${total}`);yk