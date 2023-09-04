import {BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivatRoute from 'blocks/PrivatRoute.jsx';
import Header from 'blocks/Header';
import Footer from 'blocks/footer/Footer';

import ControlsPanel from 'blocks/ControlsPanel';

import CheckAuth from 'blocks/header/CheckAuth';


import Main from 'pages/Main' ;
import Cabinet from 'pages/cabinet/Cabinet';
import Settings from 'pages/cabinet/Settings';
import Favorites from 'pages/cabinet/Favorites';
import Likes from 'pages/cabinet/Likes';


import AuthStart from 'pages/auth/AuthStart';
import RegStart from 'pages/auth/RegStart';
import RegPhone from 'pages/auth/RegPhone';
import RegMail from 'pages/auth/RegMail';
import AuthMail from 'pages/auth/AuthMail';


import UsersCatalog from 'pages/users/UserCatalog';
import UsersDetail from 'pages/users/UserDetail';

import HotelsCatalog from 'pages/hotels/HotelsCatalog';

import Chat from 'pages/chat/Chat';
import GetRooms from 'pages/chat/getRooms';




// import VKauth from 'pages/VKauth';


const App = ()=> {
  return (
      <>
        <BrowserRouter>
          <CheckAuth />
          <GetRooms />
          <Header />
          <ControlsPanel />
          
          
          <div className="content">
          <Routes> 
            <Route path='/' exept element={<Main/>} ></Route>

            <Route path='/auth-start' element={<AuthStart/>} ></Route>
            <Route path='/reg-start' element={<RegStart/>} ></Route>
            <Route path='/reg-mail' element={<RegMail/>} ></Route>
            <Route path='/auth-mail' element={<AuthMail/>} ></Route>
            <Route path='/reg-phone' element={<RegPhone/>} ></Route> 

            <Route path='/users-catalog' element={<UsersCatalog/>}></Route>
            <Route path='/users-catalog/:userId' element={<UsersDetail/>}></Route>

            <Route path='/hotels-catalog' element={<HotelsCatalog/>}></Route>

            <Route path='/cabinet' element={<PrivatRoute/>} >
              <Route index element={<Cabinet/>} ></Route>
              <Route path='/cabinet/settings' element={<Settings/>} ></Route>
              <Route path='/cabinet/chat' element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomId'  element={<Chat/>} ></Route>
              <Route path='/cabinet/favorites'   element={<Favorites type='white-list'/>} ></Route>
              <Route path='/cabinet/dislikes'  element={<Favorites type='black-list' />} ></Route>
              <Route path='/cabinet/likes'  element={<Likes  />} ></Route>
            </Route>
            {/* <Route path='/vk' element={<VKauth/>} ></Route> */}
          </Routes>
          </div>
          <Footer />
          
        </BrowserRouter>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
  );
}


export default App;
