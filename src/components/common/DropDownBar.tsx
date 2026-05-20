import type { DropDownBarProps } from "../../helper/type";

export default function DropDownBar({ icon, title, onclick }: DropDownBarProps) {
    return (
        <div onClick={onclick} className="py-4 px-5 border-2 border-border-default rounded-2xl flex flex-row justify-between">
            <h1 className="md-semibold text-text-action">{title}</h1>
            <img src={icon} alt="" />
        </div>
    )
}