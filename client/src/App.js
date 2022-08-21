import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Loads from "./components/Loads/Loads";
import Form from "./components/Form/Form";
import { getLoads } from "./redux/loadSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLoads());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="min-h-full">
        <nav className="bg-gray-800 text-white">
          <Navbar />
        </nav>

        <Header />
        <main className="flex justify-start items-start">
          <div className="w-full py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <Routes>
                <Route path="/" element={<Loads />} />
                <Route path="/addloads" element={<Form />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
