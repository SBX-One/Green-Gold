import type { ProductCardProps } from "../../type/type"
import { getProductionImageMap } from "../../type/useProductImage";

const imageMap = getProductionImageMap();
console.log('image map keys: ', Object.keys(imageMap));
console.log('image prop: ', Image)

export default function ProductCard({ img, title, harga }: ProductCardProps) {
    const src = imageMap[img] ?? '/placeholder.webp';
    const hargaDone = harga.toLocaleString('id-ID');
    return (
        <div className="text-text-body md:min-w-80.5 w-full flex flex-col mt-5">
    
            {/* aspect-square untuk rasio seimbang */}
            <div className="bg-surface-default w-full aspect-square flex items-center justify-center rounded-sm border-2 border-border-default mb-3 transition-all duration-200 hover:bg-surface-disabled">
            {/* pakai h-full w-full object-contain supaya gambar mengisi kotaknya */}
            <img src={src} alt={title} className="h-full w-full object-contain p-3" />
        </div>

    <div className="text-left flex flex-col">
        <p className="sm-semibold text-text-heading">{'Rp.' + hargaDone}</p>
        <h3 className="text-text-placeholder xs-default">{title}</h3>
    </div>
</div>
    )
}