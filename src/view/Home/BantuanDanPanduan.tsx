import map from "../../assets/webP/image_map.webp"
import scan from "../../assets/webP/image_scan.webp"
import clean from "../../assets/webP/image_clean_your_trash.webp"
import { useNavigate } from "react-router-dom"
import LogoPill from "../../components/common/LogoPill";
import Search from "../../components/common/Search";
import setting2 from "../../assets/svg/settings-2.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import ArrowIcon from "../../components/ui/icons/ArrowIcon";

import mapDesk from "../../assets/webP/image_map_webp.webp"
import cleanDesk from "../../assets/webP/image_clean_your_trash._deskwebp.webp"
import scanDesk from "../../assets/webP/image_scan_desk.webp"

import CustomClassFunction from "../../function/CustomClassFunction";

export default function Bantuan() {
    const navigate = useNavigate();
    const BantuanList = [
        {
            image : map,
            imageDesk: mapDesk,
            text: "Clean your trash",
            desc: "Plastic, carton, paper, metal, glass... Anything can be scanned and sorted",
            buttonText: "Set Location"
        },
        {
            image : scan,
            imageDesk: scanDesk,
            text: "Clean your trash",
            onclick: () => navigate('/ScanYourTrash'),
            desc: "If your item is a partnered item and has a barcode, scan it.",
            buttonText: "Scan Now"
        },
        {
            image : clean,
            imageDesk: cleanDesk,
            text: "Clean your trash",
            desc: "Let our staff pick your trash based on where you lived.",
            buttonText: "Set Location"
        },
    ]

    CustomClassFunction({CustomWidth: 1440, CustomClass: "display", divRef:"mainTitle", RemoveCustomClass: "h1-heading"});

    return (
    <div>
        <div className="mt-10 pb-10 border-border-default w-screen left-0 relative ml-[calc(50%-50vw)] px-5 md:px-10">
            <h1 className="sm-semibold text-text-body mb-4 md:text-center desktop:hidden">Bantuan & Panduan</h1>
            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory justify-center scrollbar-hide snap-always gap-4 desktop:hidden">
                {BantuanList.map((item, i) => (
                    <div onClick={item.onclick} key={i} className="shrink-0 snap-center">
                        <img src={item.image} alt={item.text} className="h-31.5 rounded-2xl mb-2" />
                        <p className="text-text-label">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="hidden lg:flex flex-row justify-center gap-4 px-10 -mt-34 relative z-10">
            {BantuanList.map((item, i) => (
                <div key={i} className="w-87 border-2 border-border-default flex flex-col gap-8 rounded-3xl bg-white">
                    <img src={item.imageDesk} alt="" className="h-31.5 w-full object-cover rounded-t-3xl" />
                    <div className="p-6 flex flex-col gap-12">
                        <div className="flex flex-col text-center">
                            <h1 className="lg-semibold text-text-body">{item.text}</h1>
                            <p className="sm-semibold text-text-placeholder">{item.desc}</p>
                        </div>
                        <button className="text-center hover:border-border-action transition-all duration-200 focus:bg-surface-primary focus:outline-0 text-text-action focus:border-0 focus:text-text-on-action bg-neutral-white flex flex-row py-4.5 items-center border-2 border-border-default rounded-2xl gap-2 justify-center">
                            <h1 className="md-semibold w-fit font-bold whitespace-nowrap">{item.buttonText}</h1>
                            <ArrowIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-screen left-0 relative ml-[calc(50%-50vw)] px-5 md:px-10">
            <div className="px-28 hidden md:flex flex-col items-center mt-16">
                <LogoPill text="Grigo Foundation" />
                <div className="text-center mt-4 desktop:max-w-3xl">
                    <h1 id="mainTitle" className="display text-text-heading">Mulai Berbelanja Dengan Poin Hasil Sampah</h1>
                    <p className="sm-default text-text-placeholder px-5 mt-6 desktop:max-w-xl desktop:mx-auto">Ekosistem sirkular pertama yang menjemput sampah di depan pintu Anda dan mengubahnya menjadi poin belanja di E-commerce eksklusif.</p>
                </div>
            </div>
            <div className="flex flex-row gap-5 mt-20">
                <Search />
                <SimpleIcon icon={setting2} iconWidth={16} text="Filter" textClass="text-text-label label-semibold" />
            </div>
        </div>
    </div>
)
}