import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "../Components/Pages/Home";
import Details from "../Components/Pages/Details/revisi";
import Cart from "../Components/Pages/Cart";
import ProfilePage from "../Components/Pages/Profile";
import UpdateProfilePage from "../Components/Pages/Update Profile";
import UpdateAddressPage from "../Components/Pages/Address";

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profileUpdate/:id" element={<UpdateProfilePage />} />
        <Route path="/address/:id" element={<UpdateAddressPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
