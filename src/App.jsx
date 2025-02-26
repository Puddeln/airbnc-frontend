import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <br></br>
      <AppRoutes />
      <br></br>
      <Footer />
    </>
  );
}

export default App;
