import { AiOutlineArrowRight } from "react-icons/ai";

const Load = ({ load }) => {
  return (
    <div className="flex gap-4 p-4 my-2 border border-l-4 border-transparent hover:shadow-md active:border active:border-l-4 active:border-sky-500">
      <div className="flex items-center w-1/2 p-2 bg-slate-100">
        <div className="flex flex-col w-2/5">
          <span>{load.shipper.city}</span>
          <span className="text-sm">
            {new Date(load.shipper.date).toLocaleDateString()} &nbsp;
            {load.shipper.time}
          </span>
        </div>
        <div className="w-1/5">
          <AiOutlineArrowRight />
        </div>
        <div className="flex flex-col w-2/5">
          <span>{load.consignee.city}</span>
          <span className="text-sm">
            {new Date(load.consignee.date).toLocaleDateString()} &nbsp;
            {load.consignee.time}
          </span>
        </div>
      </div>
      <div className="flex justify-between w-1/2 p-2">
        <div>
          <span>{load.distance} miles</span>
        </div>
        <div>
          <span>{load.weight} lbs</span>
        </div>
        <div>
          <span>{load.trailer}</span>
        </div>
        <div>
          <span className="font-semibold">{load.price} USD</span>
        </div>
      </div>
    </div>
  );
};

export default Load;
