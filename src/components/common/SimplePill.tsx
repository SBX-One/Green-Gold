import type { SimplePillProps } from "../../type/type";

export default function SimplePill({ text, isSelected, onClick }: SimplePillProps) {
    return (
        <div>
            <h1 
                onClick={onClick}
                className={`px-6 py-3.5 xs-semibold rounded-2xl w-fit transition-all duration-100 cursor-pointer ${isSelected ? 'border-2 border-text-action text-text-action bg-surface-default' : 'border-2 border-border-default text-text-label hover:border-border-action-hover'}`}
            >
                {text}
            </h1>
        </div>
    )
}