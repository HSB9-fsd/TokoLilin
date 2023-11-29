import {Button, Container, Parag, Typog} from "../../../Atom";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {positivity} from "../../../Templates/db";

function SecondSectionRevisi() {
  return (
    <>
      <div className="bg-secondary w-full">
        <Container className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 pt-20">
          <div className="flex flex-col justify-center gap-4">
            <Typog variant="h1Dark" className="text-3xl sm:text-4xl">
              Clean and fragrant soy wax
            </Typog>
            <Parag variant="primary">
              Made for your home and for your wellness
            </Parag>
            <ul className="mt-6">
              {positivity.map((data, index) => (
                <li key={index}>
                  <Parag
                    variant="xs-black"
                    className="flex items-center mt-3 sm:break-normal"
                  >
                    <IoIosCheckmarkCircleOutline />
                    <span className="font-bold mx-1">{data.title}</span>{" "}
                    {data.information}
                  </Parag>
                </li>
              ))}
              <Button variant="primary" className="text-xs px-6 py-2 mt-8">
                Learn more
              </Button>
            </ul>
          </div>
          <div
            className="w-[400px] relative bg-no-repeat bg-white bg-cover shadow-lg"
            style={{backgroundImage: "url(../img/leaves.png)"}}
          >
            <img
              src="/img/Candle_Mockup.png"
              alt="candle"
              className="absolute"
            />
            <img
              src="/img/Candle_Mockup_1_B (2) copy 2 14.02 1.png"
              alt="candle-1"
              className=""
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default SecondSectionRevisi;
