import {useState} from "react";
import {data} from "./db";
import {Container} from "../Atom";
import {FaRegUser} from "react-icons/fa6";
import {SlBasket} from "react-icons/sl";
import {GiHamburgerMenu} from "react-icons/gi";
import {Link} from "react-router-dom";
import useToken from "../../Hooks/useToken";

function NavBar() {
  const [isVisible, setIsvisible] = useState(false);
  const token = useToken();
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

        {!token ? (
          <Link to="/register">
            <button className="rounded-md mt-4">Register</button>
          </Link>
        ) : (
          <div className="flex gap-4 justify-end items-center text-2xl">
            <Link to="/profile">
              <button className="hover:bg-primary p-2 hover:text-white rounded-md">
                <FaRegUser />
              </button>
            </Link>
            <a
              href="/cart"
              className="hover:bg-primary p-2 hover:text-white rounded-md"
            >
              <SlBasket />
            </a>
          </div>
        )}
      </Container>
    </nav>
  );
}

export default NavBar;
