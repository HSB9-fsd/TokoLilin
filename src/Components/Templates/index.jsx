/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import Footer from "./Footer";

function Template({children}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className="relative mt-56">
        <Footer />
      </footer>
    </>
  );
}

export default Template;
