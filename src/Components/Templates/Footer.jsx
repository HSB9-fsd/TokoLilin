import {Container, Parag} from "../Atom";

function Footer() {
  return (
    <div className="absolute flex items-center flex-wrap w-full bg-black bottom-0 py-20">
      <Container className="text-white">
        <div className="w-full h-1 border-b-4 border-white"></div>
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="w-72">
            <div className="">
              <img src="../img/footer.png" alt="" />
            </div>
            <Parag>
              Your natural candle made for your home and for your wellness.
            </Parag>
          </div>
          <div className="flex gap-5">
            <ul className="flex flex-col gap-2">
              <li>
                <a href="" className="text-primary">
                  Discover
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  New season
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Most searched
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Most salled
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="" className="text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Help
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Shipping
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Afflliate
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="" className="text-primary">
                  Info
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Contact us
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="" className="a-hover">
                  term & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
