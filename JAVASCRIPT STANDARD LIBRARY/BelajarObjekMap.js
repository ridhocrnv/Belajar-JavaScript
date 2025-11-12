// 1. Buat "kamus" (Map) baru
let kamusAneh = new Map();

// 2. Set dengan key STRING (normal)
kamusAneh.set("hello", "halo");

// 3. Set dengan key ANGKA (tidak diubah jadi string!)
kamusAneh.set(100, "Ini adalah nilai untuk angka 100");

// 4. Set dengan key BOOLEAN
kamusAneh.set(true, "Ini adalah nilai untuk 'true'");

// 5. Set dengan key OBJEK
let userBudi = { nama: "Budi" };
kamusAneh.set(userBudi, "Ini data milik Budi");

console.log(kamusAneh);
/* Output:
Map(4) {
    'hello' => 'halo',
    100 => 'Ini adalah nilai untuk angka 100',
    true => "Ini adalah nilai untuk 'true'",
    { nama: 'Budi' } => 'Ini data milik Budi'
}
*/

// 6. Mengambil data (harus pakai key dengan tipe yang sama)
console.log(kamusAneh.get("hello")); // "halo"
console.log(kamusAneh.get(100)); // "Ini adalah nilai untuk angka 100"
console.log(kamusAneh.get(userBudi)); // "Ini data milik Budi"


let configMap = new Map();

// Key-nya adalah boolean, bukan string
configMap.set(true, "Layanan sedang berjalan.");
configMap.set(false, "Layanan sedang mati.");

let statusLayanan = true; // Ini bisa datang dari mana saja

// Kita ambil deskripsi berdasarkan status saat ini
console.log(configMap.get(statusLayanan));
// Output: "Layanan sedang berjalan."

// Ubah status
statusLayanan = false;
console.log(configMap.get(statusLayanan));
// Output: "Layanan sedang mati."