import chevron from "../../assets/svg/fi_chevron-down.svg"
import SimplePill from "../common/SimplePill"
import { useTrash } from "../../context/TrashContext"
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "../../type/type";
import SimpleIcon from "../ui/icons/SimpleIcon";
import setting from "../../assets/svg/settings.svg"
import RigoButton from "../ui/button/RigoButton";

export default function Menu({ back, mode, onclick, disabledd, btn = true }: MenuProps) {
    const { totalHarga, selectedTrash } = useTrash();
    const navigate = useNavigate();
    
    // Determine if the button should be disabled
    const isButtonDisabled = disabledd !== undefined ? disabledd : selectedTrash.length === 0;
    
    return (
        <div className="flex flex-row justify-between p-5 md:p-10 border-b-2 border-border-default w-screen left-0 relative ml-[calc(50%-50vw)] px-5">
            <img 
                src={chevron} 
                onClick={() => {
                    if (typeof back === 'number') {
                        navigate(back);
                    } else {
                        navigate(back);
                    }
                }} 
                alt="back" 
                className="p-3.5 border-2 border-border-default rounded-2xl rotate-90 cursor-pointer" 
            />
            <div className="flex flex-row gap-3 items-center">
                {mode === "setting" ? (
                    <SimpleIcon icon={setting} iconWidth={16} />
                ) : (
                    mode === "add" ? (
                        <SimplePill text={`Harga : Rp. ${totalHarga.toLocaleString('id-ID')}/kg`} />
                    ):(
                        <SimplePill text={`Total : Rp. ${totalHarga.toLocaleString('id-ID')}`} />
                    )
                )}
                {btn && (
                    <div className="hidden md:block">
                        <RigoButton inv={true} text="Lanjut" onClick={onclick} disabled={isButtonDisabled} />
                    </div>
                )}
            </div>
        </div>
    )
}