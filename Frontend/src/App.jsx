import{BrowserRouter as Router, Routes, Route} from "react-router-dom"

export const App = () =>{

  return (

    <Router>
<Routes>

    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/login" element={<h1>Login</h1>}/>
    <Route path="/register" element={<h1>Register</h1>}/>
    <Route path="/profile" element={<h1>Profile</h1>}/>

</Routes>
      
    </Router>

  )
}