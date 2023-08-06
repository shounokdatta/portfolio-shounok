import Home from './componentsJS/home.js';
import Navbar from './componentsJS/componentsjavascript/navbar.js';
import Footer from './componentsJS/componentsjavascript/footer.js'
import Resume from './componentsJS/resume.js';
import Contact from './componentsJS/contact.js';
import Project from './componentsJS/componentsjavascript/project.js';
import whatsappPic from "./componentsJS/utilitis/whatsapp.png";
import linkdinpic from "./componentsJS/utilitis/unnamed.png";
import Twitterpic from "./componentsJS/utilitis/Logo_of_Twitter.svg.png";
import school from'./componentsJS/utilitis/download.jpeg';
import Masterimg from "./componentsJS/utilitis/2.svg";
import Project1 from "./componentsJS/utilitis/board-g04042984f_640.jpg";
import Project2 from "./componentsJS/utilitis/de4a65f8-d75b-4981-ac28-c784a1e199b3.jpeg";
import pdfFile from './componentsJS/utilitis/Shounok_Datta_Resume.pdf';
import './App.css';
import {useRoutes } from 'react-router-dom';
function App() {
  let element = useRoutes([
    {path: '/', element:<Home Masterimg={Masterimg} pdfFile={pdfFile}/>},
    // {path: '/resume', element:<Resume school={school}/>},
    {path: '/contact', element:<Contact whatsapp={whatsappPic} linkdin={linkdinpic} Twitter={Twitterpic}/>},
    {path: '/project', element:<Project Project1={Project1} Project2={Project2}/>} ,
  ]);
  return ([
    <>
    <Navbar/>
    </>
    ,element,
    <>
        <Footer/>
    </>
  ]);
}
export default App;
