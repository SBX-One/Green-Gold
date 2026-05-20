import { useState } from "react"
import type { RigoAccordianProps } from "../../helper/type"
import chevronDown from "../../assets/svg/fi_chevron-down.svg"

export default function RigoAccordian({ title, content }: RigoAccordianProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button className="rounded-2xl text-text-heading text-left border-2 border-border-default label-semibold px-6 py-2 flex flex-col w-full" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex flex-row justify-between py-4.25">
                    {title}
                    <img src={chevronDown} alt="Chevron Down" className={`${isOpen ? 'rotate-180' : ''} transition-all duration-300`} />
                </div>
            {isOpen && (
                <div className="text-text-heading pb-4">
                    <p className="text-sm text-text-label">{content}</p>
                </div>
            )}
            </button>
        </div>
    )
}