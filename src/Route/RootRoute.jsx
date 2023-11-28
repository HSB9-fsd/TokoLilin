import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "../Components/Pages/Home";
import Details from "../Components/Pages/Details";

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
