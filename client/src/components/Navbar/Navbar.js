import { GiHolosphere } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between p-4 md:flex-row">
      <div className="flex items-center justify-center">
        <GiHolosphere className="text-6xl text-sky-500" />
        <span className="text-4xl tracking-wide uppercase font-semibold">
          Logisphere
        </span>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-col justify-center md:flex-row">
          <li class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium text-center">
            <a href="#">Find loads</a>
          </li>
          <li class="text-gray-300 text-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <a href="#">My offers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
