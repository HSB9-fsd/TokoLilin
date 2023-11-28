import Template from "../../Templates";
// import OrganismHome from "../../Organism/Home";
// import ComponentExample from "../Component";

function index() {
  return (
    <Template>
      {/* <OrganismHome />
      <ComponentExample /> */}
      <Main />
    </Template>
  );
}

function Main() {
  return (
    <div className="center mt-10">
      <h5 className="text-center">Your cart Items</h5>
    </div>
  );
}

export default index;
