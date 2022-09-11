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
        <div className="max-h-[50vh] mb-4 overflow-y-auto">
          <div className="flex flex-col w-full px-2 py-1 bg-slate-100">
            <div className="flex flex-row w-full ">
              <div className="flex justify-center mr-2">
                <BsCircle className="text-lg text-sky-700 mt-1" />
              </div>
              <div className="flex flex-col">
                <span className="uppercase">Pickup</span>
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
          <div className="h-[600px] bg-slate">ss</div>
        </div>
        <div className="sticky bottom-0 flex gap-4">
          <Button variant="contained" className="w-1/2">
            Book ({props.load.price} USD)
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
