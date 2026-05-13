import chevron from "../../assets/svg/fi_chevron-down.svg"
import SimplePill from "../common/SimplePill"
import { useTrash } from "../../context/TrashContext"
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "../../type/type";

export default function Menu({ back }: MenuProps) {
    const { totalHarga } = useTrash();
    const navigate = useNavigate();
    
    return (
        <div onClick={() => navigate(back)} className="flex flex-row justify-between pb-5 border-b-2 border-border-default w-screen left-0 relative ml-[calc(50%-50vw)] px-5">
            <img src={chevron} alt="back" className="p-3.5 border-2 border-border-default rounded-2xl rotate-90" />
            <SimplePill text={`Total : Rp. ${totalHarga.toLocaleString('id-ID')}`} />
        </div>
    )
}