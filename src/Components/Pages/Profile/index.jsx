import {Container} from "../../Atom";
import Template from "../../Templates";
import BiodataProfile from "../../Molecules/Profile/Biodata";
import {Collapse} from "antd";
import HistoryProfile from "../../Molecules/Profile/History";
import UpdateAddressPage from "../Address";

function ProfilePage() {
  const items = [
    {
      key: "1",
      label: "Biodata",
      children: <BiodataProfile />,
    },
    {
      key: "2",
      label: "Address",
      children: <UpdateAddressPage />,
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
