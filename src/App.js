import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import Karya from './pages/Karya';
import Contact from './pages/Contact';
import {Route, Routes, Link} from 'react-router-dom'
import Prestasi from "./pages/Prestasi";
import Home from './pages/Home';
import { useEffect,  } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
 

 
  useEffect(()=>{
   
AOS.init({duration : 2000})
  }, [])

  return (
    
    <div className="App">
    
      <div className='navbar'>
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
       <span>Yusrizal KW</span>
        </div>
        <nav>
        <ul>
          <li><Link to='/' className='link'>HOME</Link></li>
          <li><Link to='profile' className='link'>PROFILE</Link></li>
          <li><Link to='Karya' className='link'>KARYA</Link></li>
          <li><Link to='CONTACT' className='link'>CONTACT</Link></li>
          <li><Link to='prestasi' className='link'>PRESTASI</Link></li>
        </ul>
        </nav>
        </div>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='prestasi' element={<Prestasi/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='Karya' element={<Karya/>}/>
      <Route path='Contact' element={<Contact/>}/>
    </Routes>
   
    </div>
  );
}

export default App;
