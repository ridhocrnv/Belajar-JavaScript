/* 

Materi 41: Function di dalam Function

🤔 Pemahaman Dasar: Sesuai namanya, kamu bisa membuat sebuah function baru di 
dalam function lain. Function yang di dalam ini (disebut inner function) hanya bisa "dilihat" 
dan dipanggil dari function yang di luar (outer function).

🧠 Pola Pikir Logika: Ini berguna untuk menyembunyikan "detail" atau "langkah pembantu". 
Bayangkan function buatKue(). Di dalamnya, kamu mungkin butuh langkah-langkah kecil 
seperti adukAdonan() dan panaskanOven(). Daripada membuat kedua function itu bisa 
diakses dari mana saja, kamu bisa menyembunyikanya di dalam buatKue().

*/

function masakMakanMalam(menu) {
    function siapkanBahan(bahan) {
        console.log(`Mempersiapkan bahan: ${bahan}`)
    }

    function prosesMemasak(metode) {
        console.log(`Memasak dengan metode: ${metode}`);
    }

    siapkanBahan(menu);
    prosesMemasak("Digoreng");
    console.log(`${menu} goreng telah siap!`);
}

masakMakanMalam("Telur");