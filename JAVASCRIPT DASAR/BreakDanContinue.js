/* 

Di bab ini, kita akan belajar dua mantra kendali di dalam loop: break untuk keluar paksa dan 
continue untuk melompati sisa putaran saat ini dan langsung lanjut ke putaran berikutnya

Materi 30: break dan continue

🤔 Pemahaman Dasar: Bayangkan kamu sedang memeriksa setumpuk kartu satu per satu (loop).

    break (Berhenti Total): Kamu sedang mencari kartu As Hati. Begitu kamu 
    menemukannya, kamu langsung berhenti (break) mencari. Kamu tidak peduli dengan 
    sisa tumpukan kartu. break akan menghentikan loop saat itu juga.

    continue (Lompati yang Ini): Kamu sedang mengumpulkan semua kartu berwarna 
    merah. Setiap kali kamu menemukan kartu hitam, kamu hanya melewatinya 
    (continue) dan langsung mengambil kartu berikutnya. Kamu tidak berhenti total, 
    hanya melompati putaran yang tidak kamu inginkan.

🧠 Pola Pikir Logika:

    Gunakan break saat tujuan dari loop sudah tercapai sebelum loop selesai secara 
    alami. Contoh: Mencari nama pertama dalam daftar yang diawali huruf 'B'.

    Gunakan continue saat kamu ingin memproses sebagian besar item, tapi ingin 
    mengabaikan beberapa item yang memenuhi kondisi tertentu. Contoh: Menjumlahkan 
    semua angka positif dalam daftar, dan mengabaikan angka negatif.

*/

for (let i = 1; i < 10; i++) {
    if (i === 7) {
        console.log(`Angka 7 ditemukan. Pencarian dihentikan!`)
        break;
    }
    console.log(`Mencari di Angka ${i}`);
}

for (let j = 1; j < 10; j++) {
    if (j % 2 == 0) {
        continue
    }
    console.log(`Angka Ganjil: ${j}`);
}