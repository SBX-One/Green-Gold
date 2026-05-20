import Logo from "../../assets/svg/CompanyLogo.svg"
import Burger from "../../assets/svg/Burger.svg"
import DropDown from "../navigation/DropDown"
import chevron from "../../assets/svg/chevron-right.svg"
import cart from "../../assets/svg/shopping-cart.svg"
import search from "../../assets/svg/search.svg"
import map from "../../assets/svg/map.svg"
import setting from "../../assets/svg/settings.svg"
import mainLogo from "../../assets/svg/LogoMain.svg"

import {useState} from "react"
import type { NavbarProps } from "../../helper/type"
import { useNavigate } from "react-router-dom"
import SimpleIcon from "../ui/icons/SimpleIcon"

export default function Navbar({ mode }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const HomeModeList = [
        {
            title: "Home",
            links: "/home"
        },
        {
            title: "Kamus",
            links: "/Kamus"
        },
        {
            title: "Shop",
            links: "/Shop"
        }
    ]

    return (
        <div className="sticky top-0 z-200">
            <div className={`bg-neutral-white left-0 w-screen ml-[calc(50%-50vw)] py-7 desktop:py-7.5 md:py-14 px-10 md:px-15 xl:px-30 flex justify-between border-b-2 border-[#DEDEDE] items-center ${mode === 'home' ? 'max-h-21' : ''}`}>
                <img src={Logo} alt="Company Logo" className={`${mode === "home" ? "pr-14 desktop:border-r-2 border-border-default hidden md:block" : ""}`} onClick={() => navigate('/Home')} />
                <img src={mainLogo} alt="Company Logo" className={`${mode === "home" ? "pr-14 md:hidden" : "hidden"}`} onClick={() => navigate('/Home')} />
                <div className="flex flex-row desktop:flex-row-reverse desktop:w-full items-center gap-6">
                    <div className="flex flex-row desktop:flex-row-reverse items-center gap-6 desktop:mr-6">
                        <img onClick={() => navigate('/Keranjang')} src={cart} alt="Cart" className={`w-4 h-4 relative right-3 ${mode === 'home' ? 'block' : 'hidden'}`} />
                        <img src={search} alt="" className="p-3.5 hidden md:block" />
                    </div>
                    <img src={isMenuOpen ? chevron : Burger} onClick={() => setIsMenuOpen(!isMenuOpen)} alt="menu" className={`p-3.5 ${mode === 'home' ? 'rounded-2xl' : 'rounded-full'} border-border-default border desktop:hidden ${isMenuOpen ? 'rotate-90' : ''}`} />
                    <div className="desktop:flex hidden gap-4 mr-auto pl-14">
                        {HomeModeList.map((link, index) => (
                            <a key={index} href={link.links} className="label-default text-foreground py-1.5 px-3">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="hidden desktop:flex flex-row gap-6">
                    <SimpleIcon icon={map} iconWidth={16} text="Denpasar Barat" textClass="text-text-action label-semibold pr-3.5" />
                    <SimpleIcon icon={setting} iconWidth={16} text="s" textClass="label-semibold -pr-3.5" />
                </div>
            </div>
            <div>
                {isMenuOpen && mode === 'home' && (
                    <div>
                        <div className="border-2 absolute bg-neutral-white rounded-3xl right-0 border-border-default w-2/3 p-5 flex flex-col gap-3">
                            {HomeModeList.map((item, i) => (
                                <div key={i} onClick={() => navigate(item.links)}>
                                    <div className="xs-leading-normal text-text-label hover:text-text-action px-5 py-3.5 transition-all duration-100 hover:border-2 border-border-default rounded-2xl">
                                        <h1 className="">{item.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div>
                {isMenuOpen && mode !== 'home' && (
                    <div className="bg-red-500">
                        <DropDown />
                    </div>
                )}
            </div>
        </div>
    )
}