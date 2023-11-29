import Template from "../../Templates";

function index() {
  return (
    <Template>
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
