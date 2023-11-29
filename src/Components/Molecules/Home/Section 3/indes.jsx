import {FaStar} from "react-icons/fa6";
import {Card, Parag, Typog, Container} from "../../../Atom";
import {testi} from "../../../Templates/db";

function ThirdSection() {
  return (
    <>
      <div className=" bg-secondary">
        <Container className="flex flex-col w-full h-full justify-center items-center overflow-auto">
          <div className="text-center mt-[90px]">
            <Typog variant="h1" className="text-3xl sm:text-4xl font-bold">
              Testimonials
            </Typog>
            <Parag variant="grey" className="">
              Some quotes from our happy customers
            </Parag>
          </div>
          <div className="flex mb-[90px] mt-[27px] gap-7 ">
            {testi.map((data, index) => (
              <Card
                key={index}
                variant="card-xs"
                className="text-center mt-4 pt-8 sm:pb-[29px] bg-white rounded-md hover:scale-105 duration-300"
              >
                <img src={data.img} alt="" className="h-20 mx-auto sm:mt-8" />
                <div className="flex justify-center mb-5 gap-1">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < data.rate ? "text-[#56B280]" : "text-gray-300"
                        }
                      />
                    ))}
                </div>
                <Parag
                  variant="xs-black"
                  className="text-blueDark text-xl px-5 shrink-0"
                >
                  {data.comment}
                </Parag>
                <Parag
                  variant="grey"
                  className="text-[#7C8087] text-lg break-words"
                >
                  {data.name}
                </Parag>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

export default ThirdSection;
