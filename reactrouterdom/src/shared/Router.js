import{BrowserRouter,Route,Routes} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Works from "../pages/Works";
import Work from "../pages/Work";
const Router =() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />}/>
                <Route path="Works" element={<Works />}/>
                <Route path="Work/:id" element={<Work/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default  Router;