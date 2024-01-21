/* eslint-disable react/prop-types */
import {Card} from "../../../Atom";
// import {Radio, Input, Select} from "antd";
// import {products} from "../../../Templates/db";

function Step2(props) {
  const {newData, grossAmount} = props;
  return (
    <>
      <Card className="mt-10">
        <div>
          <label>List of products</label>
          <ul>
            {newData.map((item) => (
              <li key={item.id} className="flex gap-2 items-center mb-4">
                <img
                  // src={item.product_id.img}
                  src="https://fakeimg.pl/100x100"
                  alt={item.product_id.title}
                  className="w-32"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{item.product_id.title}</span>
                  <span className="text-sm">{item.quantity} Items</span>
                  <span className="text-sm">IDR. {item.product_id.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <label>Gross Amount</label>
          <div>IDR. {grossAmount}</div>
        </div>
      </Card>
    </>
  );
}

export default Step2;
