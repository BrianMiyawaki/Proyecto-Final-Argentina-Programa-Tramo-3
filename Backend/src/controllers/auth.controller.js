//Autenticacion del usuario

import User from "../models/user.model.js";
import bcrypt from "bcrypt"
//import jwt from "jsonwebtoken"


//Regristro de Usuario
export const register = async (req,res) => {
    const {userName,email,password} = req.body;

    try {

        //encriptar contrasena
        const passwordHash = await bcrypt.hash(password,10)

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
            {expiresIn: "2h"},
            (err, token) => {
                if (err) console.log(err);
                res.cookie("cookie", token);
                res.json({UserSaved});
            }
            );


    } catch (error) {
        res.status(500).json({message: "Error al registrar el usuario"})
    }
};


//Login de usuario
export const login = async (req,res) => {

    const {email, password} = req.body;

    try {
        
       const UserFound = await User.findOne({email})
       if (!UserFound) 
            return res.status(400).json({message: "Usuario no encontrado"});

        const match = await bcrypt.compare(password, UserFound.password);
        if (!match)
         return res.status(400).json({message: "Contraseña incorrecta"});

        //Generamos el Token nuevamente
        // jwt.sign(
             
        //     "proyectoBd", 
        //     {expiresIn: "2h"},
        //     (err, token) => {
        //         if (err) console.log(err);
        //         res.cookie("cookie", token);
        //         res.json({UserFound});
        //     }
        //     ); 
    } catch (error) {
        res.status(500).json({message: "Error al logearse"})
    }

};
   