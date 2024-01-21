import {Button, Parag, Typog, Container} from "../../../Atom";
import {useProduct} from "../../../../Hooks/useProduct";

function FirstSection() {
  const products = useProduct();

  const hanldeToken = () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVkMmM2NWZkLWIxNzEtNDBhMC04YWNkLWIxNWJiYzVjNjE4OCIsImlhdCI6MTcwNTg0MTAyM30.VlXz7c4OO3WF0kXnV1KO6gT7oAIc_cdbEX_iBR84LfA";
    localStorage.setItem("token", token);
  };

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
              <Button
                onClick={hanldeToken}
                variant="primary"
                className="py-2 px-11 font-bold"
              >
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
                <img src="https://fakeimg.pl/150x150" alt={product.title} />
              </div>
              <Parag variant="base-black" className="text-center">
                {product.title}
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
