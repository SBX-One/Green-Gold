import type { RigoImageCardProps } from "./type"
import ArrowIcon from "./ArrowIcon"

export default function RigoImageCard({ title, date, image, customImageClass }: RigoImageCardProps) {
    return (
        <div className="border-2 border-border-default ring-inset rounded-2xl bg-neutral-white relative z-20">
            <div className="font-medium text-center md:text-left text-text-heading p-6">
                <h1 className="md-bold">{title}</h1>
                <p className="xs-default text-text-placeholder">{date}</p>
            </div>
            <div className="h-52 md:h-66.25 rounded-b-2xl border-t-2 border-border-default bg-surface-default relative overflow-hidden">
                <div className="bg-diagonal-line w-full h-full absolute" />
                <img src={image} alt={title} className={` z-10 relative ${customImageClass || "w-full h-full"}`} />
            </div>
                <button className="object-cover absolute bottom-4 md:h-11 md:top-6 right-4 bg-surface-page text-neutral-white border border-border-default flex flex-row-reverse px-5 py-3.5 gap-2 rounded-2xl hover:bg-neutral-100 transition-colors z-20">
                    <ArrowIcon className="text-icon-default w-4 h-4 rotate-45" />
                    <h1 className="text-text-label xs-semibold">
                        Lihat Demo
                    </h1>
                </button>
        </div>
    )
}