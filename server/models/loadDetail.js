import mongoose from "mongoose";

const AddressSchema = mongoose.Schema({
  city: String,
  street: String,
  zipcode: String,
});

const loadSchema = mongoose.Schema({
  shipper: {
    name: String,
    address: {
      type: AddressSchema,
      required: true,
    },
    date: Date,
    time: String,
    extra: String,
  },
  consignee: {
    name: String,
    address: {
      type: AddressSchema,
      required: true,
    },
    date: Date,
    time: String,
    extra: String,
  },
  weight: Number,
  trailer: String,
  commodity: String,
  distance: Number,
  price: Number,
});

const LoadDetail = mongoose.model("LoadDetail", loadSchema);

export default LoadDetail;
