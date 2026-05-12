import Menu from "../view/CleanYourTrash/Menu"
import SampahUmum from "../view/CleanYourTrash/SampahUmum"
import ScanMeth from "../view/Home/ScanMethod"

export default function CleanYourTrash() {
    return (
        <div className="p-5">
            <Menu />
            <SampahUmum />
            <ScanMeth />
        </div>
    )
}