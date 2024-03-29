import {useDispatch} from "react-redux";
import {Button} from "../../Atom";
import {Input} from "antd";
import {useEffect, useState} from "react";
import {updateAddressAction} from "../../../store/action/address.action";
import useAddress from "../../../Hooks/useAddress";
import useToken from "../../../Hooks/useToken";

function UpdateAddressPage() {
  const address = useAddress();
  const dispatch = useDispatch();
  const addressData = useAddress();
  const token = useToken();

  const [formData, setFormData] = useState({
    address: "",
    city: "",
    postal_code: "",
    province: "",
    country: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      address: addressData?.address || "",
      city: addressData?.city || "",
      postal_code: addressData?.postal_code || "",
      province: addressData?.province || "",
      country: addressData?.country || "",
    }));
  }, [addressData]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAddressAction({formData, token, id: address.id}));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-20">
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
          value={formData.city}
          onChange={handleInputChange}
          className="form-input w-full"
          placeholder="Enter your city"
          required
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
          value={formData.postal_code}
          onChange={handleInputChange}
          className="form-input w-full"
          placeholder="Enter your postal code"
          required
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
          value={formData.province}
          onChange={handleInputChange}
          className="form-input w-full"
          placeholder="Enter your province"
          required
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
          value={formData.country}
          onChange={handleInputChange}
          className="form-input w-full"
          placeholder="Enter your country"
          required
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
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="form-input w-full"
          rows="3"
          placeholder="Enter your address"
          required
        />
      </div>
      <div>
        <Button variant="warning" className="py-2 px-5 mr-4">
          Update
        </Button>
      </div>
    </form>
  );
}

export default UpdateAddressPage;
