//Autenticacion del usuario

import User from "../models/user.model.js";


//Regristro de Usuario
export const register = async (req,res) => {
    const {userName,email,password} = req.body

    try {
        const newUser =new User({
            userName,
            email,
            password
        });

        const UserSaved = await newUser.save()
        res.status(200).json(UserSaved)

    } catch (error) {
        res.status(500).json({message: "Error al registrar el usuario"})
    }
};
export const login = async (req,res) => {};