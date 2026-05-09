import Partner1 from "../assets/svg/Partner1.svg"
import Partner2 from "../assets/svg/Partner2.svg"
import Partner3 from "../assets/svg/Partner3.svg"
import Partner4 from "../assets/svg/Partner4.svg"

export default function PartnerBanner() {
    const PartnerList = [
        Partner1,
        Partner2,
        Partner3,
        Partner4
    ]

    return (
        <div className="h-36 w-screen left-0 ml-[calc(50%-50vw)] bg-nneutral-white border-y-2 relative z-20 bg-neutral-white border-border-default flex items-center justify-between">
            {PartnerList.map((Partner, i) => (
                <div>
                    <img src={Partner} alt="partner" key={i} />
                </div>
            ))}
        </div>
    )
}