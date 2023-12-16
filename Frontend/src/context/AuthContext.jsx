import {createContext, useContext, useState} from "react"
import {registerReq,loginReq} from "../api/auth"

export const AuthContext = createContext()

export const useAuth = () =>{
    const context= useContext(AuthContext)
    if(!context) throw new Error("Error en el contexto del usuario")
    return context;
}


export const AuthProvider =({children}) => {

    const [user,setUser] = useState(null);

    //Booleano para la autenticación
    const [isAuth,setIsAuth] = useState(false)

    //Manejo de los estados de los erroes
    const [errors,setErrors] = useState([])

    //Registro del usuario
    const signup = async(user) => {

        try {
            const res = await registerReq(user)
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
        } catch (error) {
            //console.log(error.response.data)
            setErrors(error.response.data)
        }
    }

    //Login del usuario
    const signin = async(user) =>{

        try {
            const res = await loginReq(user)
            console.log(res)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            //console.log(error.response.data)
            setErrors([error.response.data])
        }
    }

    //este useEffect es para manejar el tiempo del error y limpiar pasado el tiempo estipulado
    useEffect(() => {
        if (errors.length > 0) {
        //el uso de timers en react es peligroso por eso generamos lo siguiente
        const timer = setTimeout(() => {
            setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
         }
     }, [errors]);

    return(
        <AuthContext.Provider 
            value={{
                signup,
                signin,
                isAuth,
                user,
                errors,
            }}
        >
            {children} 
        </AuthContext.Provider>
    );
};