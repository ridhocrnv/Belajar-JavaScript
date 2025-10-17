/* 

🤔 Pemahaman Dasar: Bayangkan kamu ingin mengambil "pedang" dari "tas" milik 
"petualang". Tapi, bagaimana jika si "petualang" tidak ada? Atau dia ada tapi tidak punya 
"tas"? Programmu akan error! ?. adalah mantra penyelamat. Ia akan mencoba mengambil 
petualang?.tas?.pedang. Jika di tengah jalan ia menemukan null atau undefined 
(misalnya, tas tidak ada), ia akan langsung berhenti dan memberikan hasil undefined 
dengan aman, tanpa menyebabkan error.

🧠 Pola Pikir Logika: Ini adalah cara super aman untuk mengakses properti di dalam object 
yang mungkin bersarang (nested) dan datanya tidak lengkap. Kamu tidak perlu lagi menulis 
if (petualang && petualang.tas && petualang.tas.pedang) yang panjang.

*/

let petualang1 = {
    nama: "Alex",
    perlengkapan: {
        senjata: "Busur X"
    }
};

let petualang2 = {
    nama: "Joseph"
    // petualang2 tidak punya properti 'perlengkapan'
};

// Mengambil senjata dari petualang1 (berhasil)
let senjata1 = petualang1.perlengkapan.senjata;
console.log(`Senjata 1: ${senjata1}`); // Hasilnya: Busur X

// Mengambil senjata dari petualang2 dengan aman menggunakan ?.
let senjata2 = petualang2.perlengkapan?.senjata;
console.log(`Senjata 2: ${senjata2}`); // Hasilnya: undefined (BUKAN ERROR!)