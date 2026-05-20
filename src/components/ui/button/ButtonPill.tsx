import type { ButtonPillProps } from "../../../helper/type";

export default function ButtonPill({ onclick, text, disabledd }: ButtonPillProps) {
    return (
        <button disabled={disabledd} onClick={onclick} className="border-2 rounded-2xl border-border-default disabled:text-text-disabled disabled:border-border-disabled bg-neutral-white text-text-body disabled:bg-surface-disabled py-3.75 px-5">
            <h1 className="label-semibold">{text}</h1>
        </button>
    )
}