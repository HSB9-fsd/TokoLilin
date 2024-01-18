import {useDispatch, useSelector} from "react-redux";
import {Button} from "../../Atom";
import {SlBasket} from "react-icons/sl";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getProductAction} from "../../../store/action/product.action";
import {postCartAction} from "../../../store/action/cart.action";

const Main = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const {id} = useParams();
  const selectItem = products.find((data) => data.id === parseInt(id));

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  if (!selectItem) {
    return console.log("");
  }

  const hanldeAddCart = (id) => {
    dispatch(postCartAction(id));
  };

  return (
    <>
      <div className="min-h-full w-min-screen mt-10 mb-20">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch mt-3.5 px-5 max-md:max-w-full max-md:mt-10">
              <img
                src={selectItem.img}
                className="aspect-[1.33] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className="text-green-400 text-center text-xl font-medium leading-7 tracking-tighter self-center mt-2 max-md:max-w-full">
                <span className="font-medium text-neutral-800">
                  {selectItem.desc}
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
                {selectItem.name}
              </div>
              <div className="mt-7 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col items-stretch mt-1 max-md:mt-10">
                      <div className="font-bold text-primary text-xl">
                        IDR. {selectItem.price.toFixed(3)}
                      </div>
                      <div className="justify-center items-stretch bg-white flex flex-col mt-10 pt-1.5 max-md:mt-10">
                        <div className="text-neutral-800 text-center text-lg leading-7 tracking-tighter">
                          Quantity
                        </div>
                        <div className="py-3 border-2 flex justify-evenly border-primary">
                          <Button>
                            <span className="text-green-400">+</span>
                          </Button>
                          <span className="text-zinc-800 mx-3">1</span>
                          <Button>
                            <span className="text-neutral-400">-</span>
                          </Button>
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
                          <div>
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
                    <div className="mt-5">
                      <Button
                        onClick={() => hanldeAddCart(selectItem.id)}
                        variant="primary"
                        className="py-2 px-10 flex items-center gap-3"
                      >
                        <SlBasket /> + Add to cart
                      </Button>
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
};

export default Main;
