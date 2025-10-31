/* 

Materi 1: Pendahuluan (Kenapa OOP?)

🤔 Pemahaman Dasar: Bayangkan kamu membuat sebuah game. Di dalam game itu, kamu butuh 
100 musuh.

Cara Lama (Repot): Kamu mungkin akan membuat: let musuh1_nyawa = 100; let 
musuh1_posisiX = 50; function musuh1_serang() { ... } ...lalu kamu copy-paste 
untuk musuh2, musuh3, sampai musuh100. Kalau ada 1 saja perubahan (misal, semua 
musuh harus bisa lompat()), kamu harus mengedit 100 tempat!

Cara OOP (Rapi): Kamu berpikir, "Tunggu dulu... semua musuh itu kan mirip. Semuanya 
punya nyawa, posisi, dan bisa serang()." Dengan OOP, kamu cukup membuat satu 
"Cetakan" (Blueprint) bernama Musuh. Lalu, kamu tinggal bilang ke program: "Hei, buatkan 
saya 100 musuh dari cetakan ini!"

🧠 Pola Pikir Logika: Logika OOP adalah tentang pengelompokan dan pembuatan cetakan.

Daripada mengurus ribuan data dan fungsi yang tercecer, kita membungkus data (sifat) dan 
fungsi (kemampuan) yang saling berhubungan ke dalam satu wadah yang disebut "Objek".

Tujuannya? Kode jadi lebih rapi, mudah diatur, dan bisa dipakai ulang (reusable). Kamu buat 
satu cetakan Musuh, kamu bisa pakai untuk membuat 1 atau 1 juta musuh.

*/

console.log(`Hello, World!`);
console.log(`Ini adalah pendahuluan materi JavaScript OOP (Object Oriented Programming)`);