/* 

Closure adalah sebuah keajaiban yang terjadi secara otomatis di JavaScript. Ini adalah 
kemampuan sebuah inner function (fungsi di dalam) untuk mengingat dan mengakses 
variabel-variabel dari outer function-nya (fungsi di luar), bahkan setelah outer function 
tersebut selesai dieksekusi.

Materi 46: Closure

🤔 Pemahaman Dasar: Bayangkan kamu membuat sebuah "pabrik" (outer function) 
yang menciptakan robot (inner function). Saat pabrik itu menciptakan robot, ia 
memberinya sebuah "ransel ajaib" (variabel local). Setelah robot itu keluar dari pabrik 
(pabriknya selesai bekerja), si robot masih bisa mengakses dan menggunakan isi ransel 
yang diberikan kepadanya saat ia "dilahirkan". Ransel ajaib yang "diingat" oleh si robot 
itulah Closure.

🧠 Pola Pikir Logika: Closure memungkinkan kita untuk membuat function yang "punya 
ingatan" atau state. Kita bisa membuat function yang bisa menghitung berapa kali ia sudah 
dipanggil, atau function yang bisa menyembunyikan data pribadi, yang hanya bisa diakses 
oleh function itu sendiri.

*/

function buatPenghitung() {
    let angka = 0;
    console.log("Pabrik penghitung dibuat");

    return function () {
        angka++;
        console.log(`Angka sekarang: ${angka}`);
    };
}

const penghitungA = buatPenghitung();

const penghitungB = buatPenghitung();

penghitungA();
penghitungA();
penghitungA();

penghitungB();
