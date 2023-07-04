import Home from './componentsJS/home.js';
import Navbar from './componentsJS/navbar.js';
import Resume from './componentsJS/resume.js';
import Contact from './componentsJS/contact.js';
import Project from './componentsJS/project.js';
import './App.css';
import {useRoutes } from 'react-router-dom';
function App() {
  let element = useRoutes([
    {path: '/', element:<Home/>},
    {path: '/resume', element:<Resume/>},
    {path: '/contact', element:<Contact/>},
    {path: '/project', element:<Project/> },
  ]);
  return ([
    <>
    <Navbar/>
    </>
    ,element
  ]);
}
export default App;
