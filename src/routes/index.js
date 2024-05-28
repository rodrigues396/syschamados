import { Routes, Route } from "react-router-dom";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import New from "../pages/New";
import Customers from "../pages/Customers";
import Profile from "../pages/Profile";

import Private from "./Private";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
            
            <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
            <Route path="/new" element={<Private><New/></Private>} />
            <Route path="/new/:id" element={<Private><New/></Private>} />
            <Route path="/customers" element={<Private><Customers/></Private>} />
            <Route path="/profile" element={<Private><Profile/></Private>} />
        </Routes>
    )
}

export default RoutesApp;