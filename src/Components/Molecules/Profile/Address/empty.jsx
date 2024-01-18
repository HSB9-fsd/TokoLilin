import {Link} from "react-router-dom";
import {Input} from "antd";
import {Button} from "../../../Atom";

function Empty() {
  return (
    <form className="mb-20">
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
          className="form-input w-full"
          rows="3"
          placeholder="Enter your address"
          readOnly
        />
      </div>
      <div>
        <Link to="/address">
          <Button variant="primary" className="py-2 px-5">
            Add address
          </Button>
        </Link>
      </div>
    </form>
  );
}

export default Empty;
