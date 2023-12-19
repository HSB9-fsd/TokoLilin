import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../Components/Pages/Home";
import Details from "../Components/Pages/Details/revisi";
import Cart from "../Components/Pages/Cart";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
