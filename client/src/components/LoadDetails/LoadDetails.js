import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";

const LoadDetails = (props) => {
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
      <div className="flex flex-col p-4">
        <div>
          <p className="text-black text-xl">
            Load #{props.load._id.slice(0, 8)}
          </p>
        </div>
        <p className="text-black">{props.load.shipper.city}</p>
      </div>
    </Dialog>
  );
};

export default LoadDetails;
