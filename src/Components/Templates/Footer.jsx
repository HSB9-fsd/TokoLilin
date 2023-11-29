import {Parag} from "../Atom";

function Footer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src="../img/logoL.png" className="h-12" alt="Logo" />
              </a>
              <Parag variant="primary" className="mt-4 text-white sm:w-[300px]">
                Your natural candle made for your home and for your wellness.
              </Parag>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <Parag variant="primary" className="mb-6 text-sm font-semibold">
                  Discovery
                </Parag>
                <ul className="text-white text-sm font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      New Season
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Most Searched
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Most Selled
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Parag
                  variant="primary"
                  className="mb-6 text-base font-semibold"
                >
                  About
                </Parag>
                <ul className="text-white text-sm font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      Help
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Shipping
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Affiliate
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Parag
                  variant="primary"
                  className="mb-6 text-base font-semibold"
                >
                  Info
                </Parag>
                <ul className="text-white text-sm font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Contact Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
