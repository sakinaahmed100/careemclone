import TextCard from "./components/TextCard";
import Slider from "./components/Slider";
import AboutUs from "./components/Aboutus";

export default function Services() {
    const anywhere=["rides","taxi","bike","car rentals" , "school rides"]
    const anytime=["food","Dine Out"]
    const anything=["quiks","supermarket","delivery","home cleaning" , "salon & spa","tikets","laundry","flowers","pharmacy"]
    const anyone=["pay","donations"]

    return (
        <>
            <div className="flex justify-center ">
                <div className="grid grid-cols-4 w-90vw gap-4">
                    <TextCard data={anywhere} props1=" bg-blue-700 text-white "></TextCard>
                    <TextCard data={anytime} props2="bg-blue-200  text-gray-600" bullet="invert-0 brightness-100"></TextCard>
                    <TextCard data={anything} props3=" bg-blue-500 text-blue-300" bullet="invert sepia saturate-200 hue-rotate-180"></TextCard>
                    <TextCard data={anyone} props4=" bg-blue-700 text-white"></TextCard>
                   
                </div>
            </div>
            <Slider></Slider>
<AboutUs></AboutUs>

        </>
    )
}
