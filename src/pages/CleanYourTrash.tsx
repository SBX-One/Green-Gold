import Menu from "../components/layout/Menu"
import SampahUmum from "../view/CleanYourTrash/AddSampah"
import ScanMeth from "../view/CleanYourTrash/ScanMethod"

export default function CleanYourTrash() {
    return (
        <div className="p-5 flex flex-col">
            <Menu back="/Home" />
            <SampahUmum />
            <ScanMeth />
        </div>
    )
}
