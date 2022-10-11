import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";

import { getLoads } from "../../redux/loadSlice";
import Loads from "../Loads/Loads";
import Form from "../Form/Form";
import Search from "../Search/Search";

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
      <Search />
      <div className="px-4 sm:px-0">
        <Loads setCurrentId={setCurrentId} handleShow={handleShow} />
      </div>
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
