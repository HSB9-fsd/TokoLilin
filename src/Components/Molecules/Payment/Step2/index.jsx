/* eslint-disable react/prop-types */
import {Card} from "../../../Atom";
// import {Radio, Input, Select} from "antd";
// import {products} from "../../../Templates/db";

function Step2({newData, grossAmount}) {
  return (
    <>
      <Card className="mt-10">
        <div>
          <label>List of products</label>
          <ul>
            {newData.map((item) => (
              <li key={item.id} className="flex gap-2 items-center mb-4">
                <img
                  src={item.product.img}
                  alt={item.product.name}
                  className="w-32"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{item.product.name}</span>
                  <span className="text-sm">{item.quantity} Items</span>
                  <span className="text-sm">
                    IDR. {item.product.price.toFixed(3)}
                  </span>
                  <span className="text-sm">{item.product.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <label>Gross Amount</label>
          <div>IDR. {grossAmount.toFixed(3)}</div>
        </div>
      </Card>
    </>
  );
}

export default Step2;
