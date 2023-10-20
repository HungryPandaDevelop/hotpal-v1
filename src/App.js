import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivatRoute from 'blocks/PrivatRoute';
import GlobalRoute from 'blocks/GlobalRoute';

import ScrollTop from 'components/ScrollTop'
// import Header from 'blocks/Header';
// import Footer from 'blocks/footer/Footer';




import CheckAuth from 'blocks/header/CheckAuth';


import Main from 'pages/Main' ;

import NoVerification from 'pages/cabinet/NoVerification';

import Cabinet from 'pages/cabinet/Cabinet';
import Settings from 'pages/cabinet/Settings';
import Favorites from 'pages/cabinet/Favorites';
import Likes from 'pages/cabinet/Likes';

import ForgotPassword from 'pages/auth/ForgotPassword';
import ChangeForgotPassword from 'pages/auth/ChangeForgotPassword';
import AuthStart from 'pages/auth/AuthStart';
import RegStart from 'pages/auth/RegStart';
// import RegPhone from 'pages/auth/RegPhone';
import RegMail from 'pages/auth/RegMail';

import AuthMail from 'pages/auth/AuthMail';
import RegEndPopup from 'pages/auth/RegEndPopup';


import UsersCatalog from 'pages/users/UserCatalog';
import UsersDetail from 'pages/users/UserDetail';

import HotelsCatalog from 'pages/hotels/HotelsCatalog';
import HotelsUsersCatalog from 'pages/hotels/HotelsUsersCatalog';

import Chat from 'pages/chat/Chat';

import NotFound from 'pages/NotFound';

// admin
import PageList from 'pages/admin/PageList';
import PageListEdit from 'pages/admin/PageListEdit';
import PageListNew from 'pages/admin/PageListNew';
import PageStandart from 'pages/admin/PageStandart';


// import VKauth from 'pages/VKauth';

import Yslovia from 'pages/default/Yslovia'
import Konf from 'pages/default/Konf'
import Politic from 'pages/default/Politic'
import Intelect from 'pages/default/Intelect'

const App = ({account})=> {
  // console.log('uid', account)
  return (
      <>
      
        <BrowserRouter>
          <CheckAuth />
          <ScrollTop />
          <div className="content">
          <Routes> 
            <Route path='/' element={<GlobalRoute/>}>
              {/* <Route path='/' exept element={<Main/>} ></Route> */}
              <Route index element={<Main/>} ></Route>
              <Route path='/auth-start' element={<AuthStart/>} ></Route>
              <Route path='/reg-start' element={<RegStart/>} ></Route>
              <Route path='/reg-mail' element={<RegMail/>} ></Route>
              <Route path='/auth-mail' element={<AuthMail/>} ></Route>
              <Route path='/forgot-pass' element={<ForgotPassword/>} ></Route>
              <Route path='/change-forgot-pass' element={<ChangeForgotPassword/>} ></Route>
              {/* <Route path='/reg-phone' element={<RegPhone/>} ></Route>  */}
              <Route path='/reg-end' element={<RegEndPopup/>} ></Route> 
              <Route path='/konf'  element={<Konf  />} ></Route>
              <Route path='/intelect'  element={<Intelect  />} ></Route>
              <Route path='/politic'  element={<Politic  />} ></Route>
              <Route path='/yslovia'  element={<Yslovia  />} ></Route>
            </Route>
            

            <Route path='/' element={<PrivatRoute/>}>
              <Route path='/users-catalog' element={<UsersCatalog/>}></Route>
              <Route path='/users-catalog/:userId' element={<UsersDetail/>}></Route>

              <Route path='/hotels-catalog' element={<HotelsCatalog uid={account.uid}/>} ></Route>
              <Route path='/hotels-users/:hotelId' element={<HotelsUsersCatalog uid={account.uid}/>} ></Route>
    
              <Route path='/no-verification' element={<NoVerification/>} ></Route>

              <Route path='/page-list' element={<PageList  account={account}/>} ></Route>
              <Route path='/page-list/:pageId' element={<PageListEdit  account={account}/> } ></Route>
              <Route path='/page-list-new/' element={<PageListNew  account={account}/>} ></Route>
              
              <Route path='/page/:pageId' element={<PageStandart  account={account}/>} ></Route>
              <Route path='*' element={<NotFound />}/>


              <Route path='/cabinet/' element={<Cabinet/>} ></Route>

              <Route path='/cabinet/settings' element={<Settings/>} ></Route>
              <Route path='/cabinet/chat' element={<Chat/>} ></Route>
              <Route path='/cabinet/chat/:roomId'  element={<Chat/>} ></Route>
              <Route path='/cabinet/favorites'   element={<Favorites type='white-list'/>} ></Route>
              <Route path='/cabinet/dislikes'  element={<Favorites type='black-list' />} ></Route>
              <Route path='/cabinet/likes'  element={<Likes  />} ></Route>


            </Route>

          </Routes>
          </div >

    
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



const mapStateToProps = (state) => {
  return {
    account: state.account,
  }
};

export default connect(mapStateToProps)(App);