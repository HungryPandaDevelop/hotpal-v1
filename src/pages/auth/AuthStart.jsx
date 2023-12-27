
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/main/Section"
import PolitksCheck from 'pages/auth/parts/PolitksCheck'
import GoogleAuth from 'pages/auth/parts/GoogleAuth';
import { useEffect, useState } from 'react';

import * as VKID from '@vkid/sdk';
import { registrationAccount } from 'services/registrationAccount';
import { authorizationAccount } from 'services/authorizationAccount';
const RegEnd = () => {

  const [checkStatus, setCheckStatus] = useState(true);

  const changeCheckStatus = () => {
    setCheckStatus(!checkStatus)
  }
  // 1 SQNGs8975Bqb3WXXvVTe
  // 2 cdd89711cdd89711cdd897112bcece28f7ccdd8cdd89711a854a5835481e5726665df3d
  VKID.Config.set({
    // Идентификатор приложения.
    app: 51822566,
    // Адрес для перехода после авторизации
    redirectUrl: 'http://localhost:3000/',
  });



  const handleClick = () => {
    // Открытие авторизации.
    VKID.Auth.login()
  }

  useEffect(() => {
    // Получаем параметры из URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const payload = urlSearchParams.get('payload');
    console.log('in vk auth')
    if (payload) {

      // Декодируем JSON из payload
      const decodedPayload = JSON.parse(decodeURIComponent(payload));

      // Извлекаем user.id
      const userId = decodedPayload.user.id;

      // Создаем уникальный email-адрес на основе user.id
      const email = `${userId}@mail.ru`;

      // Регистрируем пользователя в Firebase
      // registrationAccount({ name: userId, email: email, password: '123456' }).then((res) => {
      //   console.log('good reg'); // ok!
      // });

      authorizationAccount({ name: userId, email: email, password: '123456' }).then((res) => {
        console.log('good auth'); // ok!
      });


    }

  }, []);


  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        <h3>С возвращением!</h3>
        <PolitksCheck
          checkStatus={checkStatus}
          changeCheckStatus={changeCheckStatus}
        />

        <h4>Выберете способ входа:</h4>
        <div className="btn-container">
          <GoogleAuth btnText="Войти через Gmail" checkStatus={checkStatus} />
          {/* <Link to="/auth-phone" className="btn btn-reg btn-phone"><i></i><span>Войти через номер телефона</span></Link> */}
          <Link to={checkStatus ? '/auth-mail' : '/auth-start'} className="btn btn-reg btn-mail"><i></i><span>Войти через почту</span></Link>

          <div onClick={handleClick}>Вк</div>

          <div className="simle-link">
            <Link className="link" to="/forgot-pass">Проблемы со входом?</Link>
          </div>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegEnd;
