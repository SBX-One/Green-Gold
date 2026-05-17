import logo from "../../assets/svg/LogoMain.svg"
import type { logoPillProps } from "../../type/type"

export default function LogoPill ({ text }: logoPillProps) {
    return (
        <div className="flex gap-2.5 bg-RIGO-secondary w-fit py-3 pr-5 pl-4 rounded-3xl">
            <img src={logo} alt="logo" />
            <p className="sm-semibold text-text-label whitespace-nowrap">{text}</p>
        </div>
    )
}