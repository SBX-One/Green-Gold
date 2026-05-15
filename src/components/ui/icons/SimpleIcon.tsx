import type { SimpleIconProps } from "../../../type/type"

export default function SimpleIcon({ icon, iconWidth, border = true, roundede = 16 }: SimpleIconProps) {
    return (
        <div className={`p-3.5 ${border ? "border-2 border-border-default" : ""} w-fit`} style={{ borderRadius: `${roundede}px` }}>
            <img src={icon} alt="icon" style={{ width: iconWidth }} />
        </div>
    )
}