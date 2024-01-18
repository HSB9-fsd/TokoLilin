/* eslint-disable react/prop-types */
import {useState} from "react";
import {Steps} from "antd";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {Button, Container} from "../../Atom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserAction} from "../../../store/action/user.action";
import {getAddressAction} from "../../../store/action/address.action";
import {postShippingAction} from "../../../store/action/shipping.action";

function PaymentProccess({newData, grossAmount, hanldePayment}) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const token = localStorage.getItem("token");
  const user_ids = users.map((user) => user.id);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserAction(token));
      await dispatch(getAddressAction(token));
    };

    fetchData();
  }, [dispatch, token]);

  const currentUser = useSelector((state) => state.users.data[0]);
  const newAddress = useSelector((state) =>
    state.address.data.find((data) => user_ids.includes(data.user_id))
  );

  useEffect(() => {
    if (currentUser && newAddress) {
      const currentUserID = currentUser.id || null;
      const currentAddressID = newAddress.id || null;
      setFormData({
        user_id: currentUserID,
        address_id: currentAddressID,
        payment: "",
      });
    }
  }, [currentUser, newAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postShippingAction({formData, token}));
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const steps = [
    {
      title: "Personal Biodata",
      content: <Step1 currentUser={currentUser} newAddress={newAddress} />,
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

  if (!currentUser || !newAddress) {
    return console.log("");
  }

  return (
    <>
      <section className="fixed z-50 top-0 left-0 right-0 bottom-0 h-full bg-white">
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
                  className="py-1 px-10 ml-3"
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
