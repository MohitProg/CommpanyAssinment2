
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Auth from "./utils/Auth";

function App() {
 

  return (
    <>
      <BrowserRouter>
      
    
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Auth><Home /></Auth>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
