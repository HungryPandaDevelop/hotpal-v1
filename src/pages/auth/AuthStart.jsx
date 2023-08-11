
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/main/Section"

import GoogleAuth from 'pages/auth/parts/GoogleAuth';

const RegEnd = () => {

  return (
    <>
      <Popup>
        <h3>Знакомься в отелях и бронируй номера с кем тебе по душе!</h3>
        <h4>Войти в аккаунт с помощью:</h4>
        <div className="btn-container">
          <GoogleAuth btnText="Войти через Gmail" />
          <Link to="/auth-phone" className="btn btn-reg btn-phone"><i></i><span>Войти через номер телефона</span></Link>
          <Link to="/auth-mail" className="btn btn-reg btn-mail"><i></i><span>Войти через почту</span></Link>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegEnd;
