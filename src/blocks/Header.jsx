import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from 'default/frontend/images/logo.svg'
import logoWhite from 'default/frontend/images/logo-white.svg'
import { Link } from 'react-router-dom'
import Nav from 'blocks/header/Nav';
import InfoAccount from 'blocks/header/InfoAccount';
import PopupNav from 'blocks/PopupNav';
import { getElementError } from '@testing-library/react';

const Header = () => {
  const location = useLocation();
  const [shopMenu, setShowMenu] = useState(false);



  useEffect(() => {
    // console.log('location', location.pathname)
    setShowMenu(false);

  }, [location]);


  const changeStyleSite = () => {
    document.getElementsByTagName('body')[0].classList.add("dark-theme")
  }


  return (
    <>
      <div className="change-style" onClick={changeStyleSite}></div>
      <header className={`${location.pathname === '/' || location.pathname === '/auth-start' ? 'main-page-header' : ''}`}>
        <div className="main-grid line-header line-header-nav">
          <div className="col-4 hidden-xs vertical-align">
            <nav className="nav-header">
              <Nav />
            </nav>
          </div>
          <div className="col-4 col-xs-3 logo-container">
            <Link className="logo logo-dark" to="/"> <img src={logo} alt={logo} /></Link>
            <Link className="logo logo-white" to="/"> <img src={logoWhite} alt={logoWhite} /></Link>
          </div>
          <div className="col-4 hidden-xs vertical-align">
            <div className="btn-container">
              <InfoAccount />
            </div>
          </div>
          <div className="col-9 mobile-container vertical-align">
            <div className="btn-hamburger" onClick={() => setShowMenu(true)}></div>
          </div>
        </div>
      </header>
      {shopMenu && <PopupNav setShowMenu={setShowMenu} />}
    </>
  )
}

export default Header
