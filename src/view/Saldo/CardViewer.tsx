import bca from "../../assets/svg/fi_Bca.svg";
import dana from "../../assets/svg/fi_Dana.svg";
import gopay from "../../assets/svg/fi_Gopay.svg";
import ovo from "../../assets/svg/fi_Ovo.svg";
import shoppe from "../../assets/svg/fi_Shopee.svg";
import LogoCard from "../../components/common/LogoCard";
import { useNavigate } from "react-router-dom";
import { useTrash } from "../../context/TrashContext";

export default function CardViewer() {
    const navigate = useNavigate();
    const { setSelectedMethod } = useTrash();
    
    const MethodList = [
        {
            logo: bca,
            title: "bca"
        },
        {
            logo: dana,
            title: "dana"
        },
        {
            logo: gopay,
            title: "gopay"
        },
        {
            logo: ovo,
            title: "ovo"
        },
        {
            logo: shoppe,
            title: "shoppe"
        },
    ]

    return (
        <div className="px-5 mt-10">
            <h2 className="text-text-heading sm-semibold">Metode Transfer</h2>
            <div className="flex flex-wrap justify-betweena gap-y-5">
                {MethodList.map((item, i) => (
                    <div key={i} onClick={() => {setSelectedMethod(item.logo); navigate(`/Saldo/${item.title}`)}} >
                        <LogoCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    )
}