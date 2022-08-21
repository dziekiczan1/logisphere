import mongoose from "mongoose";

const loadSchema = mongoose.Schema({
  shipper: {
    name: String,
    city: String,
    street: String,
    zipcode: String,
    date: String,
    time: String,
    extra: String,
  },
  consignee: {
    name: String,
    city: String,
    street: String,
    zipcode: String,
    date: String,
    time: String,
    extra: String,
  },
  trailer: String,
  weight: Number,
  distance: Number,
  commodity: String,
  price: Number,
});

const LoadDetail = mongoose.model("LoadDetail", loadSchema);

export default LoadDetail;
