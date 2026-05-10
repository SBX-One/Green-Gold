import DropDownLink from "./DropDownLink"
import { useEffect} from "react"
import linksList from "./ListData";

export default function DropDown() {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (  
        <div className="absolute w-full left-0 h-full z-100 bg-neutral-white px-5 md:px-15 gap-6 md:gap-12 flex flex-col pt-16">
            {linksList.map((link, i) => (
                <DropDownLink key={i} title={link.title} links={link.links} />
            ))}
        </div>
    )
}