import connectDB from "../../../utils/connectDB";
import EmployeeModel from "../../../models/EmployeeModel";
import bcrypt from "bcryptjs";
import { createAccessToken,createRefreshToken } from '../../../utils/generateToken';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await login(req, res);
      break;
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const employee = await EmployeeModel.findOne({ username });

    if (!employee)
    return res.status(400).json({ err: "Username does not exists." });

    const isPasswordMatch = await bcrypt.compare(password, employee.password);
    if(!isPasswordMatch)  return res.status(400).json({ err: "Incorrect password." });


    const access_token = createAccessToken({id:employee._id});
    const refresh_token = createRefreshToken({id:employee._id});

    return res.json({ 
      success: "login Success!",
      user:employee,
      access_token,
      refresh_token
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
