/* 

Modul 19: Pengenalan RegExp (Ekspresi Reguler)

1. Pemahaman Dasar (The "Why")

Inilah masalah kita: Validasi input. let email = "budi@mail.com";

Bagaimana kita tahu ini valid?
    Kita bisa cek .includes("@") (Modul 10).
    Kita bisa cek .includes(".") (Modul 10).

Tapi bagaimana jika user mengetik budi@mail@com? .includes("@") akan bilang true, 
padahal itu tidak valid.
    Logika Inti: Kita tidak bisa lagi mencari satu karakter. Kita perlu mencari sebuah pola 
    (pattern).

    Problem Solving: RegExp (Regular Expression) adalah "bahasa mini" di dalam JavaScript 
    yang hanya bertujuan untuk mendefinisikan "pola teks".

    Analogi: Pikirkan RegExp sebagai cetakan kue (cookie cutter). Anda mendefinisikan sebuah 
    cetakan (polanya), lalu Anda bisa menggunakannya untuk "menguji" apakah sebuah adonan 
    (string) sesuai dengan cetakan itu.

2. Penjelasan Inti (The "What")

RegExp adalah objek yang mewakili sebuah pola. Ini bukan string, ini adalah pola yang 
dikompilasi.

Ada dua cara untuk membuatnya:
    1. Cara Literal (Paling Umum)
        Pola ditulis di antara dua garis miring: /.../
        let pola = /abc/; (Ini adalah pola yang mencari teks "abc")
    2. Cara Konstruktor (Jarang, untuk pola dinamis)
        let pola = new RegExp("abc");

Di akhir pola, Anda bisa menambahkan "bendera" (flags) untuk mengubah perilakunya:
    /abc/i -> i berarti Case-Insensitive (tidak peduli huruf besar/kecil). "abc" akan cocok 
    dengan "AbC".

    /abc/g -> g berarti Global (cari semua kecocokan, jangan berhenti di yang pertama).

3. "Kamus" Mini RegExp (Sintaks Dasar)

RegExp adalah bahasa. Ini beberapa "kata" pertamanya:
    /halo/: Mencocokkan teks persis "halo".
    Karakter Spesial (Metacharacters):
        \d: Mencocokkan satu digit angka (0-9).
        \s: Mencocokkan satu spasi (whitespace).
        \w: Mencocokkan satu karakter "kata" (huruf, angka, atau underscore).
    Kuantitas (Quantifiers):
        +: Satu atau lebih. (Contoh: /a+/ -> a, aa, aaa)
    Grup dan Rentang:
        [abc]: Cocokkan salah satu: "a", "b", atau "c".
        [a-z]: Cocokkan satu huruf kecil apa pun.
        [A-Z0-9]: Cocokkan satu huruf besar ATAU satu angka.
    Penanda Posisi (Anchors):
        ^: Awal string. (Contoh: /^Halo/ -> "Halo" harus di awal).
        $: Akhir string. (Contoh: /com$/ -> "com" harus di akhir).





*/