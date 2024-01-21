import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Container, Typog} from "../../Atom";
import Template from "../../Templates";
import {CiCirclePlus, CiCircleMinus} from "react-icons/ci";
import {deleteCartAction} from "../../../store/action/cart.action";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../store/reducer/cart.slice";
import PaymentProccess from "../../Molecules/Payment";
import {useCart} from "../../../Hooks/useCart";
import Empty from "../Empty";
import useToken from "../../../Hooks/useToken";

function Cart() {
  const dispatch = useDispatch();
  const carts = useCart();
  const token = useToken();
  const [payment, setPayment] = useState(false);
  const [selectItem, setSeleectItem] = useState([]);
  const newData = selectItem.map((item) =>
    carts.find((data) => data.id === item)
  );

  const handleAddQuantity = (id) => {
    dispatch(increaseQuantity({id}));
  };

  const handleMinusQuantity = (id) => {
    dispatch(decreaseQuantity({id}));
  };

  const hanldeDeleteCart = (id) => {
    dispatch(deleteCartAction({id, token}));
  };

  const hanldePayment = () => {
    if (newData.length > 0) {
      setPayment(!payment);
    }
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

  const grossAmount = newData.reduce(
    (check, item) => check + item.product_id.price * item.quantity,
    0
  );

  // if (!carts) {
  //   return console.log("");
  // }

  return (
    <Template>
      <Container>
        <div className="flex items-center  h-28 my-10">
          <div className="mt-10 flex justify-between w-full gap-5">
            <div className="">
              {newData.map((item, i) => (
                <p key={i}>
                  <span className="block text-sm">{item.product_id.title}</span>
                  <span className="block text-sm">{item.quantity}</span>
                  <span className="text-sm font-bold">
                    IDR.{item.product_id.price}
                  </span>
                </p>
              ))}
            </div>
            <div className="flex items-start gap-10 flex-wrap">
              <div className="font-bold">
                <span className="block">Gross amount</span>
                <span>IDR {grossAmount}</span>
              </div>
              <Button
                onClick={hanldePayment}
                variant="primary"
                className={`px-5 py-2 ${
                  newData.length <= 0 ? "cursor-not-allowed" : ""
                }`}
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
          {carts <= 0 ? (
            <Empty place="cart item" />
          ) : (
            carts.map((item) => (
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
                  <img
                    src="https://fakeimg.pl/200x200"
                    alt={item.product_id.title}
                  />
                </div>
                <div className="flex flex-wrap gap-5 items-start">
                  <div className="flex flex-col justify-start">
                    <span>{item.product_id.title}</span>
                    <button
                      onClick={() => hanldeDeleteCart(item.id)}
                      className="text-primaryDark text-left"
                    >
                      Remove
                    </button>
                  </div>
                  <div>
                    <span>IDR. {item.product_id.price}</span>
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
            ))
          )}
        </div>
      </Container>
    </Template>
  );
}

export default Cart;
