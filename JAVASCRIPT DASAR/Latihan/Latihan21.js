/* 

🎯 PROYEK LATIHAN BAB 21: PABRIK ROBOT SEDERHANA

Kamu akan membuat sebuah function utama buatRobot() yang akan menjalankan beberapa 
function pembantu yang tersembunyi di dalamnya untuk merakit sebuah robot.

Tugas:

1. Buat sebuah variabel global bernama nomorSeriAwal dengan nilai 100.
2. Buat sebuah function utama bernama buatRobot yang menerima satu parameter namaRobot.
3. Di dalam buatRobot, buat dua inner function:
    pasangBadan(): Menampilkan console.log("Memasang badan robot...").
    pasangKaki(): Menampilkan console.log("Memasang kaki robot...").
4. Masih di dalam buatRobot, panggil kedua inner function tersebut secara berurutan.
5. Setelah memanggil inner function, buat sebuah variabel local nomorSeriRobot yang 
nilainya adalah nomorSeriAwal ditambah 1. (Ini akan mengakses variabel global).
6. Tampilkan pesan: Robot ${namaRobot} dengan nomor seri ${nomorSeriRobot} telah aktif!
7. Di luar function, panggil buatRobot("Bender").

*/

const nomorSeriAwal = 100;

function buatRobot(namaRobot) {
    function pasangBadan() {
        console.log("Memasang badan robot...");
    }
    function pasangKaki() {
        console.log("Memasang kaki robot...");
    }

    pasangBadan();
    pasangKaki();

    const nomorSeriRobot = nomorSeriAwal + 1;
    console.log(
        `Robot ${namaRobot} dengan nomor seri ${nomorSeriRobot} telah aktif!`
    );
}

buatRobot("Probe");
