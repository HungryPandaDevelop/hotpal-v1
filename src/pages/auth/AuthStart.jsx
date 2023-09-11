
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/main/Section"

import GoogleAuth from 'pages/auth/parts/GoogleAuth';

const RegEnd = () => {

  return (
    <>
      <Popup>
        <h3>С возвращением!</h3>
        <h4>Нажимая "Войти", вы принимаете наши <a href="#">Условия.</a>Чтобы узнать, как мы обрабатываем ваши данные, ознакомьтесь с нашей <a href="#">Политика конфиденциальности</a>и <a href="#">Политика в отношении файлов Cookie.</a></h4>
        <h4>Выберете способ входа:</h4>
        <div className="btn-container">
          <GoogleAuth btnText="Войти через Gmail" />
          {/* <Link to="/auth-phone" className="btn btn-reg btn-phone"><i></i><span>Войти через номер телефона</span></Link> */}
          <Link to="/auth-mail" className="btn btn-reg btn-mail"><i></i><span>Войти через почту</span></Link>
          <div className="simle-link">
            <Link to="/">Проблемы со входом?</Link>
          </div>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegEnd;
