import { useNavigate } from "react-router-dom"
import Menu from "../components/layout/Menu"
import RigoButton from "../components/ui/button/RigoButton"
import SampahUmum from "../view/CleanYourTrash/AddSampah"
import AddSampahTemplate from "../view/CleanYourTrash/AddSampahTemplate"
import ScanMeth from "../view/CleanYourTrash/ScanMethod"

export default function CleanYourTrash() {
    const navigate = useNavigate()

    return (
        <div className="px-5 md:px-10 flex flex-col max-w-205 mx-auto">
            <Menu back="/Home" onclick={() => navigate('/TrashCheckout')} />
            <SampahUmum />
            <ScanMeth />
            <AddSampahTemplate />
            <div className="absolute bottom-10 md:hidden" onClick={() => navigate('/TrashCheckout')}>
                <RigoButton inv={true} text="Lanjut"/>
            </div>
        </div>
    )
}
