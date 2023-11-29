import Template from "../../Templates";
import OrganismHome from "../../Organism/Home";
// import Benefit from "../../Organism/Home/Benefit.jsx";
// import Testimonial from "../../Organism/Home/Testimonial.jsx";
import ComponentExample from "../Component";

function HomePages() {
  return (
    <Template>
      <OrganismHome />
      <ComponentExample />
      {/* <Benefit />
      <Testimonial /> */}
    </Template>
  );
}

export default HomePages;
