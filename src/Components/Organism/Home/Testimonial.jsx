import { Card, Parag, Typog } from "../../Atom"
import { FaStar, FaStarHalf } from "react-icons/fa";
import { testi } from "../../Templates/db";


const Testimonial = () => {
    return (
        <>
            <div className="max-w-[1440px] max-h-[601px] px-[165px] bg-[#56B2801A]/10">
                <div className="flex flex-col w-full h-full justify-center items-center">
                    <div className="text-center mt-[90px]">
                        <Typog variant="h1" className="text-4xl font-bold">Testimonials</Typog>
                        <Parag variant="grey" className="">
                            Some quotes from our happy customers
                        </Parag>
                    </div>
                    <div className="flex mb-[90px] mt-[27px] gap-7">
                        {testi.map((data, index) => (
                            <Card key={index} variant="card-xs" className="text-center pb-[29px] bg-white rounded-md h-">
                            <img src={data.img} alt="" className="h-20 mx-auto mt-8" />
                            <div className="flex justify-center mb-5 text-[#56B280] gap-1">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf />
                            </div>
                            <Parag variant="xs-black" className="text-blueDark text-xl px-5 shrink-0">
                                {data.comment}
                            </Parag>
                            <Parag variant="grey" className="text-[#7C8087] text-lg break-words">
                                {data.name}
                            </Parag>
                        </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial