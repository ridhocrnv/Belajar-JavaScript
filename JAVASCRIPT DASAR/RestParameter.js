/* 

Materi 38: Rest Parameter

🤔 Pemahaman Dasar: Bagaimana jika kamu ingin membuat fungsi jumlahkan() yang 
bisa menerima 2 angka, 3 angka, 5 angka, atau bahkan 100 angka sekaligus? Rest 
Parameter adalah solusinya. Dengan sintaks ...namaVariabel, ia akan mengumpulkan 
semua sisa argumen yang diberikan ke dalam sebuah Array.

🧠 Pola Pikir Logika: Gunakan rest parameter saat kamu ingin membuat fungsi yang sangat 
fleksibel dan bisa menerima jumlah input yang tidak terbatas. Ini sangat berguna untuk 
fungsi matematika, penggabungan data, atau apa pun yang perlu memproses banyak item. 
Rest parameter harus selalu menjadi parameter terakhir.

*/

// '...angka' akan mengumpulkan semua argumen menjadi sebuah array bernama 'angka'
function jumlahkanSemua(...angka) {
    let total = 0;

    // Karena 'angka' adalah array, kita bisa me-loop nya!
    for (const a of angka) {
        total += a; // Menambahkan setiap angka ke total
    }
    return total;
}

const hasil1 = jumlahkanSemua(1, 2, 3); // angka akan menjadi [1, 2, 3]
const hasil2 = jumlahkanSemua(10, 20, 30, 40, 50); // angka akan menjadi [10, 20, 30, 40, 50]
const hasil3 = jumlahkanSemua(5, 5); // angka akan menjadi [5, 5]

console.log(`Hasil 1: ${hasil1}`);
console.log(`Hasil 2: ${hasil2}`);
console.log(`Hasil 3: ${hasil3}`);