import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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

        <header className="bg-white shadow">
          <div className=" mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl tracking-tight font-bold text-gray-900">
              Available loads
            </h1>
          </div>
        </header>
        <main className="flex justify-start items-start">
          <div className="w-5/6 mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-2 border-gray-200 rounded-lg min-h-full">
                <Routes>
                  <Route path="/" element={<Loads />} />
                  <Route path="/addloads" element={<Form />} />
                </Routes>
              </div>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
