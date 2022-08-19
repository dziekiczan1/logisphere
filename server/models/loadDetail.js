import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
  city: String,
  street: String,
  zipcode: String,
});

const loadSchema = mongoose.Schema({
  shipper: {
    name: String,
    city: String,
    street: String,
    zipcode: String,
    date: Date,
    time: String,
    extra: String,
  },
  consignee: {
    name: String,
    city: String,
    street: String,
    zipcode: String,
    date: Date,
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
