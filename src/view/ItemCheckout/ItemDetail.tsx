import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTrash } from "../../context/TrashContext";
import { getProductionImageMap } from "../../type/useProductImage";
import SimplePill from "../../components/common/SimplePill";
import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import cart from "../../assets/svg/shopping-cart-green.svg"
import RigoButton from "../../components/ui/button/RigoButton";
import plus from "../../assets/svg/plus.svg";
import minus from "../../assets/svg/minus.svg";
import { useNavigate } from "react-router-dom";

export default function ItemDetail() {
    const { productName } = useParams<{ productName: string; productId: string }>();
    const { selectedProduct, setItemNum, setItemVariant, itemNum } = useTrash();
    const imageMap = getProductionImageMap();
    const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
    const [isButtonClick, setIsButtonClick] = useState<boolean>(false);
    const navigate = useNavigate();

    const itemNumRef = useRef(itemNum);
    const isButtonClickRef = useRef(isButtonClick);
    const selectedVariantRef = useRef(selectedVariant);
    const hasChangedRef = useRef(false);

    useEffect(() => { itemNumRef.current = itemNum }, [itemNum]);
    useEffect(() => { isButtonClickRef.current = isButtonClick }, [isButtonClick]);
    useEffect(() => { selectedVariantRef.current = selectedVariant }, [selectedVariant]);

    const productImage = selectedProduct
        ? imageMap[selectedProduct.img] ?? '/placeholder.webp'
        : '/placeholder.webp';

    useEffect(() => {
        if (selectedProduct?.variant && selectedProduct.variant.length > 0) {
            setSelectedVariant(selectedProduct.variant[0]);
        }
    }, [selectedProduct]);

    useEffect(() => {
        if (!selectedProduct) return;

        fetch("http://localhost:3001/api/keranjang")
            .then(res => res.json())
            .then((data: { id: number, jumlah: number }[]) => {
                const existing = data.find(item => item.id === selectedProduct.id);
                if (existing) {
                    setItemNum(existing.jumlah);
                    setIsButtonClick(true);
                } else {
                    setItemNum(0);
                    setIsButtonClick(false);
                }
                hasChangedRef.current = false;
            })
            .catch(err => console.error("Gagal load keranjang:", err));
    }, [selectedProduct]);

    useEffect(() => {
        return () => {
            const jumlah = itemNumRef.current;
            const sudahDitambah = isButtonClickRef.current;
            const variant = selectedVariantRef.current;
            const adaPerubahan = hasChangedRef.current;

            if (!sudahDitambah || !selectedProduct || jumlah <= 0 || !adaPerubahan) return;

            fetch("http://localhost:3001/api/keranjang", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "id": selectedProduct.id,
                    "namaBarang": selectedProduct.title,
                    "variant": variant,
                    "harga": selectedProduct.harga,
                    "jumlah": jumlah
                })
            }).catch(err => console.error("Gagal menyimpan keranjang:", err));
        };
    }, [selectedProduct]);

    function handleAdd() {
        setIsButtonClick(true);
        setItemNum((prev: number) => prev + 1);
        hasChangedRef.current = true; 
    }

    function handleSubtract() {
        setItemNum((prev: number) => prev - 1);
        hasChangedRef.current = true;
        if (itemNum === 1) {
            setIsButtonClick(false);
        }
    }

    return (
        <div className="flex flex-col">
            <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-col h-full">
                    <div className="flex justify-center">
                        <img src={productImage} alt={productName} className="h-60.5 object-contain" />
                    </div>

                    <div className="flex flex-row gap-3 overflow-auto -mx-5 pl-5 mb-5">
                        {selectedProduct?.variant.map((item, i) => (
                            <div key={i}>
                                <SimplePill
                                    text={item}
                                    isSelected={selectedVariant === item}
                                    onClick={() => {
                                        setSelectedVariant(item);
                                        setItemVariant(item);
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="border-2 border-border-default p-5 rounded-2xl flex flex-col flex-1">
                        <div className="mb-3 flex flex-col gap-3">
                            <h1 className="text-text-heading lg-semibold">
                                {selectedProduct?.title || productName?.replace(/\+/g, ' ')}
                            </h1>
                            <p className="text-text-heading md-semibold">
                                Rp. {selectedProduct?.harga.toLocaleString('id-ID') || '0'}
                            </p>
                        </div>
                        <p className="text-text-body mb-auto xs-default">{selectedProduct?.desc}</p>

                        <div className="flex flex-row gap-3 w-full mt-18">
                            <div className="w-fit" onClick={() => navigate('/Keranjang')}>
                                <SimpleIcon icon={cart} iconWidth={16} />
                            </div>
                            <div className="flex flex-1 items-center">
                                {isButtonClick ? (
                                    <div className="flex flex-1 flex-row-reverse justify-between items-center">
                                        <button onClick={handleAdd}>
                                            <SimpleIcon icon={plus} iconWidth={16} />
                                        </button>
                                        <p className="text-text-body">{itemNum}</p>
                                        <button onClick={handleSubtract}>
                                            <SimpleIcon icon={minus} iconWidth={16} />
                                        </button>
                                    </div>
                                ) : (
                                    <RigoButton
                                        text="Tambah Keranjang"
                                        inv={true}
                                        icon={false}
                                        onClick={handleAdd}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}