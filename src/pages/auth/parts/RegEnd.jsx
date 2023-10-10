import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { saveListing } from 'services/saveListing';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const RegEnd = ({ account, route }) => {

  const generateId = route?.params.generateId;
  useEffect(() => {
    sendEmail();
  }, [])

  const sendEmail = () => {

    // The current location.
    // console.log(window.location.host);

    console.log('account', account)
    console.log('account', account.email)


    if (account.email && !account.vertificationSend) {
      axios.get("http://hotpal.ru/api/mail.php", {
        params: {
          mail: account.email,
          name: account.name,
          vertificationId: generateId,
          host: window.location.host
        }
      }).then(res => {

        saveListing({ vertificationSend: true }, account.uid, 'users');

        console.log('res', res.data)

      });
    } else {
      console.log('redirect')
      // navigate('/');
    }
  }

  const renderMailSend = () => {
    return (
      <>
        <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
        <h4>Остался последний шаг. Мы отправили вам на почту письмо с подтверждением вашего email</h4>
        <div className="reg-end">
          <h3>Пожалуйста, проверьте ящик {account.email} и перейдите по ссылке, которую и Вам прислали на Вашу почту.</h3>
          <div><i className="reg-end-ico"></i></div>
        </div>
      </>
    )
  }
  const renderNoReg = () => {
    return (
      <>
        <h3>Пожалуйста, зарегестрируйтесь.</h3>
        <div className="reg-end">
          <Link className='btn btn--blue' to="/reg-start">Регистрация</Link>
        </div>
      </>
    )
  }
  const renderMailSending = () => {
    return (
      <>
        <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
      </>
    )
  }


  if (account.email && account.vertificationSend) {
    return renderMailSend()
  }
  else if (account.email) {
    return renderMailSending()
  }
  else {
    return renderNoReg()
  }

}


const mapStateToProps = (state) => {

  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(RegEnd);