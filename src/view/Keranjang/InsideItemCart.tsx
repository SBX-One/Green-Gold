import Bar from "../../components/common/Bar";
import house from "../../assets/svg/house.svg"
import map from "../../assets/svg/map.svg"
import data from "../../data/Keranjang.json"
import HitungTotalHarga from "../../type/HitungTotalHarga";
import Image from "../../assets/svg/image.svg"
import { useTrash } from "../../context/TrashContext";
import { useRef, useState } from "react";
import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import RigoButton from "../../components/ui/button/RigoButton";
import plus from "../../assets/svg/plus.svg"
import minus from "../../assets/svg/minus.svg"

// Membuat tipe data untuk melacak jumlah item berdasarkan ID atau index string/number
interface CartQuantities {
    [key: string | number]: number;
}

export default function InsideItemCart() {
    const totalHarga = HitungTotalHarga(data).toLocaleString('id-ID')
    const { setItemNum } = useTrash(); // Tetap gunakan jika context ini diperlukan untuk keperluan lain
    const hasChangedRef = useRef(false);

    // Initialize quantities dari Keranjang.json data
    const initializeQuantities = (): CartQuantities => {
        const initialQty: CartQuantities = {};
        data.forEach((item) => {
            const itemId = (item.id || item) as string | number;
            initialQty[itemId] = item.jumlah || 0;
        });
        return initialQty;
    }

    const [quantities, setQuantities] = useState<CartQuantities>(initializeQuantities());

    console.log(totalHarga)

    // Fungsi Tambah berdasarkan identifier unik (bisa item.id atau index 'i')
    function handleAdd(itemId: string | number) {
        setQuantities((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
        
        setItemNum((prev: number) => prev + 1); // Opsional: update total barang di global context jika perlu
        hasChangedRef.current = true; 
    }

    // Fungsi Kurang berdasarkan identifier unik
    function handleSubtract(itemId: string | number) {
        setQuantities((prev) => {
            const currentQty = prev[itemId] || 0;
            if (currentQty <= 1) {
                // Jika dikurangi dari 1 ke 0, hapus key-nya agar tombol kembali ke "Tambah Keranjang"
                const updated = { ...prev };
                delete updated[itemId];
                return updated;
            }
            return {
                ...prev,
                [itemId]: currentQty - 1
            };
        });

        setItemNum((prev: number) => Math.max(0, prev - 1));
        hasChangedRef.current = true;
    }

    return ( 
        <div className="px-5 mt-5">
            <Bar iconL={house} iconR={map} title="Jl. Pulau Ambon No.8" desc="Denpasae Barat, Bali" />

            <div className="mt-10">
                <h1 className="sm-semibold text-text-label">Sampah Umum</h1>
            </div>

            <div className="flex flex-col gap-5 mt-4">
                {data.map((item, i) => {
                    // Ambil identifier unik barang. Gunakan item.id jika ada, jika tidak ada pakai index `i`
                    const itemId = item.id || i; 
                    const currentItemQty = quantities[itemId] || 0;

                    return (
                        <div key={i} className="relative">
                            <div className="absolute right-5 top-4 min-w-48.5 hidden md:block   ">
                                {/* Cek apakah item ini sudah pernah diklik (qty > 0) */}
                                {currentItemQty > 0 ? (
                                    <div className="flex flex-1 flex-row-reverse justify-between items-center">
                                        <button onClick={() => handleAdd(itemId)}>
                                            <SimpleIcon icon={plus} iconWidth={16} />
                                        </button>
                                        <p className="text-text-body">{currentItemQty}</p>
                                        <button onClick={() => handleSubtract(itemId)}>
                                            <SimpleIcon icon={minus} iconWidth={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <RigoButton text="Tambah Keranjang" inv={true} icon={false} onClick={() => handleAdd(itemId)} />
                                )}
                            </div>
                            <Bar iconL={Image} title={item.namaBarang + " " + item.variant} desc={item.harga + " coin"} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}