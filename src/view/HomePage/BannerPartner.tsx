import HomeBanner from "../../assets/webP/HomeImage.webp"
import PartnerBanner from "../../components/common/PartnerBanner"
import PartnerBannerTablet from "../../assets/webP/partnerImage.webp"
export default function BannerPartner() {
    return (
        <div className="mt-30.5 desktop:mt-42.75 mb-25">
            <div className="object-cover bg-diagonal-line w-screen ml-[calc(50%-50vw)] px-10">
                <img src={HomeBanner} alt="banner" className="h-101.75 w-full object-cover object-top relative z-10 top-5 md:hidden" />
                <img src={PartnerBannerTablet} alt="banner" className="h-101.75 desktop:h-137.5 w-full object-cover object-top relative z-10 top-10 hidden md:flex" />
            </div>
            <div className="relative z-20 "> 
                <PartnerBanner />
            </div>
        </div>
    )
}