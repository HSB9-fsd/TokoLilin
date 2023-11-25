import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePages from "../Components/Pages/Home";

function RootRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoute;
