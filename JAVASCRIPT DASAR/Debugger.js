/* 

Materi 54: Debugger

🤔 Pemahaman Dasar: Debugger adalah alat pelacak bug paling kuat. Bayangkan 
kamu bisa menjeda (pause) eksekusi kodemu di baris mana pun, lalu melihat isi dari semua 
variabelmu pada saat itu. Itulah debugger.

🧠 Pola Pikir Logika: Ini adalah problem solving level dewa. Daripada menggunakan 
console.log() di mana-mana untuk menebak nilai variabel, kamu cukup letakkan kata 
kunci debugger; di kodemu. Saat program berjalan dengan browser dev tools (Console) 
terbuka, ia akan otomatis berhenti di baris itu, memberimu kesempatan penuh untuk 
menginspeksi semuanya.

*/

function hitungTotal(a, b) {
    let hasil = a + b;

    // Letakkan 'debugger' untuk menjeda program di sini
    debugger; 

    // Saat program terjeda, kamu bisa arahkan mouse
    // ke 'hasil', 'a', atau 'b' untuk melihat nilainya.
    // Kamu juga bisa melihatnya di tab 'Sources' -> 'Scope'.

    let hasilKuadrat = hasil * hasil;
    return hasilKuadrat;
}

console.log(hitungTotal(5, 10));