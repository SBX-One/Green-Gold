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
        <div className="py-10 border border-border-default flex bg-neutral-white absolute w-150 gap-14.5 left-0 object-cover h-24">
            {PartnerList.map((Partner, i) => (
                <div>
                    <img src={Partner} alt="partner" key={i} />
                </div>
            ))}
        </div>
    )
}