import type { WWSCardProps } from "./type"

export default function WWSCard({ title, date, desc, volume}: WWSCardProps   ) {
    return (
        <div className="border border-border-default rounded-2xl bg-neutral-white">
            <div className="font-medium text-md-defult text-text-heading p-6">
                <h1>{title}</h1>
                <p className="sm-default text-text-placeholder">{date}</p>
            </div>
            <div className="py-10.25 rounded-2xl border border-border-default border-dashed bg-surface-default ">
                <h1 className="display text-text-action font-bold w-fit mx-auto"> 
                    {volume}
                </h1>
                <p className="md-default text-text-placeholder text-center">{desc}</p>
            </div>
        </div>
    )
}