import { prisma } from "../config/db.js";
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            sucess: false,
            message: "Fill all the feilds"
        })
    }
    const userExist = await prisma.user.findUnique({ where: { email } })
    if (userExist) {
        return res.status(400).json({
            sucess: false,
            message: "User already registered with email"
        })
    }
    //password hashing
    const salt = bycrypt.genSaltSync(10);
    const hashedPassword = await bycrypt.hash(password, salt)
    const user = await prisma.user.create({
        data: {
            name, email, password: hashedPassword
        }
    })
    res.status(200).json({
        sucess: true, data: {
            id: user.id,
            name, email
        }
    })




}
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            sucess: false,
            message: "Fill all the feilds"
        })
    }
    const userExist = await prisma.user.findUnique({ where: { email } })
    if (!userExist) {
        return res.status(400).json({
            sucess: false,
            message: "User not found"
        })
    }
    const isPasswordValid = await bycrypt.compare(password, userExist.password)
    if (!isPasswordValid) {
        return res.status(400).json({
            sucess: false,
            message: "Invalid email or password "
        })
    }
    const token = jwt.sign({ id: userExist.id, name: userExist.name, email: userExist.email }, process.env.JWT_SECRET, { expiresIn: '1d' })
    res.status(200).json({
        sucess: true, data: {
            id: userExist.id,
            name: userExist.name,
            email: userExist.email,
            token
        }
    })


}
export { registerUser, loginUser }