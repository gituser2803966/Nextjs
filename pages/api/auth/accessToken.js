import connectDB from '../../../utils/connectDB';
import EmployeeModel from  '../../../models/EmployeeModel';
import jwt from 'jsonwebtoken';
import { createAccessToken } from '../../../utils/generateToken';

connectDB();

export default async (req, res) => {
    try{
        const rf_token = req.cookies.refreshToken;
        
        if(!rf_token) return res.status(400).json({err: 'Please login now!'})

        const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if(!result) return res.status(400).json({err: 'Your token is incorrect or has expired.'})

        const employee = await EmployeeModel.findById(result.id)
        if(!employee) return res.status(400).json({err: 'User does not exist.'})

        const access_token = createAccessToken({id: employee._id})
        res.json({
            access_token,
            user:employee
        })
    }catch(err){
        console.log("errrrrrrrrrr");
        return res.status(500).json({err: err.message})
    }
}