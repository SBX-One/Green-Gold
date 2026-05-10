import Logo from "../assets/svg/CompanyLogo.svg"
import Burger from "../assets/svg/Burger.svg"
import DropDown from "./DropDown"
import chevron from "../assets/svg/chevron-right.svg"
import ListData from "./ListData"

import {useState} from "react"
import RigoButton from "./RigoButton"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="bg-neutral-white left-0 w-screen ml-[calc(50%-50vw)] py-10 desktop:py-7.5 md:py-14 px-5 md:px-15 xl:px-30 flex justify-between border-b-2 border-[#DEDEDE] items-center">
                <img src={Logo} alt="Company Logo" />
                <img src={isMenuOpen ? chevron : Burger} onClick={() => setIsMenuOpen(!isMenuOpen)} alt="menu" className={`p-4.5 rounded-full border-border-default border desktop:hidden ${isMenuOpen ? 'rotate-90' : ''}`} />
                <div className="desktop:flex hidden gap-4">
                    {ListData.map((link, index) => (
                        <a key={index} href={link.links} className="label-default text-foreground py-1.5 px-3">
                            {link.title}
                        </a>
                    ))}
                </div>
                <div className="hidden desktop:block">
                    <RigoButton text="Daftar" inv={true} icon={false} />
                </div>
            </div>
            <div>
                {isMenuOpen && (
                    <DropDown />
                )}
            </div>
        </div>
    )
}