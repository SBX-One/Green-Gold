import search from "../../assets/svg/search.svg"
import { useState } from "react"

export default function Search () {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="w-full relative flex flex-row bg-neutral-white px-3 rounded-2xl border-2 gap-2 border-border-default"> 
            <img src={search} alt="Search" className={`${searchTerm ? 'hidden' : 'w-4'}`} />
            <input type="text" className="w-full text-text-body py-3.75 label-default focus:outline-none" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari apa saja" />
        </div>
    )
}