import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Register } from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import { Login } from "./pages/Login"
import { HomePage } from "./pages/HomePage"
import { TaskPage } from "./pages/TaskPage"
import { ProfilePage } from "./pages/ProfilePage"
import { PrivateRoutes } from "./routes/PrivateRoutes"

export const App = () =>{

  return (
    <AuthProvider>
      <Router>
        <Routes>
            
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route element={<PrivateRoutes />}>
            <Route path="/task" element={<TaskPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}