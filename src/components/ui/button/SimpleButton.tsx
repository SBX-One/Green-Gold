import type { SimpleButtonProps } from "../../../helper/type"

export default function SimpleButton({ text, icon, onClick }: SimpleButtonProps) {
    return (
        <div className="w-full">
            <button onClick={onClick} className="flex flex-1 flex-row gap-2 items-center py-3.5 rounded-2xl border-2 border-border-default w-full justify-center bg-neutral-white hover:bg-neutral-100 transition-all duration-200 ">
                {icon && <img src={icon} alt="icon" className="w-4 h-4 mr-2" />}
                <h1 className="leading-normal text-text-action">{text}</h1>
            </button>
        </div>
    )
}