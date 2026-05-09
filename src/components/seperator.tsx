import type { seperatorProps } from "./type"

export default function Seperator({ height }: seperatorProps) {
    return (
        <div>
            <div className={`${height} bg-diagonal-line border-2 w-screen left-0 ml-[calc(50%-50vw)] border-border-default`} />
        </div>
    )
}