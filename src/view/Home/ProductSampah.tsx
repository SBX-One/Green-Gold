import products from "../../data/ProductData.json"
import ProductCard from "../../components/common/ProductCard"
import plus from "../../assets/svg/plus.svg";
import { useNavigate } from "react-router-dom";
import { useTrash } from "../../context/TrashContext";
import SimpleButton from "../../components/ui/button/SimpleButton";
import RigoButton from "../../components/ui/button/RigoButton";

export default function ProdctList() {
    const navigate = useNavigate();
    const { setSelectedProduct } = useTrash();

    const handleProductClick = (product: typeof products[0]) => {
        // Simpan product ke context
        setSelectedProduct(product);
        // Navigate ke halaman ItemCheckout dengan product name dan id di URL
        navigate(`/Checkout+Sampah/${product.title}/${product.id}`);
    };

    return (
        <div className="mb-32.5">
            <div className="grid grid-cols-2 desktop:grid-cols-4 justify-between gap-y-10 gap-x-5 relative">
                {products.slice(0, 4).map(product => (
                    <div key={product.id} className="relative cursor-pointer flex flex-col w-full">
                        <button className="p-2.5 md:hidden border-2 border-border-default rounded-full absolute top-8 right-3 bg-surface-page z-10">
                            <img src={plus} alt="add" />
                        </button>
                        
                        <div onClick={() => handleProductClick(product)} className="flex-1 w-full">
                            <ProductCard {...product} />
                        </div>
                        
                        <div className="hidden md:block">
                            <SimpleButton text="Tambah Keranjang" />
                        </div>
                    </div>
                ))}
            </div>
                <div className="flex w-full mt-10">
                    <RigoButton text="View more" inv={true} fullWidth={true} />
                </div>
        </div>
    )
}