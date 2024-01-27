import {Button, Typog} from "../../../Atom";
import {Input} from "antd";
import useAuth from "../../../../Hooks/useAuth";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateUserAction} from "../../../../store/action/user.action";
import useToken from "../../../../Hooks/useToken";

function BiodataProfile() {
  const dispatch = useDispatch();
  const user = useAuth();
  const token = useToken();
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    img: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    avatar: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      email: user?.email || "",
      phone: user?.phone || "",
    }));
  }, [user]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value === "" ? "" : value}));
  };

  const hanleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
    const newAvatar = e.target.files[0];
    setPreview(URL.createObjectURL(newAvatar));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction({formData, id: user.id, token}));
  };

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="mb-8"
      >
        <div className="rounded-full overflow-hidden h-20 w-20 mb-4">
          <img
            src={preview || user?.avatar}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Typog variant="h1Dark">Biodata Information</Typog>
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Avatar
            </label>

            <Input
              type="file"
              id="avatar"
              name="avatar"
              onChange={hanleFileChange}
              required
            />
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
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
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
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="emial"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
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
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mt-5">
          <Button variant="warning" className="py-2 px-5">
            Update
          </Button>
        </div>
      </form>
    </>
  );
}

export default BiodataProfile;
