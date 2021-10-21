import connectDB from "../../../utils/connectDB";
import EmployeeModel from "../../../models/EmployeeModel";
import valid from "../../../utils/valid";
import bcrypt from "bcrypt";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await register(req, res);
      break;
  }
};

const register = async (req, res) => {
  try {
    const { firstName, lastName, username, password, cf_password } = req.body;

    const errMsg = valid(firstName, lastName, username, password, cf_password);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const passwordHash = await bcrypt.hash(password, 12);

    console.log("passwordHash: " + passwordHash);

    const isExistEmployee = await EmployeeModel.findOne({ username });

    console.log("isExistEmployee: "+isExistEmployee);

    if (isExistEmployee)
      return res.status(400).json({ err: "This username is already exists." });

    const newEmployee = new EmployeeModel({
      firstName,
      lastName,
      username,
      password: passwordHash,
    });

    console.log("save user");
    await newEmployee.save((el, err) => {
      if (err) {
        console.log(err);
      }
    });

    console.log("newUSer: " + newEmployee);
    return res.json({ success: "Register Success!" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
