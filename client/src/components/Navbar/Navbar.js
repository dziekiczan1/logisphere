import { GiHolosphere } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center p-4">
      <GiHolosphere className="text-6xl text-sky-500" />
      <span className="text-4xl tracking-wide uppercase font-semibold">
        Logisphere
      </span>
    </div>
  );
};

export default Navbar;
