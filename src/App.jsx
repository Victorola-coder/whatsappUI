import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={""} />
        <Route path="/privacy" element={"privacy"} />
        <Route path="/help" element={"faqs and help"} />
        <Route path="/blog" element={"blogs"} />
        <Route path="/business" element={"business"} />
        <Route path="/whatsapp-web" element={"web whatsapp"} />
        <Route path="*" element={"404"} />
      </Routes>
    </div>
  );
};

export default App;
