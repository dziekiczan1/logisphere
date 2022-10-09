import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Load from "./Load/Load";

const Loads = ({ setCurrentId, handleShow }) => {
  const loads = useSelector((state) => state.loads);
  return (
    <div className="border-4 border-2 border-gray-200 rounded-lg min-h-full">
      {!loads.length ? (
        <div className="w-full flex justify-center items-center p-8">
          <CircularProgress />
        </div>
      ) : (
        loads?.map((load) => (
          <div key={load._id}>
            <Load
              load={load}
              setCurrentId={setCurrentId}
              handleShow={handleShow}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Loads;
