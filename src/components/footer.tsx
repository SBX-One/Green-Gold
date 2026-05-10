import logo from "../assets/svg/CompanyLogo.svg"
import YTlogo from "../assets/svg/logo-yt.svg"
import IGlogo from "../assets/svg/logo-ig.svg"
import INlogo from "../assets/svg/logo-in.svg"

import Seperator from "./seperator"

export default function Footer() {
    const logoList = [YTlogo, IGlogo, INlogo]

    function linkComponent({ link, title }: { link: string; title: string }) {
        return (
            <div>
                <div className="flex flex-row justify-between">
                    <a href={link} className="w-35">
                        {title}
                    </a>
                </div>
            </div>
        )
    }

    const linkList = [
        {
            link: "#",
            title: "Our Story"
        },
        {
            link: "#",
            title: "Features"
        },
        {
            link: "#",
            title: "For Companies"
        },
        {
            link: "#",
            title: "For Individuals"
        }
    ]
    const linkList2 = [
        {
            link: "#",
            title: "Movement"
        },
        {
            link: "#",
            title: "Blog"
        },
        {
            link: "#",
            title: "FAQ"
        },
        {
            link: "#",
            title: "Terms of Service"
        }
    ]

    return (
        <div>
            <div className="mb-15">
                <Seperator height={"h-12.5 md:h-25"} />
            </div>

            <div className="desktop:flex desktop:justify-between"> 
                <div className="pb-10 border-b-2 desktop:border-0 flex flex-row justify-between  border-border-default mb-16 desktop:flex-col desktop:gap-14">
                    <img src={logo} alt="Company Logo" className="relative md:w-57.75 desktop:h-6 desktop:w-fit" />
                    <p className="hidden md:block sm-default text-right w-80.5 text-text-placeholder desktop:text-left">GRIGO adalah platform ekonomi sirkular yang membantu mengelola sampah menjadi saldo belanja.</p>
                </div>

                <div className="label-underline grid grid-cols-2 text-text-body justify-between">
                    {linkList.map((link, i) => (
                        <div key={i} className="mb-5">
                            {linkComponent(link)}
                        </div>
                    ))}
                    {linkList2.map((link, i) => (
                        <div key={i} className="mb-5">
                            {linkComponent(link)}
                        </div>
                    ))}
                    <div className="mt-8 flex flex-row flex-wrap justify-between">
                    </div>
                </div>
            </div>

            <div className="border-t-2 border-border-default pt-10 pb-15 desktop:flex-row-reverse desktop:justify-between desktop:flex">
                <div className="flex flex-row gap-3 mb-5 items-center">
                    <p className="label-default text-text-body mr-19.5 hidden desktop:block">Connected with Grigo</p>
                    {logoList.map((logo, i) => (
                        <img src={logo} alt={`Logo ${i + 1}`} className="p-2.5 rounded-full border-2 border-border-default" />
                    ))}
                </div>
                <h1 className="xs-default text-text-placeholder desktop:w-122">©2020 Duitin is trademark of PT Tjatra Yasa Indonesia. Registered in the Directorate General of Intellectual Property of the Republic of Indonesia</h1>
            </div>
        </div>
    )
}