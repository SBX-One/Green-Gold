import type { SimpleIconProps } from "../../../helper/type"

export default function SimpleIcon({ icon, iconWidth, border = true, roundede = 16, text, textClass }: SimpleIconProps) {
    return (
        <div className={`flex flex-row items-center gap-2 p-3.5 ${border ? "border-2 border-border-default" : ""} w-fit`} style={{ borderRadius: `${roundede}px` }}>
            <img src={icon} alt="icon" style={{ width: iconWidth }} />
            {text && (
                <h1 className={`whitespace-nowrap ${textClass}`}>{text}</h1>
            )}
        </div>
    )
}