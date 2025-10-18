/* 

Terkadang, kita tidak tahu pasti berapa kali harus mengulang. Kita hanya tahu harus terus 
mengulang selama sebuah kondisi masih terpenuhi. Untuk ini, kita gunakan mantra While Loop 
dan Do While Loop.

Materi 28: While Loop

🤔 Pemahaman Dasar: Bayangkan kamu sedang menambang batu berharga. Kamu tidak 
tahu butuh berapa kali pukulan, kamu hanya akan terus memukul selama batunya belum 
pecah. Itulah While Loop. Ia hanya memeriksa satu hal: kondisinya. Jika kondisi true, ia 
akan menjalankan blok kodenya, lalu memeriksa kondisinya lagi.

🧠 Pola Pikir Logika: Gunakan while saat kamu tidak peduli dengan hitungan, tapi peduli 
dengan sebuah kondisi yang harus terpenuhi. Contoh: "Terus minta password selama 
inputnya masih salah," atau "Terus serang musuh selama HP-nya masih di atas 0."

*/

let hpMusuh = 100;
let serangan = 1;

while (hpMusuh > 0) {
    console.log(`Serangan ke-${serangan} : Menyerang musuh!.`);
    hpMusuh -= 25;
    console.log(`HP musuh tersisa: ${hpMusuh}`);
    serangan++;
}

console.log(`Musuh telah dikalahkan!.`);

/* 

Perhatian: Hati-hati! Jika kondisi di dalam while tidak pernah menjadi false, kamu akan 
menciptakan infinite loop (perulangan tak terbatas) yang akan membuat programmu hang. 
Pastikan ada sesuatu di dalam loop yang mengubah kondisi tersebut.

*/