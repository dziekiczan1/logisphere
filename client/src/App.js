import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Loads from "./components/Loads/Loads";
import Form from "./components/Form/Form";
import { getLoads } from "./redux/loadSlice";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const App = () => {
  const [currentId, setCurrentId] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getLoads());
  }, [currentId, dispatch]);

  return (
    <BrowserRouter>
      <div className="min-h-full">
        <nav className="bg-gray-800 text-white">
          <Navbar />
        </nav>
        <Header />
        <main className="flex justify-start items-start">
          <div className="w-full py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <Routes>
                <Route
                  path="/"
                  element={<Loads setCurrentId={setCurrentId} />}
                />
                <Route
                  path="/addloads"
                  element={
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                  }
                />
              </Routes>
            </div>
          </div>
        </main>

        <Button onClick={handleShow}>Click me</Button>
        <Drawer
          anchor="right"
          open={show}
          onClose={handleClose}
          PaperProps={{
            sx: { width: "45%" },
          }}
        >
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Drawer>
      </div>
    </BrowserRouter>
  );
};

export default App;
