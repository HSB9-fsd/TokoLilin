import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Typog} from "../../Atom";
import Template from "../../Templates";
import {Input} from "antd";
import {Link, useParams} from "react-router-dom";
import {
  getUserAction,
  updateUserAction,
} from "../../../store/action/user.action";

function UpdateProfilePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const {id} = useParams();
  const newData = users.find((data) => data.id === parseInt(id));
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserAction(token));
  }, [dispatch, token]);

  const [formData, setFormData] = useState({
    img: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      first_name: newData?.first_name || "",
      last_name: newData?.last_name || "",
      email: newData?.email || "",
      phone: newData?.phone || "",
    }));
  }, [newData]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value === "" ? "" : value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({formData, id, token}));
  };

  if (!newData) {
    return console.log("");
  }

  return (
    <Template>
      <Container className="mb-20">
        <form onSubmit={handleSubmit}>
          <div className="rounded-full overflow-hidden h-20 w-20 mb-4">
            <img
              src={newData.img}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Typog variant="h1Dark">Biodata Information</Typog>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Avatar
              </label>
              <Input type="file" />
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                First Name
              </label>
              <Input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Last Name
              </label>
              <Input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Phone
              </label>
              <Input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
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
          </div>
        </form>
      </Container>
    </Template>
  );
}

export default UpdateProfilePage;
