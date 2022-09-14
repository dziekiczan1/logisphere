import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  admin: {
    type: Boolean,
    default: false,
  },
  id: { type: String },
  offers: { type: [String], default: [] },
});

export default mongoose.model("User", userSchema);
