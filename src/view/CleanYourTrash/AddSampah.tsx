import Search from "../../components/common/Search";
import SimpleCard from "../../components/common/SimpleCard";
import filter from "../../assets/svg/settings-2.svg"
import SimpleIcon from "../../components/ui/icons/SimpleIcon";

export default function AddSampah() {
    return (
        <div className="flex flex-col mt-6">
            <div className="flex flex-row w-full gap-5">
                <Search />
                <SimpleIcon icon={filter} iconWidth={16} />
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <h1 className="xs-default text-text-label">Ditambahkan</h1>
                <SimpleCard mode="add"  />
            </div>
        </div>
    )
}