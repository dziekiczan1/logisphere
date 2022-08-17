import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const [loadData, setLoadData] = useState({
    shipper: {
      name: "",
      address: {
        city: "",
        street: "",
        zipcode: "",
      },
      date: "",
      time: "",
      extra: "",
    },
    consignee: {
      name: "",
      address: {
        city: "",
        street: "",
        zipcode: "",
      },
      date: "",
      time: "",
      extra: "",
    },
    weight: "",
    trailer: "",
    commodity: "",
    distance: "",
    price: "",
  });

  const handleSubmit = () => {};
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
          setLoadData({ ...loadData, shipper: { name: e.target.value } })
        }
        id="outlined-basic"
        label="ShipName"
        variant="outlined"
      />
      <TextField
        name="sCity"
        value={loadData.shipper.address.city}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { address: { city: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ShipCity"
        variant="outlined"
      />
      <TextField
        name="sStreet"
        value={loadData.shipper.address.street}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { address: { street: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ShipStreet"
        variant="outlined"
      />
      <TextField
        name="sZip"
        value={loadData.shipper.address.zipcode}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            shipper: { address: { zipcode: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ShipZipcode"
        variant="outlined"
      />
      <TextField
        name="sDate"
        value={loadData.shipper.date}
        onChange={(e) =>
          setLoadData({ ...loadData, shipper: { date: e.target.value } })
        }
        id="outlined-basic"
        label="ShipDate"
        variant="outlined"
      />
      <TextField
        name="sTime"
        value={loadData.shipper.time}
        onChange={(e) =>
          setLoadData({ ...loadData, shipper: { time: e.target.value } })
        }
        id="outlined-basic"
        label="ShipTime"
        variant="outlined"
      />
      <TextField
        name="sExtra"
        value={loadData.shipper.extra}
        onChange={(e) =>
          setLoadData({ ...loadData, shipper: { extra: e.target.value } })
        }
        id="outlined-basic"
        label="ShipExtra"
        variant="outlined"
      />

      <TextField
        name="cName"
        value={loadData.consignee.name}
        onChange={(e) =>
          setLoadData({ ...loadData, consignee: { name: e.target.value } })
        }
        id="outlined-basic"
        label="ConsigneeName"
        variant="outlined"
      />
      <TextField
        name="cCity"
        value={loadData.consignee.address.city}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { address: { city: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ConsigneeCity"
        variant="outlined"
      />
      <TextField
        name="cStreet"
        value={loadData.consignee.address.street}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { address: { street: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ConsigneeStreet"
        variant="outlined"
      />
      <TextField
        name="cZip"
        value={loadData.consignee.address.zipcode}
        onChange={(e) =>
          setLoadData({
            ...loadData,
            consignee: { address: { zipcode: e.target.value } },
          })
        }
        id="outlined-basic"
        label="ConsigneeZipcode"
        variant="outlined"
      />
      <TextField
        name="cDate"
        value={loadData.consignee.date}
        onChange={(e) =>
          setLoadData({ ...loadData, consignee: { date: e.target.value } })
        }
        id="outlined-basic"
        label="ConsigneeDate"
        variant="outlined"
      />
      <TextField
        name="cTime"
        value={loadData.consignee.time}
        onChange={(e) =>
          setLoadData({ ...loadData, consignee: { time: e.target.value } })
        }
        id="outlined-basic"
        label="ConsigneeTime"
        variant="outlined"
      />
      <TextField
        name="cExtra"
        value={loadData.consignee.extra}
        onChange={(e) =>
          setLoadData({ ...loadData, consignee: { extra: e.target.value } })
        }
        id="outlined-basic"
        label="ConsigneeExtra"
        variant="outlined"
      />

      <TextField
        name="weight"
        value={loadData.weight}
        onChange={(e) => setLoadData({ ...loadData, weight: e.target.value })}
        id="outlined-basic"
        label="Weight"
        variant="outlined"
      />
      <TextField
        name="trailer"
        value={loadData.trailer}
        onChange={(e) => setLoadData({ ...loadData, trailer: e.target.value })}
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
      />
      <TextField
        name="commodity"
        value={loadData.commodity}
        onChange={(e) =>
          setLoadData({ ...loadData, commodity: e.target.value })
        }
        id="outlined-basic"
        label="Commodity"
        variant="outlined"
      />
      <TextField
        name="distance"
        value={loadData.distance}
        onChange={(e) => setLoadData({ ...loadData, distance: e.target.value })}
        id="outlined-basic"
        label="Distance"
        variant="outlined"
      />
      <TextField
        name="price"
        value={loadData.price}
        onChange={(e) => setLoadData({ ...loadData, price: e.target.value })}
        id="outlined-basic"
        label="Price"
        variant="outlined"
      />
      <Button type="submit">Submit</Button>
      <Button onClick={clear}>Clear</Button>
    </Box>
  );
};

export default Form;
