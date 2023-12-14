import {Link} from "react-router-dom";
import {Button, Card, Parag, Typog, Container} from "../../../Atom";
import {products} from "../../../Templates/db";

function FirstSection() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat"
        style={{backgroundImage: "url(../img/bg-image.png)"}}
      >
        <Container className="h-[800px] flex-center">
          <div className="w-[730px] bg-white/70 py-16 flex flex-col items-center text-center backdrop-blur-lg rounded-lg">
            <p className="text-5xl mb-2">🌱</p>
            <h1 className="text-4xl md:text-5xl mb-2">The nature candle</h1>
            <p className="mb-11 text-base md:text-lg">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments
            </p>
            <div>
              <Button variant="primary" className="py-2 px-11 font-bold">
                Discover our collection
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-32">
        <div className="text-center mb-[60px]">
          <Typog variant="h1">Products</Typog>
          <Parag variant="grey">
            Order it for you or for your beloved ones
          </Parag>
        </div>
        <div className="grid-4-1 gap-2">
          {products.map((product) => (
            <a
              key={product.id}
              href={`/details/${product.id}`}
              className="max-w-lg shadow-lg h-[250px] hover:scale-105 hover:transition ease-in-out duration-300"
            >
              <div className="flex justify-center">
                <img src={product.img} alt="" />
              </div>
              <Parag variant="base-black" className="text-center">
                {product.name}
              </Parag>
              <Parag variant="primary" className="text-center">
                Rp. {product.price.toFixed(3)}
              </Parag>
            </a>
          ))}
        </div>
      </Container>
    </>
  );
}
export default FirstSection;
