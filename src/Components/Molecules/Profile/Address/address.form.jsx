/* eslint-disable react/prop-types */
import {Input} from "antd";
import {Link} from "react-router-dom";
import {Button} from "../../../Atom";

function AddressForm({address}) {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.users.data);
  // const address = useSelector((state) => state.address.data);
  // const token = localStorage.getItem("token");
  // const user_ids = users.map((user) => user.id);
  // const newAddress = address.find((data) => user_ids.includes(data.user_id));

  // useEffect(() => {
  //   dispatch(getUserAction(token));
  //   dispatch(getAddressAction(token));
  // }, [dispatch, token]);

  // if (!newAddress) {
  //   return console.log("");
  // }

  return (
    <form className="mb-8">
      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          City
        </label>
        <Input
          type="text"
          id="city"
          name="city"
          value={address.city}
          className="form-input w-full"
          placeholder="Enter your city"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="postal_code"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Postal Code
        </label>
        <Input
          type="text"
          id="postal_code"
          name="postal_code"
          value={address.postal_code}
          className="form-input w-full"
          placeholder="Enter your postal code"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="province"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Province
        </label>
        <Input
          type="text"
          id="province"
          name="province"
          value={address.province}
          className="form-input w-full"
          placeholder="Enter your province"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Country
        </label>
        <Input
          type="text"
          id="country"
          name="country"
          value={address.country}
          className="form-input w-full"
          placeholder="Enter your country"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-gray-600 mb-1"
        >
          Address
        </label>
        <Input
          type="text"
          id="address"
          name="address"
          value={address.address}
          className="form-input w-full"
          rows="3"
          placeholder="Enter your address"
          readOnly
        />
      </div>
      <div>
        <Link to={`/address/${address.id}`}>
          <Button variant="warning" className="py-2 px-5">
            Update
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default AddressForm;
