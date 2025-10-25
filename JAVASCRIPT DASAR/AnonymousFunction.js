/* 

Materi 40: Anonymous Function

🤔 Pemahaman Dasar: Jika kita bisa menyimpan fungsi di variabel, kenapa kita harus 
repot-repot memberinya nama (sapaPagi)? Kita bisa membuat fungsi tanpa nama 
(anonymous) dan langsung memasukkannya ke variabel.

*/

const ucapSelamatTinggal = function (nama) {
    console.log(`Selamat tinggal ${nama}!`);
};

ucapSelamatTinggal("Alex");
