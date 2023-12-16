import {body,validationResult} from "express-validator"

//Validamos el register
export const validateRegister = [
    body("username")
    .notEmpty()
    .withMessage("Username no debe estar vacío")
    .isLength({ min: 6 })
    .withMessage("El Username debe tener al menos 6 caractéres"),
    
    body ("email")
    .notEmpty()
    .withMessage("El mail no puede estar vacio")
    .isEmail()
    .withMessage("Por favor ingrese un email válido"),

    body ("password")
    .isLength({min:6})
    .withMessage("La contraseña debe tener al menos 6 caracteres")

];


//Validamos el login
export const validateLogin = [

    
    body ("email")
    .notEmpty()
    .withMessage("El mail no puede estar vacio")
    .isEmail()
    .withMessage("Por favor ingrese un email válido"),

    body ("password")
    .isLength({min:6})
    .withMessage("La contraseña debe tener al menos 6 caracteres")

];

//Validación del error
export const handleErrorValidations = (req,res,next) => {
    const error = validationResult(req)

    if(!error.isEmpty()){
        return res
        .status(400)
        .json([error.errors[0].msg])
    };
        //return res
        //.status(400)
        //.json({message:"Error en la validación de atributos",error})
    //};  
    next();
};

