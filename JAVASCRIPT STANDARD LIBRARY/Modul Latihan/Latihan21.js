let tanggalLog = "Pembaruan sistem terakhir: 2025-11-16";
let daftarAcara = "Acara: 2025-12-01, Liburan: 2025-12-25, Rapat: 2026-01-10";

let regexDate = /^\{d4}-\{d2}-\{d2}$/;
let dateCapturing = /(\d{4})[-/](\d{2})[-/](\d{2})/;
let regexDateGlobal = /(\d{4})[-/](\d{2})[-/](\d{2})/g;

let tanggalBaru = tanggalLog.replace(dateCapturing, "$3/$2/$1");
console.log(tanggalBaru);

let daftarAcaraBaru = daftarAcara.replace(regexDateGlobal, "$3/$2/$1");
console.log(daftarAcaraBaru);