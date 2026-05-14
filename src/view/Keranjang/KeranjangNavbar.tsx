import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import chevron from "../../assets/svg/chevron-right.svg"
import settings from "../../assets/svg/settings.svg"

export default function NavbarKeranjang() {
    return (
        <div className="flex flex-row justify-between items-center p-5 border-b-2 border-border-default">
            <div className="rotate-180 w-fit">
                <SimpleIcon icon={chevron} iconWidth={16} />
            </div>
            <h1 className="md-semibold text-text-heading">Keranjang</h1>
            <SimpleIcon icon={settings} iconWidth={16} />
        </div>
    )
}