import map from "../../assets/webP/image_map.webp"
import scan from "../../assets/webP/image_scan.webp"
import clean from "../../assets/webP/image_clean_your_trash.webp"
import { useNavigate } from "react-router-dom"

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
        <div className="mt-10 pb-10 border-b-2 border-border-default overflow-hidden w-screen left-0 relative ml-[calc(50%-50vw)] px-5">
            <h1 className="sm-semibold text-text-body mb-4">Bantuan & Panduan</h1>

            <div className="flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-hide snap-always gap-4 -scroll-pl-5 ">
                {BantuanList.map((item, i) => (
                    <div onClick={item.onclick} key={i} className="shrink-0 snap-center">
                        <img src={item.image} alt={item.text} className="h-31.5 rounded-2xl mb-2" />
                        <p className="text-text-label">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}