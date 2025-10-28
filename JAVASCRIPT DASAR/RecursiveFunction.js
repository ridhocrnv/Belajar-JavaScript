/* 

Materi 43: Recursive Function

🤔 Pemahaman Dasar: Bayangkan kamu berdiri di depan cermin sambil memegang cermin 
lain. Kamu akan melihat bayangan cermin di dalam cermin, di dalam cermin, dan seterusnya, 
tanpa henti. Itu adalah recursive tanpa batas. Agar berguna, sebuah recursive function harus 
memiliki dua hal:

1. Base Case (Kondisi Berhenti): Kondisi yang memberitahu fungsi kapan harus berhenti 
memanggil dirinya sendiri. (Contoh: "Jika cermin sudah terlalu kecil, berhenti.").
2. Recursive Call (Panggilan Rekursif): Tempat di mana fungsi memanggil dirinya sendiri, 
biasanya dengan nilai yang "lebih kecil" atau lebih dekat ke base case. (Contoh: 
"Tampilkan bayangan dari cermin yang lebih kecil berikutnya.").

🧠 Pola Pikir Logika: Recursive sangat kuat untuk memecahkan masalah yang bisa dipecah 
menjadi sub-masalah yang lebih kecil dan identik. Contoh klasiknya adalah hitungan mundur.

hitungMundur(3) adalah:
    1. Tampilkan 3.
    2. Lalu, jalankan hitungMundur(2).
        Tampilkan 2.
        Lalu, jalankan hitungMundur(1).
            Tampilkan 1.
            Lalu, jalankan hitungMundur(0).
                (Base Case tercapai: angka = 0) BERHENTI.

*/

function hitungMundur(angka) {
    if (angka <= 0) {
        console.log(`Hitung mundur selesai.`);
        return;
    }

    console.log(`Hitung mundur: ${angka}`);

    hitungMundur(angka - 1);
}

hitungMundur(10);
