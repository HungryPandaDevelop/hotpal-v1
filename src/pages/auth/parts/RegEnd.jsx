import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { saveListing } from 'services/saveListing';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const RegEnd = ({ account }) => {

  useEffect(() => {
    sendEmail();
  }, [])

  const sendEmail = () => {
    const generateId = uuidv4();


    // The current location.
    // console.log(window.location.host);



    if (!account.verificationCheck) {
      axios.get("http://hotpal.ru/api/mail.php", {
        params: {
          mail: account.email,
          name: account.name,
          vertificationId: generateId,
          host: window.location.host
        }
      }).then(res => {

        saveListing({ vertificationId: generateId }, account.uid, 'users');
        console.log('res', res)

      });
    }



  }

  return (
    <>
      <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
      <h4>Остался последний шаг. Мы отправили вам на почту письмо с подтверждением вашего email</h4>
      <div className="reg-end">
        <h3>Пожалуйста, проверьте ящик {account.email} и перейдите по ссылке, которую и Вам прислали на Вашу почту.</h3>
        <div><i className="reg-end-ico"></i></div>
      </div>
      {/* <div className="btn btn--blue-border" onClick={sendEmail}>Отправить</div> */}
      {/* <div className="form-btn-container">
        <Link className="btn btn--blue" to="/cabinet">В кабинет</Link>
      </div> */}
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(RegEnd);