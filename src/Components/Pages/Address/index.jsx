import {useDispatch} from "react-redux";
import {Button, Container, Typog} from "../../Atom";
import Template from "../../Templates";
import {Input} from "antd";
import {Link} from "react-router-dom";
import {useState} from "react";
import {postAddressAction} from "../../../store/action/address.action";

function UpdateAddressPage() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userId = 1;

  const [formData, setFormData] = useState({
    user_id: userId,
    city: "",
    postal_code: "",
    province: "",
    country: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAddressAction({formData, token}));
  };

  return (
    <Template>
      <Container>
        <Typog variant="h1Dark">Address Information</Typog>
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
            />
          </div>
          <div>
            <Button variant="warning" className="py-2 px-5 mr-4">
              Update
            </Button>
            <Link to="/profile">
              <Button variant="primary" className="py-2 px-5">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </Container>
    </Template>
  );
}

export default UpdateAddressPage;
