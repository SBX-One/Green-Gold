import LoadBar from "../../components/common/LoadBar"

const EstTime = ({ title, time }: {title: string, time: string}) => {
    return (
        <div>
            <h3 className="sm-default text-text-placeholder">{title}</h3>
            <p className="h2-heading text-text-heading">{time}</p>
        </div>
    )
}
export default function EstimateTime() {

    const EstList = [
        {
            title: "Berangkat",
            time: "09:42"
        },
        {
            title: "Sampai",
            time: "09:54"
        }
    ]
    
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row justify-between mt-10 md:hidden">
                {EstList.map((item, i) => (
                    <div className="min-w-36.5 flex justify-center" key={i}>
                        <EstTime {...item} />
                    </div>
                ))}
            </div>
                <div className="hidden md:flex flex-row justify-between w-full gap-12.5 py-5 mt-10">
                    <div className="px-10.5">
                        <EstTime {...EstList[0]} />
                    </div>
                    <LoadBar />
                    <div className="px-10.5">
                        <EstTime {...EstList[1]} />
                    </div>
                </div>

                <div className="md:hidden block">
                    <LoadBar />
                </div>
        </div>
    )
}