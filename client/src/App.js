import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import LoadDetails from "./components/LoadDetails/LoadDetails";
import Auth from "./components/Auth/Auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <div className="min-h-full">
        <Navbar />
        <Header />
        <main className="flex flex-col justify-start items-start">
          <div className="w-full py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loads" element={<Home />} />
              <Route path="/loads/:id" element={<LoadDetails />} />
              <Route path="/addloads" element={<Form />} />
              <Route
                path="/auth"
                element={!user ? <Auth /> : <Navigate to="/loads" />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
