import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Typog} from "../../Atom";
import Template from "../../Templates";
import {getUserAction} from "../../../store/action/user.action";
import {getAddressAction} from "../../../store/action/address.action";
import Empty from "../../Molecules/Profile/Address/empty";
import AddressForm from "../../Molecules/Profile/Address/address.form";
import BiodataProfile from "../../Molecules/Profile/Biodata";
import {Collapse} from "antd";
import HistoryProfile from "../../Molecules/Profile/History";

function ProfilePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const address = useSelector((state) => state.address.data);
  const token = localStorage.getItem("token");
  const user_ids = users.map((user) => user.id);
  const newAddress = address.find((data) => user_ids.includes(data.user_id));

  useEffect(() => {
    dispatch(getUserAction(token));
    dispatch(getAddressAction(token));
  }, [dispatch, token]);

  const items = [
    {
      key: "1",
      label: "Biodata",
      children: <BiodataProfile />,
    },
    {
      key: "2",
      label: "Address",
      children: <>{!newAddress ? <Empty /> : <AddressForm />}</>,
    },
    {
      key: "3",
      label: "History",
      children: <HistoryProfile />,
    },
  ];

  return (
    <Template>
      <Container className="my-10">
        <Collapse accordion items={items} defaultActiveKey={["1"]} />
      </Container>
    </Template>
  );
}

export default ProfilePage;
