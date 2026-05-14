import { useParams } from "react-router-dom";
import Menu from "../components/layout/Menu";
import { useTrash } from "../context/TrashContext";
import { getProductionImageMap } from "../type/useProductImage";

export default function ItemCheckout() {
    const { productName, productId } = useParams<{ productName: string; productId: string }>();
    const { selectedProduct } = useTrash();
    const imageMap = getProductionImageMap();

    // Get product image
    const productImage = selectedProduct ? imageMap[selectedProduct.img] ?? '/placeholder.webp' : '/placeholder.webp';

    return (
        <div>
            <Menu back="/Home" />
            <div className="p-5">
                <div className="border-2 border-border-default rounded-lg p-5">
                    {/* Product Image */}
                    <div className="bg-surface-default w-full h-80 flex items-center justify-center rounded-sm border-2 border-border-default mb-5">
                        <img src={productImage} alt={productName} className="h-72 object-contain" />
                    </div>

                    {/* Product Info */}
                    <div className="mb-5">
                        <h1 className="text-text-heading lg-semibold mb-2">{selectedProduct?.title || productName?.replace(/\+/g, ' ')}</h1>
                        <p className="text-text-placeholder xs-default mb-3">ID Produk: {productId}</p>
                        <p className="text-text-heading md-semibold">
                            Rp. {selectedProduct?.harga.toLocaleString('id-ID') || '0'}
                        </p>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-button-primary text-text-page py-3 rounded-lg font-semibold hover:bg-button-disabled transition-colors">
                        Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>
    )
}