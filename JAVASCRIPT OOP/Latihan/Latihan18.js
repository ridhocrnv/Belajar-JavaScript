class KandangKucing {
    constructor() {
        this.koleksiKucing = [];
    }

    tambahKucing(namaKucing) {
        this.koleksiKucing.push(namaKucing);
    }

    [Symbol.iterator]() {
        let index = 0;
        let daftarKucing = this.koleksiKucing;

        return {
            next: function() {
                if (index < daftarKucing.length) {
                    return {
                        value: daftarKucing[index++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

let kandang = new KandangKucing();

kandang.tambahKucing("Mochi");
kandang.tambahKucing("Garong");
kandang.tambahKucing("Oren");

console.log("Daftar kucing dalam kandang:");
for (let namaKucing of kandang) {
    console.log("- " + namaKucing);
}