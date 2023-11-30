//Autenticacion del usuario

import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


//Regristro de Usuario
export const register = async (req,res) => {
    const {userName,email,password} = req.body;

    try {

        //encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            userName,
            email,
            password: passwordHash,
        });

        //Guardamos al registro de user
        const UserSaved = await newUser.save();

        //Generamos el Token
        jwt.sign(
            {id: UserSaved._id}, 
            "proyectoBd", 
            {expiresIn: "1h"},
            (err, token) => {
                if (err) console.log(err);
                res.cookie("token", token);
                res.json({UserSaved});
            }
            );


    } catch (error) {
        res.status(500).json({message: "Error al registrar el usuario"})
    }
};
export const login = async (req,res) => {};