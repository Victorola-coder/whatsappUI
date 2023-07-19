import Navbar from "./assets/components/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={"hello"} />
        <Route path="/about" element={"about"} />
        <Route path="/contact" element={"contact"} />
        <Route path="*" element={"404"} />
      </Routes>
    </div>
  );
};

export default App;
