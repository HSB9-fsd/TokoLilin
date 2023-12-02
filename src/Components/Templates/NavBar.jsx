import { useState } from "react";
import { data } from "./db";
import { Container } from "../Atom";
import { FaRegUser } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";

function NavBar() {
  // const {zindex="", position="none"} = props;
  const [isVisible, setIsvisible] = useState(false);
  const currentPath = window.location.pathname;

  const toggleSidebar = () => {
    setIsvisible(!isVisible);
  };

  return (
    <nav className="h-16 sticky z-20 w-full bg-white/30 backdrop-blur-lg top-0">
      <Container className="h-full flex justify-between relative">
        <div className="flex sm:hidden text-3xl">
          <button onClick={toggleSidebar}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className="flex items-center h-16">
          <img src="../img/logoL.png" alt="Logo" />
        </div>
        <ul className={`ul-responsive ${isVisible ? "flex  " : "hidden"}`}>
          {data.map((data) => (
            <li key={data.id}>
              <a
                href={data.path}
                className={`a-hover ${
                  currentPath === data.path ? "active" : ""
                }`}
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 justify-end items-center text-2xl">
          <button className="hover:bg-primary p-2 hover:text-white rounded-md">
            <FaRegUser />
          </button>
          <button className="hover:bg-primary p-2 hover:text-white rounded-md">
            <SlBasket />
          </button>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
