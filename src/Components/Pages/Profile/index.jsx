import {Container} from "../../Atom";
import Template from "../../Templates";
import AddressForm from "../../Molecules/Profile/Address/address.form";
import BiodataProfile from "../../Molecules/Profile/Biodata";
import {Collapse} from "antd";
import HistoryProfile from "../../Molecules/Profile/History";
import useAddress from "../../../Hooks/useAddress";

function ProfilePage() {
  const address = useAddress();

  const items = [
    {
      key: "1",
      label: "Biodata",
      children: <BiodataProfile />,
    },
    {
      key: "2",
      label: "Address",
      children: <AddressForm address={address} />,
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
