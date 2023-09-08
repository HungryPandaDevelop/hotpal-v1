import { useState } from 'react';
import logo from 'default/frontend/images/logo.svg'
import { Link } from 'react-router-dom'
import Nav from 'blocks/header/Nav';
import InfoAccount from 'blocks/header/InfoAccount';
import PopupNav from 'blocks/PopupNav';

const Header = () => {
  const [shopMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="main-page-header">
        <div className="main-grid line-header line-header-nav">
          <div className="col-4 hidden-xs vertical-align">
            <nav className="nav-header">
              <Nav />
            </nav>
          </div>
          <div className="col-2 col-xs-3 logo-container">
            <Link className="logo" to="/"> <img src={logo} alt={logo} /></Link>
          </div>
          <div className="col-6 hidden-xs vertical-align">
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
