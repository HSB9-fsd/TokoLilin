import {Button, Container, Parag, Typog} from "../../../Atom";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {positivity} from "../../../Templates/db";

function SecondSection() {
  return (
    <>
      <Container className="bg-secondary">
        <div className="flex-row sm:flex sm:w-full sm:h-full justify-center">
          <div className="flex flex-col h-full w-full justify-center gap-4">
            <Typog
              variant="h1Dark"
              className="w-[340px] mt-[133px] text-3xl sm:text-4xl"
            >
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
              <Button variant="primary" className="text-xs px-6 py-2 mt-16">
                Learn more
              </Button>
            </ul>
          </div>
          <div className="max-w-2xl bg-white">
            <img
              src="/img/Candle_Mockup_1_B (2) copy 2 14.02 1.png"
              alt="candle-1"
              className=""
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default SecondSection;
