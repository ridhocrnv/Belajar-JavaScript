/* 

🚀 Latihan Project Sederhana (Implementasi):
Masalah: Kamu perlu menyimpan data profil dirimu dalam satu tempat.

Tugas: Buat sebuah object literal (pakai {}) bernama profilSiswa.

Property: Berikan 3 property:

nama (isi dengan namamu)
semester (isi dengan 3)
kampus (isi dengan "Universitas Halu Oleo")

Method: Berikan 1 method:
sapa() yang akan console.log("Halo, nama saya " + this.nama + " dari " + 
this.kampus + "."); (Ingat, gunakan this untuk mengakses property 
di dalam objek itu sendiri!)

Tes:

Jalankan kodemu.

Panggil method profilSiswa.sapa() di console.

Coba console.log(profilSiswa.semester).

💡 Kembangkan Sendiri (Problem Solving):
Masalah: profilSiswa baru punya 1 kemampuan.

Tantangan: Tambahkan method baru bernama infoSKS() yang akan console.log("Saya sedang mengambil 21 SKS di semester " + this.semester + ".");

Tes: Coba panggil method baru itu: profilSiswa.infoSKS().

*/

let profilMahasiswa = {
    nama: "Ridho Ahmad Irawan",
    semester: 3,
    kampus: "Universitas Halu Oleo",
    fakultas: "Fakultas Matematika dan Ilmu Pengetahuan Alam",
    prodi: "Ilmu Komputer",
    sks: 21,

    sapa: function () {
        console.log(`Halo, nama saya ${this.nama} dari ${this.kampus}.`);
    },

    infoSKS: function() {
        console.log(`Saya sedang mengambil ${this.sks} pada semester ${this.semester}.`);
    }
}

profilMahasiswa.sapa();
console.log(`Semester: ${profilMahasiswa.semester}`);
profilMahasiswa.infoSKS();