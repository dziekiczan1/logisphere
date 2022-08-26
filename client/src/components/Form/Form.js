import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLoad, updateLoad } from "../../redux/loadSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

const Form = ({ currentId, setCurrentId }) => {
  const load = useSelector((state) =>
    currentId ? state.loads.find((l) => l._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (load) setLoadData(load);
  }, [load]);

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
    trailer: "",
    weight: "",
    distance: "",
    commodity: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateLoad(currentId, loadData));
    } else {
      dispatch(createLoad(loadData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setLoadData({
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
      trailer: "",
      weight: "",
      distance: "",
      commodity: "",
      price: "",
    });
  };

  if (!user?.result?.name) {
    return <h2 className="text-warning">Please Sign In.</h2>;
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className="flex flex-col w-full"
    >
      <div className="bg-gray-100 px-4 py-2 my-2 ">
        <h4 className="text-lg font-bold">Shipper</h4>
        <div className="gap-4 flex flex-wrap justify-between mt-6">
          <TextField
            name="shipperName"
            value={loadData.shipper.name}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                shipper: { ...loadData.shipper, name: e.target.value },
              })
            }
            id="outlined-basic"
            label="Shipper Name"
            variant="outlined"
            className="w-full"
          />

          <TextField
            name="shipperCity"
            value={loadData.shipper.city}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                shipper: { ...loadData.shipper, city: e.target.value },
              })
            }
            id="outlined-basic"
            label="Pickup City"
            variant="outlined"
            className="w-2/3"
          />

          <TextField
            name="shipperZipcode"
            value={loadData.shipper.zipcode}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                shipper: { ...loadData.shipper, zipcode: e.target.value },
              })
            }
            id="outlined-basic"
            label="Zip Code"
            variant="outlined"
            className="w-1/4"
          />

          <TextField
            name="shipperStreet"
            value={loadData.shipper.street}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                shipper: { ...loadData.shipper, street: e.target.value },
              })
            }
            id="outlined-basic"
            label="Shipper Street"
            variant="outlined"
            className="w-full"
          />
          <div className="w-full flex gap-4">
            <TextField
              name="shipperDate"
              type="date"
              value={loadData.shipper.date}
              onChange={(e) =>
                setLoadData({
                  ...loadData,
                  shipper: { ...loadData.shipper, date: e.target.value },
                })
              }
              id="outlined-basic"
              variant="outlined"
              className="w-1/4"
            />

            <TextField
              name="shipperTime"
              type="time"
              value={loadData.shipper.time}
              onChange={(e) =>
                setLoadData({
                  ...loadData,
                  shipper: { ...loadData.shipper, time: e.target.value },
                })
              }
              id="outlined-basic"
              variant="outlined"
              className="w-1/4"
            />
          </div>

          <TextField
            name="shipperExtra"
            value={loadData.shipper.extra}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                shipper: { ...loadData.shipper, extra: e.target.value },
              })
            }
            id="outlined-basic"
            label="Extra Information"
            variant="outlined"
            className="w-full"
          />
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2 my-2">
        <h4 className="text-lg font-bold">Consignee</h4>
        <div className="gap-4 flex flex-wrap justify-between mt-6">
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
            className="w-full"
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
            label="Delivery City"
            variant="outlined"
            className="w-2/3"
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
            label="Zip Code"
            variant="outlined"
            className="w-1/4"
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
            className="w-full"
          />
          <div className="w-full flex gap-4">
            <TextField
              name="consigneeDate"
              type="date"
              value={loadData.consignee.date}
              onChange={(e) =>
                setLoadData({
                  ...loadData,
                  consignee: { ...loadData.consignee, date: e.target.value },
                })
              }
              id="outlined-basic"
              variant="outlined"
              className="w-1/4"
            />

            <TextField
              name="consigneeTime"
              type="time"
              value={loadData.consignee.time}
              onChange={(e) =>
                setLoadData({
                  ...loadData,
                  consignee: { ...loadData.consignee, time: e.target.value },
                })
              }
              id="outlined-basic"
              variant="outlined"
              className="w-1/4"
            />
          </div>

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
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-gray-100 px-4 py-2 my-2">
        <h4 className="text-lg font-bold">Freight Information</h4>
        <div className="gap-4 flex flex-wrap justify-between mt-6">
          <TextField
            name="trailerType"
            value={loadData.trailer}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                trailer: e.target.value,
              })
            }
            id="outlined-basic"
            label="Trailer Type"
            variant="outlined"
            className="w-1/4"
          />
          <TextField
            name="weight"
            value={loadData.weight}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                weight: e.target.value,
              })
            }
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            className="w-1/4"
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
            }}
          />

          <TextField
            name="distance"
            value={loadData.distance}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                distance: e.target.value,
              })
            }
            id="outlined-basic"
            label="Distance"
            variant="outlined"
            className="w-1/4"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">miles</InputAdornment>
              ),
            }}
          />

          <TextField
            name="commodity"
            value={loadData.commodity}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                commodity: e.target.value,
              })
            }
            id="outlined-basic"
            label="Commodity"
            variant="outlined"
            className="w-1/4"
          />

          <TextField
            name="price"
            value={loadData.price}
            onChange={(e) =>
              setLoadData({
                ...loadData,
                price: e.target.value,
              })
            }
            id="outlined-basic"
            label="Price"
            variant="outlined"
            className="w-1/4"
            InputProps={{
              endAdornment: <InputAdornment position="end">$</InputAdornment>,
            }}
          />
        </div>
      </div>

      <Button type="submit">Submit</Button>
      <Button onClick={clear}>Clear</Button>
    </Box>
  );
};

export default Form;
