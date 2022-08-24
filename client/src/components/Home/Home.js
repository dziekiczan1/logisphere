import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import Loads from "../Loads/Loads";
import Form from "..//Form/Form";
import { getLoads } from "../../redux/loadSlice";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const Home = () => {
  const [currentId, setCurrentId] = useState();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getLoads());
  }, [currentId, dispatch]);

  return (
    <>
      <div className="px-4 sm:px-0">
        <Loads setCurrentId={setCurrentId} handleShow={handleShow} />
      </div>
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
    </>
  );
};

export default Home;
