import products from "../../data/ProductData.json"
import ProductCard from "../../components/common/ProductCard"
import plus from "../../assets/svg/plus.svg";
import { useNavigate } from "react-router-dom";
import { useTrash } from "../../context/TrashContext";

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
            <div className="flex flex-row flex-wrap justify-between gap-y-10 relative">
                {products.map(product => (
                    <div key={product.id} className="relative cursor-pointer" onClick={() => handleProductClick(product)}>
                        <button className="p-2.5 border-2 border-border-default rounded-full absolute top-8 right-3 bg-surface-page z-10"><img src={plus} alt="add" /></button>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    )
}