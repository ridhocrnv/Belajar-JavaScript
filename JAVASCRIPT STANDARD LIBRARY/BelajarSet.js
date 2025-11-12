// 1. Buat klub/Set baru
let klubTamu = new Set();

// 2. Tambahkan tamu
klubTamu.add("Budi");
klubTamu.add("Siti");
klubTamu.add("Aan");

console.log(klubTamu); // Output: Set(3) { "Budi", "Siti", "Aan" }

// 3. "Budi" mencoba masuk LAGI
klubTamu.add("Budi"); // <-- Duplikat!
console.log(klubTamu); // Output: Set(3) { "Budi", "Siti", "Aan" }
// Tidak ada error, tapi Set tetap 3. "Budi" diabaikan.

// 4. Cek keanggotaan
console.log(klubTamu.has("Siti")); // Output: true
console.log(klubTamu.has("Dewi")); // Output: false

// 5. Cek ukuran
console.log(klubTamu.size); // Output: 3