import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Service} from "./pages/Service";
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Error} from "./pages/Error";
import {Navbar} from "./components/Navbar";
import {Dashboard} from "./pages/Dashboard";

const App =()=>{  
return (
 <Router>
 <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<Error />} />
    </Routes>
 </Router>

);
};

export default App;