import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Typog} from "../../Atom";
import Template from "../../Templates";
import {CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {
  deleteCartAction,
  getCartAction,
} from "../../../store/action/cart.action";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../store/reducer/cart.slice";
import PaymentProccess from "../../Molecules/Payment";
import {useProduct} from "../../../Hooks/useProduct";

function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.data);
  const products = useProduct();
  const [payment, setPayment] = useState(false);
  const [selectItem, setSeleectItem] = useState([]);
  const matchedCart = carts.map((cart) => {
    const matchedProduct = products.find(
      (product) => product.id === cart.productId
    );
    return {...cart, product: matchedProduct};
  });

  const newData = selectItem.map((item) =>
    matchedCart.find((data) => data.id === item)
  );

  useEffect(() => {
    dispatch(getCartAction());
  }, [dispatch]);

  const handleAddQuantity = (id) => {
    dispatch(increaseQuantity({id}));
  };
  const handleMinusQuantity = (id) => {
    dispatch(decreaseQuantity({id}));
  };
  const hanldeDeleteCart = (id) => {
    dispatch(deleteCartAction(id));
  };

  const hanldePayment = () => {
    setPayment(!payment);
  };

  const hanldCheckout = (id) => {
    setSeleectItem((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const grossAmount = newData
    .filter((item) => selectItem.includes(item.id))
    .reduce((total, item) => total + item.product.price * item.quantity, 0);

  if (!matchedCart) {
    return console.log("oke");
  }

  return (
    <Template>
      <Container>
        <div className="flex items-center  h-28 my-10">
          <div className="flex justify-between w-full gap-5">
            <div className="">
              {newData.map((item, i) => (
                <p key={i}>
                  <span className="block">{item.product.name}</span>
                  <span className="block">{item.quantity}</span>
                  <span>IDR.{item.product.price.toFixed(3)}</span>
                </p>
              ))}
            </div>

            <div className="flex items-start gap-10 flex-wrap">
              <div className="font-bold">
                <span className="block">Gross amount</span>
                <span>IDR {grossAmount.toFixed(3)}</span>
              </div>
              <Button
                onClick={hanldePayment}
                variant="primary"
                className="px-5 py-2"
              >
                Check-out
              </Button>
            </div>
          </div>
        </div>
        {payment && (
          <PaymentProccess
            newData={newData}
            grossAmount={grossAmount}
            hanldePayment={hanldePayment}
          />
        )}
        <Typog variant="h1Dark" className="text-center">
          Your cart items
        </Typog>
        <div className="mt-10">
          {matchedCart.map((item) => (
            <div
              key={item.id}
              className="flex flex-wrap justify-center sm:justify-between items-center border p-5 mb-3"
            >
              <input
                type="checkbox"
                checked={selectItem.includes(item.id)}
                onChange={() => hanldCheckout(item.id)}
                className="w-36"
              />
              <div className="w-44">
                <img src={item.product.img} alt="" />
              </div>
              <div className="flex flex-wrap gap-5 items-start">
                <div className="flex flex-col justify-start">
                  <span>{item.name}</span>
                  <button
                    onClick={() => hanldeDeleteCart(item.id)}
                    className="text-primaryDark text-left"
                  >
                    Remove
                  </button>
                </div>
                <div className="">
                  <span>IDR. {item.product.price.toFixed(3)}</span>
                </div>
                <div className="flex items-center gap-4 border-2 border-primary px-3">
                  <button
                    onClick={() => handleAddQuantity(item.id)}
                    className="text-xl font-bold"
                  >
                    <CiCirclePlus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleMinusQuantity(item.id)}
                    className="text-xl font-bold"
                  >
                    <CiCircleMinus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Template>
  );
}

export default Cart;
