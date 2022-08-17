import { useState } from "react";
import { useDispatch } from "react-redux";
import { createLoad } from "../../redux/loadSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const dispatch = useDispatch();

  const [loadData, setLoadData] = useState({
    shipper: {
      name: "",
      city: "",
      street: "",
      zipcode: "",
      date: "",
      time: "",
      extra: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createLoad(loadData));
  };

  const clear = () => {};
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        name="sName"
        value={loadData.shipper.name}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, name: e.target.value },
          })
        }
        id="outlined-basic"
        label="ShipName"
        variant="outlined"
      />

      <TextField
        name="sCity"
        value={loadData.shipper.city}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, city: e.target.value },
          })
        }
        id="outlined-basic"
        label="ShipCity"
        variant="outlined"
      />

      <TextField
        name="sStreet"
        value={loadData.shipper.street}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, street: e.target.value },
          })
        }
        id="outlined-basic"
        label="Shipstreert"
        variant="outlined"
      />

      <TextField
        name="sZipcode"
        value={loadData.shipper.zipcode}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, zipcode: e.target.value },
          })
        }
        id="outlined-basic"
        label="shipzipcode"
        variant="outlined"
      />

      <TextField
        name="sDate"
        value={loadData.shipper.date}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, date: e.target.value },
          })
        }
        id="outlined-basic"
        label="shipdate"
        variant="outlined"
      />

      <TextField
        name="sTime"
        value={loadData.shipper.time}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, time: e.target.value },
          })
        }
        id="outlined-basic"
        label="shiptime"
        variant="outlined"
      />

      <TextField
        name="sExtra"
        value={loadData.shipper.extra}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { ...loadData.shipper, extra: e.target.value },
          })
        }
        id="outlined-basic"
        label="shipextra"
        variant="outlined"
      />

      <Button type="submit">Submit</Button>
      <Button onClick={clear}>Clear</Button>
    </Box>
  );
};

export default Form;
