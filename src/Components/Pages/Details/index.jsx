import Template from "../../Templates";
// import { Link } from "react-router-dom";

// import { Card, Parag, Typog, Container } from "../../Atom";
// import { products } from "../../Templates/db";
function index() {
  return (
    <>
      <Template>
        <Main />
      </Template>
    </>
  );
}

function Main() {
  return (
    <>
      <div className="min-h-full w-min-screen mt-10 mb-">
        {" "}
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-3.5 px-5 max-md:max-w-full max-md:mt-10">
              <img
                src="../../../public/img/Candle_Mockup.png"
                className="aspect-[1.33] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="text-green-400 text-center text-xl font-medium leading-7 tracking-tighter self-center mt-2 max-md:max-w-full">
                <span className="font-medium text-neutral-800">
                  All hand-made with natural soy wax, Candleaf is made for your
                  pleasure moments.
                </span>
                <span className="font-medium text-zinc-800">
                  <br />
                  🚚
                </span>
                <span className="font-bold text-green-400">FREE SHIPPING</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch px-5 max-md:max-w-full max-md:mt-9">
              <div className="justify-center text-neutral-800 text-2xl font-medium leading-[58px] tracking-tighter max-md:max-w-full">
                Spiced Mint Candleaf®
              </div>
              <div className="mt-7 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch mt-1 max-md:mt-10">
                      <div className="justify-center text-green-400 text-2xl font-semibold leading-[58px] tracking-tighter">
                        $ 9.99
                      </div>
                      <div className="justify-center items-stretch bg-white flex flex-col mt-10 pt-1.5 max-md:mt-10">
                        <div className="text-neutral-800 text-center text-lg leading-7 tracking-tighter">
                          Quantity
                        </div>
                        <div className="text-neutral-400 text-center text-lg leading-7 tracking-tighter border border-[color:var(--green,#56B280)] justify-center items-stretch mt-2 px-4 py-2.5 border-solid">
                          <span className="text-green-400">+</span>
                          <span className="text-zinc-800">1</span>
                          <span className="text-neutral-400">-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:mt-10">
                      <div className="justify-center bg-white flex w-full flex-col items-start">
                        <div className="flex items-stretch gap-5 ml-5 max-md:ml-2.5">
                          <div className="stroke-[3px] flex w-4 shrink-0 h-4 flex-col rounded-[50%]" />
                          <div className="text-neutral-800 text-base leading-4 tracking-tighter self-start">
                            One time purchase
                          </div>
                        </div>
                        <div className="border self-stretch flex w-full flex-col items-stretch mt-6 px-5 py-5 rounded-lg border-solid border-neutral-200 max-md:pr-5">
                          <div className="flex justify-between gap-3.5 px-px items-start max-md:justify-center">
                            <div className="stroke-[3px] flex w-4 shrink-0 h-4 flex-col rounded-[50%]" />
                            <div className="text-neutral-800 text-base leading-4 tracking-tighter my-auto">
                              Subscribe and delivery every
                            </div>
                            <div className="border self-stretch flex justify-between gap-1.5 px-2 py-1.5 border-solid border-neutral-200 items-start">
                              <div className="text-neutral-800 text-sm leading-4 tracking-tighter">
                                4 weeks
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fcb37a107dbc647c1d825de1e75f3f29932bf30d394c30af732b0d9055528bb?apiKey=be3dbe45865241b7a20a89a9720847f6&"
                                className="aspect-square object-contain object-center w-2.5 overflow-hidden shrink-0 max-w-full"
                              />
                            </div>
                          </div>
                          <div className="text-green-400 text-sm font-light leading-4 mt-3">
                            <span className="text-zinc-500">
                              Subscribe now and get the 10% of discount on every
                              recurring order. The discount will be applied at
                              checkout.
                            </span>
                            <span className="text-stone-500" />
                            <span className="text-green-400">See details</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="items-stretch rounded bg-green-400 flex justify-between gap-4 mt-16 px-20 py-2.5 max-md:mt-10 max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f7f8ba5b3ea1e62c2a88e57d94e0bb47f3701efdff81db66b03b63dda094add?apiKey=be3dbe45865241b7a20a89a9720847f6&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-white text-center text-xl my-auto">
                        + Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border flex shrink-0 h-[131px] flex-col mt-10 rounded-lg border-solid border-neutral-200 max-md:max-w-full" />
        </div>
      </div>
    </>
  );
}

export default index;
