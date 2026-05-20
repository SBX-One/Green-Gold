interface KeranjangItem {
    id: number;
    namaBarang: string;
    variant: string;
    harga: number;
    jumlah: number;
}

export default function HitungTotalHarga(keranjang: KeranjangItem[]): number {
    return keranjang.reduce((total, item) => {
        return total + (item.harga * item.jumlah)
    }, 0);
}