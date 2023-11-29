import {Button, Card, Parag, Typog, Container} from "../../../Atom";
import {products} from "../../../Templates/db";

function FirstSection() {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat"
        style={{backgroundImage: "url(../img/bg-image.png)"}}
      >
        {/* <img
          className="w-full h-[100vh] bg-cover absolute -z-10"
          src="../img/bg-image.png"
          alt="hero"
        /> */}
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
          {/* <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center overflow-hidden">
              <img src="../img/image 1.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Spiced Mint
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-1.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Sweet Strawbery
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-2.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Cool Blueberries
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-3.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Juicy Lemon
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-4.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Product Name
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-5.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Fragrant Cinnamon
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-6.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Summer Cherries
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card> */}
          {products.map((product) => (
            <Card
              key={product.id}
              variant="card-lg"
              className="h-[250px] hover:scale-105 hover:transition ease-in-out duration-300"
            >
              <div className="flex justify-center">
                <img src={product.img} alt="" />
              </div>
              <Parag variant="base-black" className="text-center">
                {product.name}
              </Parag>
              <Parag variant="primary" className="text-center">
                Rp. {product.price}
              </Parag>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
export default FirstSection;
