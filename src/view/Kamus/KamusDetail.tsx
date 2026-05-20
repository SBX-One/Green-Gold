import SimpleButton from "../../components/ui/button/SimpleButton";
import cart from "../../assets/svg/shopping-cart-green.svg"
import { useNavigate } from "react-router-dom";
import barcode from '../../assets/svg/scan-barcode-green.svg'
import ProductCluster from "../../assets/webP/ProductCluster.webp"
import { useTrash } from "../../context/TrashContext";
import ProductData from "../../data/ProductData.json"
import { getProductionImageMap } from "../../helper/useProductImage";
import MainKamus from "./MainKamus";
import Footer from "../../components/layout/footer";
import setting from "../../assets/svg/settings.svg"
import chevron from "../../assets/svg/chevron-right.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";

export default function KamusDetail() {
    const navigate = useNavigate();
    const { chosenKamus, setSelectedProduct } = useTrash();
    const imageMap = getProductionImageMap();

    const handleProductClick = (productId: number) => {
        const product = ProductData.find(p => p.id === productId);
        if (product) {
            setSelectedProduct({
                id: product.id,
                title: product.title,
                harga: product.harga,
                img: product.img,
                desc: product.desc,
                variant: product.variant
            });
            navigate(`/ItemCheckout/${productId}`);
        }
    }

    const getProductFromKerjasama = (kerjasamaId?: number) => {
        if (!kerjasamaId) return null;
        return ProductData.find(p => p.id === kerjasamaId);
    }

    return (
        <div className="pt-5">
            <div className="relative flex flex-row items-center border-b-2 border-border-default">
                <div className="md:flex flex-row gap-3 items-center">
                    <div className="rotate-180 w-fit py-5 px-10" onClick={() => navigate(-1)}> 
                        <SimpleIcon icon={chevron} iconWidth={16} />
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-3">
                        <h1 className="sm-semibold text-text-placeholder">Home</h1>
                        <img src={chevron} alt="" />
                        <h1 className="sm-semibold text-text-placeholder">Home</h1>
                        <img src={chevron} alt="" />
                        <h1 className="sm-semibold text-text-action">Home</h1>
                    </div>
                </div>
                <h1 className="hidden lg-semibold text-text-heading md:hidden desktop:flex h-fit w-fit mx-auto">Kamus Sampah</h1>
                <div className="rotate-180 w-fit py-5 px-10 ml-auto desktop:ml-0"> 
                    <SimpleIcon icon={setting} iconWidth={16} />
                </div>
            </div>
            <div className="bg-diagonal-line px-5 pt-4 relative overflow-hidden max-h-75 desktop:max-h-118">
                <div className="flex flex-row w-full flex-1 desktop:max-w-85.5 mx-auto gap-3">
                    <SimpleButton icon={barcode} text="Scan" onClick={() => navigate('/Home')} />
                    <SimpleButton icon={cart} text="Shop" onClick={() => navigate('/Home')} />
                </div>
                <img src={ProductCluster} alt="image" className="h-68 desktop:h-105 object-cover relative top-5 mx-auto desktop:top-32" />
            </div>
            
            <div className="p-5 mb-8 max-w-282.5 mx-auto">
                <div className="pb-5 border-b-2 border-border-default">
                    <h2 className="h2-heading text-text-heading mb-4">{chosenKamus?.title}</h2>
                    <p className="xs-default text-text-placeholder">{chosenKamus?.kamusDetail.map((item) => item.mainDesc)}</p>
                </div>
                
                {chosenKamus?.kamusDetail && chosenKamus.kamusDetail.length > 0 && (
                    <div className="mt-5 flex flex-col gap-4">
                        {chosenKamus.kamusDetail.map((detail, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <div className="flex flex-col gap-10 mb-20">
                                    <div>
                                        <h3 className="xs-default text-text-placeholder mb-3">Merek Produk</h3>
                                        <p className="xs-default text-text-body">{detail.merek}</p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="xs-default text-text-placeholder mb-3">Potensi Daur Ulang</h3>
                                        <p className="xs-default text-text-body">{detail.potensi}</p>
                                    </div>
                                </div>
                                
                                {detail.kerjasama && detail.kerjasama.length > 0 && (
                                    <div>
                                        <h3 className="font-bold text-text-heading mb-4">Produk Kerja sama: </h3>
                                        <div className="flex flex-row gap-4 overflow-x-auto pb-10 border-b-2 border-border-default mb-20">
                                            {detail.kerjasama.map((kerjasama, kdx) => {
                                                const product = getProductFromKerjasama(kerjasama.productId);
                                                if (!product) return null;
                                                
                                                const imageSrc = imageMap[product.img] ?? '/placeholder.webp';
                                                return (
                                                    <div key={kdx} onClick={() => handleProductClick(product.id)} className="flex flex-col gap-5 min-w-max cursor-pointer">
                                                        <div className="bg-surface-default px-9.25 py-7.5 flex items-center justify-center rounded-sm border-2 border-border-default transition-all duration-200 hover:bg-surface-disabled">
                                                            <img src={imageSrc} alt={product.title} className="h-35.25 md:h-63.25 object-cover" />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="px-5 max-w-282.5 mx-auto">
                <MainKamus searchBar={false} />
                <Footer />
            </div>
        </div>
    )
}