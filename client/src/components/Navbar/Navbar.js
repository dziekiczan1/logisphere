import { Link } from "react-router-dom";
import { GiHolosphere } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between p-2 md:flex-row md:p-4">
      <div className="flex items-center justify-center">
        <GiHolosphere className="text-6xl text-sky-500" />
        <Link to="/">
          <span className="text-4xl tracking-wide uppercase font-semibold">
            Logisphere
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex flex-row justify-center gap-2 mt-4 md:gap-4 md:mt-0">
          <li class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium text-center">
            <Link to="/">Find loads</Link>
          </li>
          <li class="text-gray-300 text-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/myoffers">My offers</Link>
          </li>
          <li class="text-gray-300 text-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/myloads">My loads</Link>
          </li>
          <li class="text-gray-300 text-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            <Link to="/addloads">Post loads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
