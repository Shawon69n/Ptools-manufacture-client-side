
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './Authentication/Login';
import Navbar from './pages/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Shared/Footer';
import "swiper/css/bundle";
import "./components/ExtrasectionsecondC.css";
import RequiredAuth from './Authentication/RequiredAuth';

function App() {

  useEffect(() =>{
    AOS.init();

  },[])

  return (
    <>
      <Navbar></Navbar>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          {/* <Route path='/products' element={<Home></Home>}></Route> */}
          <Route path='/blogs' element={<RequiredAuth><Blogs></Blogs></RequiredAuth>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
