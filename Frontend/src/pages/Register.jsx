import {useForm} from "react-hook-form"
import {useAuth} from "../context/AuthContext"
import {Link,useNavigate} from "react-router-dom"
import {useEffect} from "react"
import NavbarPublic from "../components/NavbarPublic"


export const Register = () => {

    const {register,handleSubmit, formState: { errors } } = useForm();

    const {signup,isAuth, errors:registersErrors } = useAuth();

    const onSubmit = handleSubmit(async(values)=>{
        signup(values);
    })

    //usamos este hook para redireccionar a otra pagina

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) navigate("/task");
    }, [isAuth]);

    return (
        <>
        <NavbarPublic/>
        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-900 max-w-md p-8 rounded-md ">

                 {/* 1) FORMULARIO */}
                <h1 className="text-3xl text-center font-semibold mb-5">Register</h1>
                {registersErrors.map((err, i) => (
                <div key={i} className="bg-red-800 text-white">
                    {err}
                </div>
        ))}
        <form
          //cuando presionamos el boton register hacemos la consulta
          onSubmit={onSubmit}
        >
                
                
                {errors.username && (
                    <p className="text-red-400">El Username es requerido</p> 
                )}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="text" 
                placeholder="Username"
                {...register("username", {required:true})} 
                />
                
                {errors.email && (
                    <p className="text-red-400">El email es requerido</p> 
                )}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="email" 
                placeholder="Email"
                {...register("email", {required:true})}
                 />

                {errors.password && (
                    <p className="text-red-400">El password es requerido</p> 
                )}
                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="password" 
                placeholder="Password" 
                {...register("password", {required:true})}
                />

                <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white my-3">Registrarse</button>

            </form>     
            <p className="flex justify-between mt-10">¿Tenes una cuenta?
            <Link
             to="/login"
             className="px-3 font-semibold rounded-md bg-orange-500 text-white" 
              >Loguearse</Link></p>
            </div>
        </div>
    </>



    )
}