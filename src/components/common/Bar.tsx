import type { BarProps } from "../../type/type";
import SimpleIcon from "../ui/icons/SimpleIcon";

export default function Bar({ iconL, iconR, title, desc, iconLBorder, iconRBorder }: BarProps) {
    return (
        <div className="w-full bg-neutral-white flex flex-row justify-between rounded-2xl p-5 border-2 border-border-default items-center">
            {iconL && (
                <SimpleIcon icon={iconL} iconWidth={16} border={iconLBorder} />
            )}
            <div className="flex flex-col flex-1 mx-3 truncate text-ellipsis">
                <h1 className="sm-semibold text-text-heading">{title}</h1>
                <p className="text-text-placeholder xs-default">{desc}</p>
            </div>
            {iconR && (
                <SimpleIcon icon={iconR} iconWidth={16} border={iconRBorder} />
            )}
        </div>
    )
}