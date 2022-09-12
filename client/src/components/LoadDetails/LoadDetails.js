import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const LoadDetails = (props) => {
  console.log(props);
  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      {...props}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      PaperProps={{
        sx: { width: "80%" },
      }}
    >
      <div className="flex flex-col p-4 py-2 overflow-hidden">
        <div className="sticky top-0 flex flex-row justify-between items-center bg-white">
          <p className="text-black text-xl">
            Load #{props.load._id.slice(0, 8)}
          </p>
          <Button onClick={props.onClose}>
            <CloseIcon className="text-lg" />
          </Button>
        </div>
        <hr className="py-2" />
        <div className="max-h-[70vh] mb-4 overflow-y-auto">
          <div className="flex flex-col w-full px-2 py-1 bg-slate-100">
            <div className="flex flex-row w-full ">
              <div className="flex justify-center mr-2">
                <BsCircle className="text-lg text-sky-700 mt-1" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase">Pickup</span>
                <span className="italic">{props.load.shipper.name}</span>
                <span className="font-semibold">{props.load.shipper.city}</span>
                <span className="text-sm">
                  {new Date(props.load.shipper.date).toLocaleDateString()}{" "}
                  &nbsp; &#8226; &nbsp;
                  {props.load.shipper.time}
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full mt-2">
              <div className="flex justify-center mr-2 ">
                <BsCircleFill className="text-lg text-sky-700 mt-1" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase">Dropoff</span>
                <span className="italic">{props.load.consignee.name}</span>
                <span className="font-semibold">
                  {props.load.consignee.city}
                </span>
                <span className="text-sm">
                  {new Date(props.load.consignee.date).toLocaleDateString()}{" "}
                  &nbsp; &#8226; &nbsp;{props.load.consignee.time}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-2 px-4">
            <span className="text-lg font-medium">Requirements</span>
            <div className="flex flex-row">
              <div className="flex flex-col my-4 w-1/2">
                <span className="text-sm">Equipment</span>
                <span>{props.load.trailer}</span>
                <span className="text-sm mt-4">Team Only</span>
                <span>{props.load.trailer}</span>
                <span className="text-sm mt-4">Drop trailer</span>
                <span>{props.load.trailer}</span>
              </div>
              <div className="flex flex-col my-4 w-1/2">
                <span className="text-sm">Weight</span>
                <span>
                  {props.load.weight.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}{" "}
                  lbs
                </span>
                <span className="text-sm mt-4">Distance</span>
                <span>
                  {props.load.distance.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                  })}{" "}
                  miles
                </span>
              </div>
            </div>
            <hr className="py-2" />
          </div>
          <div className="mt-2 px-4 flex flex-col">
            <span className="text-lg font-medium">Commodity</span>
            <span className="my-4">{props.load.commodity}</span>
            <hr className="py-2" />
          </div>
        </div>
        <div className="sticky bottom-0 flex gap-4">
          <Button variant="contained" className="w-1/2">
            Book (
            {props.load.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}{" "}
            USD)
          </Button>
          <Button variant="outlined" className="w-1/2">
            Make Offer
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default LoadDetails;
