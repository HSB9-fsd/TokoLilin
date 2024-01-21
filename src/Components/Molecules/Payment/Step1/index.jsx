/* eslint-disable react/prop-types */
import useAuth from "../../../../Hooks/useAuth";
import {Card} from "../../../Atom";
import {Input} from "antd";

function Step1({address}) {
  const user = useAuth();

  return (
    <>
      <Card>
        <div className="mt-10">
          <label>Full Name</label>
          <Input
            type="text"
            value={`${user.first_name} ${user.last_name}`}
            placeholder="Your name here"
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Email</label>
          <Input type="email" value={user.email} className="my-2" readOnly />
        </div>
        <div className="mt-2">
          <label>City</label>
          <Input type="text" value={address.city} className="my-2" readOnly />
        </div>
        <div className="mt-2">
          <label>Postal Code</label>
          <Input
            type="text"
            value={address.postal_code}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Province</label>
          <Input
            type="text"
            value={address.province}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>County</label>
          <Input
            type="text"
            value={address.country}
            className="my-2"
            readOnly
          />
        </div>
        <div className="mt-2">
          <label>Address</label>
          <Input
            type="text"
            value={address.address}
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
