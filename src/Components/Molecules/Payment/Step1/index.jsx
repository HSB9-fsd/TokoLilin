/* eslint-disable react/prop-types */
import {Card} from "../../../Atom";
import {Radio, Input, Select} from "antd";

function Step1({currentUser, newAddress}) {
  return (
    <>
      <Card>
        <div className="mt-10">
          <label>Full Name</label>
          <Input
            type="text"
            value={`${currentUser.first_name} ${currentUser.last_name}`}
            placeholder="Your name here"
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Email</label>
          <Input
            type="email"
            value={currentUser.email}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>City</label>
          <Input
            type="text"
            value={newAddress.city}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Postal Code</label>
          <Input
            type="text"
            value={newAddress.postal_code}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Province</label>
          <Input
            type="text"
            value={newAddress.province}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>County</label>
          <Input
            type="text"
            value={newAddress.country}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Address</label>
          <Input
            type="text"
            value={newAddress.address}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Description</label>
          <Input
            type="text"
            placeholder="Your description here"
            className="my-2"
          />
        </div>
      </Card>
    </>
  );
}

export default Step1;
