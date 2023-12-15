import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import {useAuth} from "../context/AuthContext"

export const Login = () => {

    const {register,handleSubmit} = useForm()

    
    const {signin}= useAuth()
    const onSubmit = handleSubmit(async(values)=>{
        signin(values);
    })



    return (    

        <div className="flex h-screen items-center justify-center">
            <div className="bg-zinc-900 max-w-md p-8 rounded-md ">

            <form action="">
                <h1 className="text-3xl text-center font-semibold mb-5">Login</h1>
                

                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="email" 
                placeholder="Email"
                {...register("email", {required:true})}
                 />


                <input className="w-full bg-zinc-700 text-white px4 py-2 rounded-md my-2" 
                type="password" 
                placeholder="Password" 
                {...register("password", {required:true})}
                />

                <button onClick={onSubmit} className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white my-3">Loguearse</button>

            </form>     
            <p className="flex justify-between mt-10">¿No tenes una cuenta?
            <Link
             to="/register"
             className="px-3 font-semibold rounded-md bg-orange-500 text-white" 
              >Registrarse</Link></p>
            </div>
        </div>




    )
}