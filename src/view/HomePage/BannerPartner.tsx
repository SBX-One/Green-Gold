import HomeBanner from "../../assets/webP/HomeImage.webp"
import PartnerBanner from "../../components/PartnerBanner"

export default function BannerPartner() {
    return (
        <div className="mt-30.5 mb-56">
            <div>
                <div className="bg-diagonal-line w-full absolute left-0 h-101.75 border border-border-default" />
                <img src={HomeBanner} alt="banner" className="h-101.75 w-full object-cover object-top relative z-10 top-5" />
            </div>
            <PartnerBanner />
        </div>
    )
}