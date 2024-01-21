import {Button, Typog} from "../../../Atom";
import {Input} from "antd";
import {Link} from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";

function BiodataProfile() {
  const user = useAuth();

  return (
    <>
      <form className="mb-8">
        <div className="rounded-full overflow-hidden h-20 w-20 mb-4">
          <img
            src={user.avatar}
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
            <Input value={`${user.first_name} ${user.last_name}`} />
          </div>
          <div>
            <label
              htmlFor="emial"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Email
            </label>
            <Input value={user.email} />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Phone
            </label>
            <Input value={user.phone} />
          </div>
        </div>
        <div className="mt-5">
          <Link to={`/profileUpdate/${user.id}`}>
            <Button variant="warning" className="py-2 px-5">
              Update
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default BiodataProfile;
