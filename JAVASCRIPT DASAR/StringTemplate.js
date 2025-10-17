/* 

🤔 Pemahaman Dasar: Ingat bagaimana kamu menggabungkan teks dan variabel dengan 
tanda + di proyek sebelumnya? Itu agak merepotkan. String Template adalah cara yang 
jauh lebih mudah! Kamu bisa memasukkan variabel langsung ke dalam teks.

🧠 Pola Pikir Logika: Ini bukan tentang logika baru, tapi tentang membuat kodemu lebih 
rapi dan mudah dibaca. Kode yang rapi akan sangat membantumu dalam problem solving 
di masa depan.

💻 Contoh Kode: Caranya adalah dengan menggunakan backtick ( )—tombol di 
sebelah kiri angka 1—bukan tanda kutip biasa. Lalu, bungkus variabelmu 
dengan${...}`.

*/

let protect = "Star Protection";
let mvpLose = "MVP Lose";

// Cara lama dengan +
console.log("Kamu mendapatkan " + protect + " setelah mendapat predikat " + mvpLose);

// Cara baru dengan String Template
console.log(`Kamu mendapatkan ${protect} setelah memperoleh predikat ${mvpLose}.`);