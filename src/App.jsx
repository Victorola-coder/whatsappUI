import Navbar from "./assets/components/Navbar/navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div>
    <Navbar />
    <Routes>
      <Route path="/pricing" element={"pricing"} />
    </Routes>
  </div>;
};

export default App;
