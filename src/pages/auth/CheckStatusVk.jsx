import Popup from 'components/Popup';
import Section from 'pages/main/Section';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { registrationAccount } from 'services/registrationAccount';
import { authorizationAccount } from 'services/authorizationAccount';


// import { getListing } from 'services/getListings';
import { getByMailMysql } from 'pages/mysql/getByMailMysql';
// import { saveListing } from 'services/saveListing';
import { updateMysql } from 'pages/mysql/updateMysql';


const CheckStatusVk = () => {
  const navigate = useNavigate();

  const [currentName, setCurrentName] = useState('');
  const [status, setStatus] = useState('');

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
      const userName = decodedPayload.user.first_name;
      const userImg = decodedPayload.user.avatar;
      console.log('payload', decodedPayload)
      // Создаем уникальный email-адрес на основе user.id
      const email = `${userId}@vk.auth`;
      setCurrentName(userName);

      getByMailMysql(email).then((res) => {

        if (res.length === 0) {
          console.log('Регистрация');
          // Регистрируем пользователя в Firebase
          setStatus('Зарегистрированны');
          registrationAccount({ name: userName, email: email, password: userId }).then((res) => {
            console.log('good reg', res); // ok!

            updateMysql(...res, { imgsAccount: [{ id: 'vk', 'url': userImg }], verificationCheck: '1' });
            // saveListing({ imgsAccount: [{ id: 'vk', 'url': userImg }], verificationCheck: true }, res.uid, 'users')
          });
        } else {
          console.log('Авторизация');
          setStatus('Авторизорованны');
          authorizationAccount({ name: userName, email: email, password: userId }).then((res) => {
            console.log('good auth'); // ok!
          });
        }
      });

      // Регистрируем пользователя в Firebase
      // registrationAccount({ name: userId, email: email, password: '123456' }).then((res) => {
      //   console.log('good reg'); // ok!
      // });

      // Авторизация пользователя в Firebase
      // authorizationAccount({ name: userId, email: email, password: userId }).then((res) => {
      //   console.log('good auth'); // ok!
      // });


    } else {
      navigate('/', { replace: true });
      // вернуть назад
    }

  }, []);

  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        <h3>Добро пожаловать, {currentName}</h3>
        <h4>Вы успешно {status}</h4>
        <Link className='btn btn--blue' to="/cabinet">В кабинет</Link>
      </Popup>
      <Section />
    </>
  )
}



export default CheckStatusVk;
