import SimpleCard from "../../components/common/SimpleCard"
import Data from "../../data/SampahUmum.json"

export default function AddSampahTemplate() {
    return (
        <div>
            {Data.map((item, i) => (
                <div key={i} className="my-8">
                    <h1 className="xs-default text-text-label mb-4">{item.name}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-80 md:max-w-none mx-auto">
                        {item.Category.map((item, i) => (
                            <div key={i}>
                                <SimpleCard title={item.title} desc={item.desc} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}