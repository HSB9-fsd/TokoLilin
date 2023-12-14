import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "../Components/Pages/Home";
import Details from "../Components/Pages/Details/revisi";
import Cart from "../Components/Pages/Cart";

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
