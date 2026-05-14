import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import chevron from "../../assets/svg/chevron-right.svg"
import settings from "../../assets/svg/settings.svg"
import { useNavigate } from "react-router-dom";

export default function NavbarKeranjang() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-row justify-between items-center p-5 border-b-2 border-border-default">
            <div className="rotate-180 w-fit" onClick={() => navigate(-1)}>
                <SimpleIcon icon={chevron} iconWidth={16} />
            </div>
            <h1 className="md-semibold text-text-heading">Keranjang</h1>
            <SimpleIcon icon={settings} iconWidth={16} />
        </div>
    )
}