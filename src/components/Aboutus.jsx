export default function AboutUs() {
    return (
        <>
            <div className="grid grid-cols-2 mt-52  px-36 gap-28  text-current">
                <div className="flex flex-col justify-center flex-wrap items-start gap-6 ">

                    <h3 className="text-6xl font-bold ">About us</h3>
                    <p className="text-xl ">Careem’s purpose is to simplify and improve the lives of people and build an awesome organisation that inspires.
                        Learn more about our purpose, people and services.

                        </p>

                        <button className="bg-green-400 rounded-md py-1 px-2 text-sm">Read more</button>
                </div>
                <div>
                    <div><img src="https://upload-cdn.careem.com/About_us_updt_48b263b2f9.png" alt="" /></div>
                </div>
            </div>
        </>
    )

}