import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Property from "./pages/Property";
import User from "./pages/User";
import Host from "./pages/Host";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property />} />
      <Route path="/user" element={<User />} />
      <Route path="/host" element={<Host />} />
    </Routes>
  );
};

export default AppRoutes;
