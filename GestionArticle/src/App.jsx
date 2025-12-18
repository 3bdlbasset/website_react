import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Dashbord from "./Pages/Dashbord"
import { useEffect } from "react"

function App() {
  
 

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashbord/>}/>
      </Routes>
    </>
  )
}

export default App
