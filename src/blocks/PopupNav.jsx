import InfoAccount from 'blocks/header/InfoAccount';
import { Link } from 'react-router-dom';
import ChangeTheme from 'blocks/ChangeTheme';
const PopupNav = ({ setShowMenu }) => {
  return (
    <div className="popup menu-hamburger">
      <div className="popup-overlay" onClick={() => setShowMenu(false)}></div>
      <div className='popup-container'>
        <ChangeTheme />
        {/* <div className="btn-close close-btn--popup" onClick={() => setShowMenu(false)}></div> */}
        <nav className="popup-nav">
          <ul className="ln">
            <li>
              <Link to="/users-catalog">Поиск людей</Link>
            </li>
            <li>
              <Link to="/hotels-catalog">Поиск отелей</Link>
            </li>
          </ul>
          <InfoAccount />
        </nav>
      </div>
    </div >
  )
}

export default PopupNav
