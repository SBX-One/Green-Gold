import type { WWSCardProps } from "../../type/type"
import ArrowIcon from "../ui/icons/ArrowIcon";

export default function WWSCard({ title, date, desc, volume}: WWSCardProps   ) {
    return (
        <div className="border border-border-default rounded-2xl bg-neutral-white desktop:flex-1" >
            <div className="flex items-center justify-between">
                <div className="font-medium text-md-defult text-text-heading p-6 flex-col flex">
                    <h1>{title}</h1>
                    <p className="sm-default text-text-placeholder">{date}</p>
                </div>
                    <button className="mr-6 hidden desktop:block">
                        <ArrowIcon className="text-icon-default bg-neutral-white border-2 hover:bg-neutral-200 border-border-default w-11 h-11 rounded-2xl p-3.5" />
                    </button>
            </div>
            <div className="py-10.25 rounded-2xl border-t-2 border-border-default border-dashed desktop:border-solid desktop:rounded-0  bg-surface-default ">
                <h1 className="display text-text-action font-bold w-fit mx-auto"> 
                    {volume}
                </h1>
                <p className="md-default text-text-placeholder text-center mt-2">{desc}</p>
            </div>
        </div>
    )
}