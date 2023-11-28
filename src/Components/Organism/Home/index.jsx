import Button from "../../Atom/Button";
import { Typog, Parag, Card } from "../../Atom";

function OrganismHome() {
  return (
    <>
      <div>
        <img
          className="w-full h-[100vh] bg-cover absolute -z-10"
          src="../img/bg-image.png"
          alt="hero"
        />
        <div className="h-[100vh] flex justify-center items-center">
          <div className="w-[730px] h-[349px] bg-slate-100 flex justify-center items-center backdrop-blur-lg rounded-lg mx-4">
            <div className="block text-center">
              <p className="text-5xl mb-2">🌱</p>
              <h1 className="text-5xl mb-2">The nature candle</h1>
              <p className="mb-11 text-lg">
                All handmade with natural soy wax, Candleaf is a companion for
                all your pleasure moments
              </p>
              <Button variant="primary" className="py-2 px-11 font-bold">
                Discover our collection
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[90px] mx-16">
        <div className="flex justify-center items-center flex-col mb-[60px]">
          <Typog variant="h1">Products</Typog>
          <Parag variant="grey">
            Order it for you or for your beloved ones
          </Parag>
        </div>

        <div className="grid-4-1 gap-2">
          <Card variant="card-lg" className="h-[250px]">
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
          </Card>
          <Card variant="card-lg" className="h-[250px]">
            <div className="flex justify-center">
              <img src="../img/image 1-7.png" alt="" />
            </div>
            <Parag variant="base-black" className="text-center">
              Clean Lavender
            </Parag>
            <Parag variant="primary" className="text-center">
              Rp. 20.000
            </Parag>
          </Card>
        </div>
      </div>
    </>
  );
}
export default OrganismHome;
