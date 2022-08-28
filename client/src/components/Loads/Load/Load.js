import Button from "@mui/material/Button";
import {
  AiOutlineArrowRight,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteLoad } from "../../../redux/loadSlice";

const Load = ({ load, setCurrentId, handleShow }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const isAdmin = user?.result?.admin === true;

  return (
    <div className="flex flex-col md:flex-row md:gap-4 md:my-2 text-md md:text-lg md:border md:border-l-4 border-transparent md:hover:shadow-md md:active:border md:active:border-l-4 md:active:border-sky-500 md:active:bg-slate-100">
      <div className="flex flex-col md:flex-row md:items-center w-full md:w-1/2 px-2 py-1 md:p-2 bg-slate-100">
        <div className="flex flex-row w-full md:w-2/5">
          <div className="flex justify-center mr-2 md:hidden">
            <BsCircle className="text-lg md:hidden text-sky-700 mt-1" />
          </div>
          <div className="flex flex-col">
            <span>{load.shipper.city}</span>
            <span className="text-sm">
              {new Date(load.shipper.date).toLocaleDateString()} &nbsp;
              {load.shipper.time}
            </span>
          </div>
        </div>
        <div className="w-1/5 hidden md:flex">
          <AiOutlineArrowRight />
        </div>
        <div className="flex flex-row w-full md:w-2/5 mt-2 md:mt-0">
          <div className="flex justify-center mr-2 md:hidden">
            <BsCircleFill className="text-lg md:hidden text-sky-700 mt-1" />
          </div>
          <div className="flex flex-col">
            <span>{load.consignee.city}</span>
            <span className="text-sm">
              {new Date(load.consignee.date).toLocaleDateString()} &nbsp;
              {load.consignee.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-between w-full md:w-1/2 p-2 border-b-2 md:border-b-0 border-gray-200">
        <div className="w-1/3 md:w-1/5 border-r-2 border-gray-300 md:border-r-0">
          <span>{load.distance} miles</span>
        </div>
        <div className="w-1/3 md:w-1/5 pl-2 border-r-2 border-gray-300 md:border-r-0">
          <span>{load.weight} lbs</span>
        </div>
        <div className="w-1/3 md:w-1/5 pl-2 border-r-2 border-gray-300 md:border-r-0">
          <span>{load.trailer}</span>
        </div>
        <div className="w-1/2 md:w-1/5 md:pl-2 font-semibold flex justify-between items-center md:justify-start md:flex-col md:items-end">
          <span>{load.price} USD</span>
          <span className="text-sky-500 text-sm">Book or Offer</span>
        </div>
        {isAdmin ? (
          <div className="flex flex-row justify-end md:flex-col md:justify-start md:items-center w-1/2 md:w-1/6">
            <Button
              onClick={() => {
                handleShow();
                setCurrentId(load._id);
              }}
              className="w-2/3"
            >
              <AiOutlineEdit className="text-lg" />
            </Button>
            <Button
              onClick={() => dispatch(deleteLoad(load._id))}
              className="w-2/3"
            >
              <AiOutlineDelete className="text-lg" />
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Load;
