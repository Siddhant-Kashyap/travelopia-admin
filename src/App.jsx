import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";

function App() {


  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<AdminDashboard/>}/>
    
        </Routes>
      </Router>
     
    </>
  )
}

export default App
