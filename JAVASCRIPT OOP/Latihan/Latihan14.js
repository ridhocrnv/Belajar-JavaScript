class Kucing {
    static totalKucingDibuat = 0;

    nama;

    constructor(nama) {
        this.nama = nama;
        Kucing.totalKucingDibuat++;
    }

    static getInfoTotalKucing() {
        return `Total kucing yang sudah dibuat oleh pabrik ini adalah: ${this.totalKucingDibuat}`;
    }
}

let kucingGarong = new Kucing("Garong");
let kucingMochi = new Kucing("Mochi");
let kucingOren = new Kucing("Oren");

console.log(Kucing.getInfoTotalKucing());

class KonfigurasiGame {
    static kesulitan = "NORMAL";
    static bahasa = "id-ID";

    static setKesulitan(levelBaru) {
        KonfigurasiGame.kesulitan = levelBaru;
    }
}


console.log(KonfigurasiGame.kesulitan);
KonfigurasiGame.setKesulitan("SULIT");
console.log(KonfigurasiGame.kesulitan);