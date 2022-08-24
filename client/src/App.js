import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Navbar />
        <Header />
        <main className="flex flex-col justify-start items-start">
          <div className="w-full py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addloads" element={<Form />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
