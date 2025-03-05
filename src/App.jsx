import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./Routes";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <br></br>
      <AppRoutes />
      <br></br>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
