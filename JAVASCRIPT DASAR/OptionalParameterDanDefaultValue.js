/* 

Materi 37: Optional Parameter & Default Value

🤔 Pemahaman Dasar: Bayangkan sebuah fungsi kirimPesan(pesan, pengirim). 
Bagaimana jika pengirimnya seringkali adalah "Admin"? Tentu melelahkan jika harus 
menuliskannya setiap saat. Default Value memungkinkan kita mengatur nilai bawaan untuk 
sebuah parameter. Jika saat fungsi dipanggil parameter itu tidak diisi, maka nilai default-nya 
yang akan dipakai.

🧠 Pola Pikir Logika: Gunakan default value untuk parameter yang sering memiliki nilai 
yang sama atau tidak wajib diisi. Ini membuat pemanggilan fungsi menjadi lebih singkat dan 
mencegah error undefined.

*/

function kirimNotifikasi(pesan, dari = "Admin Sistem") {
    console.log(`Pesan baru dari ${dari}: ${pesan}`);
}

kirimNotifikasi("Server akan segera di-restart!");
kirimNotifikasi("Jangan lupa selesaikan misimu!", "Raja Arthur");
