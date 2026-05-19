import DropDownLink from "./DropDownLink"
import { useEffect} from "react"
import linksList from "../../data/ListData";

export default function DropDown() {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (  
        <div className="fixed inset-0 z-100 top-40 bg-white px-5 md:px-15 gap-6 md:gap-12 flex flex-col pt-5 overflow-y-auto">
            {linksList.map((link, i) => (
                <div>
                    <DropDownLink key={i} title={link.title} links={link.links} />
                </div>
            ))}
        </div>
    )
}