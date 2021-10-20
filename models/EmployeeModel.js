import mongoose from "mongoose";

const EmployeeSchmema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      default: "",
    },
    department: {
      type: String,
      default: "Production",
    },
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

let DataSet =
  mongoose.models.employee || mongoose.model("employee", EmployeeSchmema);

export default DataSet;
