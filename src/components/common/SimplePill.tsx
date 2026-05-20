import type { SimplePillProps } from "../../helper/type";

export default function SimplePill({ text, isSelected, onClick }: SimplePillProps) {
    return (
        <div className="flex flex-1 w-full">
            <h1 onClick={onClick} className={`w-full text-center px-6 py-3.5 xs-semibold rounded-2xl transition-all duration-100 cursor-pointer ${isSelected ? 'border-2 border-text-action text-text-action bg-surface-default' : 'border-2 border-border-default text-text-label hover:border-border-action-hover'}`}>
                {text}
            </h1>
        </div>
    )
}