/* eslint-disable react/prop-types */
import NavBar from "./NavBar";
import Footer from "./Footer";

function Template({children}) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className="relative md:mt-96 mt-[500px]">
        <Footer />
      </footer>
    </>
  );
}

export default Template;
