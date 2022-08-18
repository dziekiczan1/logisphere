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
    consignee: {
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
    <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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

      <TextField
        name="consigneeName"
        value={loadData.consignee.name}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, name: e.target.value },
          })
        }
        id="outlined-basic"
        label="Consignee Name"
        variant="outlined"
      />

      <TextField
        name="consigneeCity"
        value={loadData.consignee.city}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, city: e.target.value },
          })
        }
        id="outlined-basic"
        label="Consignee City"
        variant="outlined"
      />

      <TextField
        name="consigneeStreet"
        value={loadData.consignee.street}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, street: e.target.value },
          })
        }
        id="outlined-basic"
        label="Consignee Street"
        variant="outlined"
      />

      <TextField
        name="consigneeZipcode"
        value={loadData.consignee.zipcode}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, zipcode: e.target.value },
          })
        }
        id="outlined-basic"
        label="Consignee Zipcode"
        variant="outlined"
      />

      <TextField
        name="consigneeDate"
        value={loadData.consignee.date}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, date: e.target.value },
          })
        }
        id="outlined-basic"
        label="Delivery Date"
        variant="outlined"
      />

      <TextField
        name="consigneeTime"
        value={loadData.consignee.time}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, time: e.target.value },
          })
        }
        id="outlined-basic"
        label="Delivery Time"
        variant="outlined"
      />

      <TextField
        name="consigneeExtra"
        value={loadData.consignee.extra}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { ...loadData.consignee, extra: e.target.value },
          })
        }
        id="outlined-basic"
        label="Extra Information"
        variant="outlined"
      />

      <Button type="submit">Submit</Button>
      <Button onClick={clear}>Clear</Button>
    </Box>
  );
};

export default Form;
