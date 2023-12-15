//pedidos al Servidor

import axios from "axios"

const API ="http://localhost:3000";

//Registrarse
export const registerReq =(user) => axios.post(`${API}/register`,user)

//Logearse
export const loginReq =(user) => axios.post(`${API}/login`,user)