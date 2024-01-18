import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserAction} from "../../../../store/action/user.action";
import {getAddressAction} from "../../../../store/action/address.action";
import {Button, Typog} from "../../../Atom";
import {Input} from "antd";
import {Link} from "react-router-dom";

function BiodataProfile() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUserAction(token));
    dispatch(getAddressAction(token));
  }, [dispatch, token]);
  return (
    <>
      {users.map((item) => (
        <form key={item.id} className="mb-8">
          <div className="rounded-full overflow-hidden h-20 w-20 mb-4">
            <img
              src={item.img}
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
                Full Name
              </label>
              <Input value={`${item.first_name} ${item.last_name}`} />
            </div>
            <div>
              <label
                htmlFor="emial"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Email
              </label>
              <Input value={item.email} />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-600 mb-1"
              >
                Phone
              </label>
              <Input value={item.phone} />
            </div>
          </div>
          <div className="mt-5">
            <Link to={`/profileUpdate/${item.id}`}>
              <Button variant="warning" className="py-2 px-5">
                Update
              </Button>
            </Link>
          </div>
        </form>
      ))}
    </>
  );
}

export default BiodataProfile;
