import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addloads" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
