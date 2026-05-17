import map from "../../assets/webP/image_map.webp"
import scan from "../../assets/webP/image_scan.webp"
import clean from "../../assets/webP/image_clean_your_trash.webp"
import { useNavigate } from "react-router-dom"
import LogoPill from "../../components/common/LogoPill";
import Search from "../../components/common/Search";
import setting2 from "../../assets/svg/settings-2.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";

export default function Bantuan() {
    const navigate = useNavigate();
    const BantuanList = [
        {
            image : map,
            text: "Clean your trash",
        },
        {
            image : scan,
            text: "Clean your trash",
            onclick: () => navigate('/ScanYourTrash')
        },
        {
            image : clean,
            text: "Clean your trash"
        },
    ]

    return (
        <div className="mt-10 pb-10 border-b-2 border-border-default overflow-hidden w-screen left-0 relative ml-[calc(50%-50vw)] px-5 md:px-10">
            <h1 className="sm-semibold text-text-body mb-4 md:text-center">Bantuan & Panduan</h1>

            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory justify-center scrollbar-hide snap-always gap-4 -scroll-pl-5 ">
                {BantuanList.map((item, i) => (
                    <div onClick={item.onclick} key={i} className="shrink-0 snap-center">
                        <img src={item.image} alt={item.text} className="h-31.5 rounded-2xl mb-2" />
                        <p className="text-text-label">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="px-28 hidden md:flex flex-col items-center mt-16">
                <LogoPill text="Grigo Foundation" />
                <div className="text-center mt-4">
                    <h1 className="h1-heading text-text-heading">Mulai Berbelanja Dengan Poin Hasil Sampah</h1>
                    <p className="sm-default text-text-placeholder px-5 mt-6">Ekosistem sirkular pertama yang menjemput sampah di depan pintu Anda dan mengubahnya menjadi poin belanja di E-commerce eksklusif.</p>
                </div>
            </div>
            <div className="flex flex-row gap-5 mt-20">
                <Search />
                <SimpleIcon icon={setting2} iconWidth={16} text="Filter" textClass="text-text-label label-semibold" />
            </div>
        </div>
    )
}