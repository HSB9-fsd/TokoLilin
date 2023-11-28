import { Parag, Typog, Button } from "../../Atom"
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { positivity } from "../../Templates/db";

const Benefit = () => {
  return (
    <>
      <div className="max-w-[1440px] max-h-[880px] px-4 sm:px-[165px] bg-[#F7F8FA]">
        <div className="flex-row sm:flex sm:w-full sm:h-full justify-center">
          <div className="flex flex-col h-full w-full justify-center gap-4">
            <Typog variant="h1Dark" className="w-[340px] mt-[133px] text-3xl sm:text-4xl">
              Clean and fragrant soy wax
            </Typog>
            <Parag variant="primary">
              Made for your home and for your wellness
            </Parag>
            <ul className="mt-6">
              {positivity.map((data, index) => (
                <li key={index}>
                <Parag variant="xs-black" className="flex items-center mt-3 sm:break-normal">
                  <IoIosCheckmarkCircleOutline />
                  <span className="font-bold mx-1">{data.title}</span> {data.information}
                </Parag>
              </li>
              ))}
              <Button variant="primary" className="text-xs px-6 py-2 mt-16">Learn more</Button>
            </ul>
          </div>
          <div className="w-[540px] h-[377px] bg-white sm:shrink-0 my-4 sm:my-[209px] drop-shadow-md">
            <div className="w-full h-full relative">
              <img src="/img/leaves.png" alt="leaves" className="z-10 right-0 absolute" />
              <img src="/img/Candle_Mockup.png" alt="candle" className="z-10 left-0 top-0 absolute" />
              <img src="/img/Candle_Mockup_1_B (2) copy 2 14.02 1.png" alt="candle-1" className="z-10 bottom-0 right-0 absolute" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefit