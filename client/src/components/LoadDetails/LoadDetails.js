import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

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
      <div className="flex flex-col p-4 py-2">
        <div className="sticky top-0 flex flex-row justify-between items-center">
          <p className="text-black text-xl">
            Load #{props.load._id.slice(0, 8)}
          </p>
          <Button onClick={props.onClose}>
            <CloseIcon className="text-lg" />
          </Button>
        </div>
        <hr className="py-2" />
        <div>
          <p className="text-black">{props.load.shipper.city}</p>
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
