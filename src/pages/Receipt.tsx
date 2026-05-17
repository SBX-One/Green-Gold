import Menu from "../components/layout/Menu";
import EstimateTime from "../view/Receipt/EstimateTime";
import FewDetails from "../view/Receipt/FewDetails";
import MainReceipt from "../view/Receipt/MainReceipt";

export default function Receipt() {
    
    return (
        <div className="text-text-body px-5 md:px-10">
            <Menu back="/Home" />
            <EstimateTime />
            <FewDetails />
            <MainReceipt />
        </div>
    )
}