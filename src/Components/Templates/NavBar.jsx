import { useState } from "react";
import { data } from "./db";
import { Container } from "../Atom";
import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  const [isVisible, setIsvisible] = useState(false);
  const currentPath = window.location.pathname;

  const toggleSidebar = () => {
    setIsvisible(!isVisible);
  };

  return (
    <nav>
      <Container className="h-16 flex justify-between items-center">
        <div className="">
          <img src="../img/logoL.png" alt="Logo" />
        </div>
        <ul
          className={`sm:flex justify-between gap-3  ${
            isVisible ? "flex" : "hidden"
          }`}
        >
          {data.map((data) => (
            <li key={data.id}>
              <a
                href={data.path}
                className="hover:border-b-2 border-primary hover:transition-all duration-300"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
        <div className={`sm:flex gap-2 ${isVisible ? "flex" : "hidden"}`}>
          <FaRegUser />
          <SlBasket />
        </div>
        <div className="flex sm:hidden">
          <button onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
