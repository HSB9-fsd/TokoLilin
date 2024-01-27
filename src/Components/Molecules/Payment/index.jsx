/* eslint-disable react/prop-types */
import {useEffect, useState} from "react";
import {Steps} from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {Button, Container} from "../../Atom";
import {useDispatch} from "react-redux";
import {postShippingAction} from "../../../store/action/shipping.action";
import useToken from "../../../Hooks/useToken";
import useAddress from "../../../Hooks/useAddress";

function PaymentProccess(props) {
  const {newData, grossAmount, hanldePayment} = props;
  const dispatch = useDispatch();
  const token = useToken();
  const address = useAddress();
  const productMap = newData.map((item) => item.product_id.id);
  const quantityMap = newData.map((item) => item.quantity);

  const [formData, setFormData] = useState({
    address_id: null,
    user_id: null,
    payment: "",
    products_datas: productMap,
    quantity: quantityMap,
  });

  useEffect(() => {
    const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_APP_PUBLIC_CLIENT;
    const script = document.createElement("script");
    script.src = snapScript;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (address && address.id && address.user_id) {
      setFormData({
        ...formData,
        address_id: address.id,
        user_id: address.user_id,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postShippingAction({formData, token})).then(() => {});
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };
  const steps = [
    {
      title: "Personal Biodata",
      content: <Step1 address={address} />,
    },
    {
      title: "Product Details",
      content: <Step2 newData={newData} grossAmount={grossAmount} />,
    },
    {
      title: "Payment",
      content: (
        <Step3 handleInputChange={handleInputChange} formData={formData} />
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <section className="fixed z-50 top-0 left-0 right-0 bottom-0 h-full bg-white overflow-auto">
        <Container className="p-5 md:p-16">
          <Steps current={current} items={items} className="" />
          <div>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            <div className="">
              <Button
                onClick={hanldePayment}
                variant="warning"
                className="py-2 px-5 mr-3"
              >
                Cancel
              </Button>
              {current < steps.length - 1 && (
                <Button
                  variant="primary"
                  type=""
                  onClick={() => next()}
                  className="py-2 px-10"
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  className="py-2 px-10"
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button
                  variant="outline"
                  onClick={() => prev()}
                  className="py-1 px-10 md:ml-3 mt-4"
                >
                  Previous
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
      <div className="my-10"></div>
    </>
  );
}

export default PaymentProccess;
