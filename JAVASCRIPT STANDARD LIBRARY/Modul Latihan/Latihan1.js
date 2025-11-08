/* 

Latihan Modul 1: "Penghitung Waktu Mundur Sederhana"

Tantangan: Buatlah sebuah skrip yang akan menghitung mundur di konsol dari 3 ke 1, dengan 
jeda 1 detik di setiap hitungan. Setelah hitungan selesai (mencapai 1), tampilkan pesan "GO!".

Batasan: Anda hanya boleh menggunakan fungsi/objek global. Jangan membuat fungsi kompleks, 
manfaatkan setTimeout.

Petunjuk (Clue): Anda mungkin perlu memanggil setTimeout beberapa kali.

*/

function hitungMundur(angka) {
    if (angka === 0) {
        console.log("GO!");
        return;
    }

    console.log(angka);

    setTimeout(() => {
        hitungMundur(angka - 1);
    }, 1000);
}

hitungMundur(10);