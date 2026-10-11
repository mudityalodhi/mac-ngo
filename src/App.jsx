import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Initiatives from './pages/Initiatives.jsx'
import OurWork from './pages/OurWork.jsx'
import GetInvolved from './pages/GetInvolved.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
export default function App(){return(<Routes><Route element={<Layout/>}>
<Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="initiatives" element={<Initiatives/>}/>
<Route path="our-work" element={<OurWork/>}/><Route path="get-involved" element={<GetInvolved/>}/><Route path="contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Route></Routes>)}
