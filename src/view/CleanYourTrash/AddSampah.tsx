import Search from "../../components/common/Search";
import SimpleCard from "../../components/common/SimpleCard";
import filter from "../../assets/svg/settings-2.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";
import { useNavigate } from "react-router-dom"

export default function AddSampah() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col mt-6">
            <div className="flex flex-row w-full gap-5">
                <Search />
                <SimpleIcon icon={filter} iconWidth={16} />
            </div>
            <div onClick={() => navigate('/ScanYourTrash/AddTrash')} className="mt-6 flex flex-col gap-4">
                <h1 className="xs-default text-text-label">Ditambahkan</h1>
                <div className="w-fit min-w-37.5 md:min-w-52">
                    <SimpleCard mode="add"  />
                </div>
            </div>
        </div>
    )
}