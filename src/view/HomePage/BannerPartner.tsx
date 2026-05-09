import HomeBanner from "../../assets/webP/HomeImage.webp"
import PartnerBanner from "../../components/PartnerBanner"
import PartnerBannerTablet from "../../assets/webP/partnerImage.webp"
export default function BannerPartner() {
    return (
        <div className="mt-30.5 mb-56">
            <div className="object-cover">
                <div className="bg-diagonal-line w-full absolute left-0 h-101.75 border border-border-default" />
                <img src={HomeBanner} alt="banner" className="h-101.75 w-full object-cover object-top relative z-10 top-5 md:hidden" />
                <img src={PartnerBannerTablet} alt="banner" className="h-101.75 w-full object-cover object-top relative z-10 top-10 hidden md:flex" />
            </div>
            <div className="relative z-20"> 
                <PartnerBanner />
            </div>
        </div>
    )
}