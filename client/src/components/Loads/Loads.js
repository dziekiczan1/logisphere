import { useSelector } from "react-redux";
import Load from "./Load/Load";

const Loads = () => {
  const loads = useSelector((state) => state.loads);
  console.log(loads);
  return (
    <div>
      <Load />
    </div>
  );
};

export default Loads;
