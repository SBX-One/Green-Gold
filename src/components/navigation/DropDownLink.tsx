import type { DropDownProps } from "../../helper/type";
// import arrow from '../assets/svg/arrow-up-right.svg'
import ArrowIcon from "../ui/icons/ArrowIcon";

export default function DropDownLinks({ title, links }: DropDownProps) {
    return (
        <div className="flex flex-row justify-between items-center pb-5 md:pb-10 border-b-2 bg-neutral-white border-border-default">
            <a className="text-text-heading display" href={links}>{title}</a>
            <ArrowIcon className="text-text-placeholder w-12" />
            {/* <img src={arrow} alt="Arrow" className="w-12 stroke-text-placeholder" /> */}
        </div>
    )
}