import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Register } from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"

export const App = () =>{

  return (
    <AuthProvider>
      <Router>
        <Routes>

            <Route path="/" element={<h1>Home</h1>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<h1>Profile</h1>}/>

        </Routes>
      </Router>
    </AuthProvider>
  )
}