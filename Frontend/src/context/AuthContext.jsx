import {createContext, useContext, useState} from "react"
import {registerReq,loginReq} from "../api/auth"

export const AuthContext = createContext()

export const useAuth = () =>{
    const context= useContext(AuthContext)
    if(!context) throw new Error("Error en el contexto del usuario")
    return context
}


export const AuthProvider =({children}) => {

    const [user,setUser] = useState(null);

    //Booleano para la autenticación
    const [isAuth,setIsAuth] = useState(false)

    //Registro del usuario
    const signup = async(user)=>{

        try {
            const res = await registerReq(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const signin = async(user) =>{

        try {
            const res = await registerReq(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AuthContext.Provider 
            value={{
                signup,
                signin,
                isAuth,
                user,
            }}
        >
            {children} 
        </AuthContext.Provider>
    );
};