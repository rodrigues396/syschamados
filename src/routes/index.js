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
            <Route path="/syschamados" element={<SignIn/>} />
            <Route path="/syschamados/register" element={<SignUp/>} />
            
            <Route path="/syschamados/dashboard" element={<Private><Dashboard/></Private>} />
            <Route path="/syschamados/new" element={<Private><New/></Private>} />
            <Route path="/syschamados/new/:id" element={<Private><New/></Private>} />
            <Route path="/syschamados/customers" element={<Private><Customers/></Private>} />
            <Route path="/syschamados/profile" element={<Private><Profile/></Private>} />
        </Routes>
    )
}

export default RoutesApp;