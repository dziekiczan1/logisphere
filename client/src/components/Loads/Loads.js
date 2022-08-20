import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Load from "./Load/Load";

const Loads = () => {
  const loads = useSelector((state) => state.loads);

  return !loads.length ? (
    <CircularProgress />
  ) : (
    loads.map((load) => (
      <div key={load._id}>
        <Load load={load} />
      </div>
    ))
  );
};

export default Loads;
