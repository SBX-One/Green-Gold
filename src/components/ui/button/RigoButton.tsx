import type { RIGOBTNPROPS } from "../../../type/type"

export default function RigoButton({ inv, text, icon = true, onClick }: RIGOBTNPROPS) {
    return (
        <div onClick={onClick} className={`${inv ? "bg-surface-primary border border-border-action" : "bg-white border border-border-default"} w-full md:w-45 h-11 md:h-14 flex items-center justify-between px-6 rounded-2xl`}>
            <h1 className={`w-fit h-fit items-center font-bold label-semibold ${inv ? "text-neutral-white" : "text-text-action"}`}>{text}</h1>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`my-3 ${icon ? "block" : "hidden"}`}>
                <path d="M7.5 15L12.5 10L7.5 5" stroke={`${inv ? "#FFFFFF" : "#36A16B"}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}