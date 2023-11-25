import {Button, Card, Container, Parag, Typog} from "../Atom";

function ComponentExample() {
  return (
    <>
      <Container className="mt-10">
        <div className="flex flex-col gap-3">
          <Button variant="primary" className="py-2 px-5">
            Discovery our collection
          </Button>
          <Button variant="outline" className="py-2 px-5 ">
            + Add to cart
          </Button>
          <Typog variant="h1">Products</Typog>
          <Parag variant="grey">
            Order it for you or for your beloved ones{" "}
          </Parag>
          <Parag variant="primary">
            Made for your home and for your wellness{" "}
          </Parag>
          <Typog variant="h1Dark">Clean and fragrant soy wax</Typog>
          <Typog variant="h1Dark">Spiced Mint Candleaf®</Typog>
          <Parag variant="black">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments. 🚚 FREE SHIPPING
          </Parag>
        </div>
        <div className="my-10">
          <Typog variant="h1">Colors</Typog>
          <div className="max-w-md h-24 bg-primary">Primary</div>
          <div className="max-w-md h-24 bg-primaryDark">PrimaryDark</div>
          <div className="max-w-md h-24 bg-secondary">secondary</div>
          <div className="max-w-md h-24 bg-blueDark text-white">blueDark</div>
        </div>
        <div className="my-20"></div>
        grid responsive grid col 1 md:grid col 4
        <div className="grid-4-1 gap-2">
          <div className="max-w-lg h-52 bg-purple-400"></div>
          <div className="max-w-lg h-52 bg-purple-500"></div>
          <div className="max-w-lg h-52 bg-purple-600"></div>
          <div className="max-w-lg h-52 bg-purple-700"></div>
          <div className="max-w-lg h-52 bg-red-700"></div>
          <div className="max-w-lg h-52 bg-red-500"></div>
          <div className="max-w-lg h-52 bg-red-400"></div>
          <div className="max-w-lg h-52 bg-red-300"></div>
          <div className="max-w-lg h-52 bg-red6-700"></div>
        </div>
        <Card variant="card-lg" className="h-44 text-center">
          card
          <img src="../img/image 1-1.png" alt="" />
        </Card>
        <div className="mt-10">
          <Typog variant="h1">Note</Typog>
          <ul className="list-disc">
            <li>
              flex-center = flex justify-center items-center; jadi jika ingin
              memberikan display seperti disamping, silahkan pakai class
              flex-center
            </li>
            <li>
              jika ada page baru, lakukan import pada rootroute isi path dan
              component sesuai dengan page tersebut. pada halaman pages,
              pastikan lakukan import template sama seperti contoh halaman home
            </li>
            <li>
              Hapus aja component ini pada halaman home, ini coma contoh
              component yang ada pada atom
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

export default ComponentExample;
