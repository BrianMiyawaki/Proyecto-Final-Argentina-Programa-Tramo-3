//Autenticacion del usuario

import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import {createAccessToken} from "../middlewares/jwt.validator.js"


//Regristro de Usuario
export const register = async (req,res) => {
    const {userName,email,password} = req.body;

    //validamos el usuario
    const userFound = await User.findOne({email})
    if (userFound) return res.status(400).json(["El usuario ya existe"])

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
        const token = await createAccessToken({ id:UserSaved })
        res.cookie("token", token)
        res.json({message: "Usuario registrado con éxito",
         id:UserSaved.id,
        userName:UserSaved.userName,
        email:UserSaved.email})

    } catch (error) {
        res.status(500).json({message: "Error al registrar el usuario"})
    }
};


//Login de Usuario
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
         const token = await createAccessToken({id:UserFound.id});
         res.cookie("token",token);
         res.json({
            message:"Bienvenido!",
            userName: UserFound.userName,
            email:UserFound.email
         });
         
     } catch (error) {
         res.status(500).json({message: "Error al logearse"})
     }

 };
  
 //Logout de Usuario
 export const logout = async (req,res) => {

    res.cookie("token", "", {expires: new Date(0)})
    return res.status(200).json({message:"Hasta pronto"})
};
 
//Profile de Usuario
export const profile = async (req,res) => {

    try {
        const UserFound = await User.findById(req.user.id);
        if (!UserFound)
            return res.status(400).json({message:"Usuario no encontrado"});

        res.json({
            message:"Perfil",
            userName: UserFound.userName,
            email: UserFound.email,
            });
    } catch (error) {
        res.status(500).json({message: "Error en el perfil"})
    }

};