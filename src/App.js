
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
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import SignUp from './Authentication/SignUp';
import NotFound from './Shared/NotFound';
import Users from './pages/Dashboard/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleProductDetail from './pages/SingleProductDetail';
import WelcomeToDashboard from './components/WelcomeToDashboard';
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

          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/product/:id' element={<RequiredAuth><SingleProductDetail></SingleProductDetail></RequiredAuth>}></Route>

          <Route path='/dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
                        
                        <Route index element={<WelcomeToDashboard></WelcomeToDashboard>}></Route>
                        <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
                        <Route path='addreview' element={<AddReview></AddReview>}></Route>
                        <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
                        <Route path='users' element={<Users></Users>}></Route>
          </Route>

          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </>
  );
}

export default App;
