import type { SimpleTinyPill } from "../../helper/type";

export default function SimpleTinyPill({ text, icon }: SimpleTinyPill) {
    return (
        <div className="py-2.5 px-5 flex flex-row gap-2 items-center w-fit border-2 border-border-default rounded-2xl bg-neutral-white">
            {typeof icon === "string" ? (
                <img src={icon} alt="icon" />
            ) : (
                icon
            )}
            <h1 className="xs-semibold text-text-label">{text}</h1>
        </div>
    )
}