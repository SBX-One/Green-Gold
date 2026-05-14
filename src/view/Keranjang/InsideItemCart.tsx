import Bar from "../../components/common/Bar";
import house from "../../assets/svg/house.svg"
import map from "../../assets/svg/map.svg"
import { useTrash } from "../../context/TrashContext";

export default function InsideItemCart() {
    const { selectedProduct } = useTrash();

    console.log(selectedProduct)

    return ( 
        <div className="px-5 mt-5">
            <Bar iconL={house} iconR={map} title="Jl. Pulau Ambon No.8" desc="Denpasae Barat, Bali" />

            <div>
                <h1 className="sm-semibold text-text-label">Sampah Umum</h1>
            </div>
        </div>
    )
}