import type { LogoCardProps } from "../../helper/type"

export default function LogoCard({ logo, title }: LogoCardProps ) {
    return (
        <div className="p-9 md:py-15.25 flex-1 flex flex-col border-2 border-border-default rounded-2xl justify-center items-center gap-4">
            <img src={logo} alt={title} className="h-12" />
            <h1 className="label-default text-text-placeholder">{title}</h1>
        </div>
    )
}