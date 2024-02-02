import ActionFn from 'store/actions';

import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { useEffect } from 'react';

import { sendEmail } from 'pages/auth/parts/RegEnd/sendEmail'

// import { saveListing } from 'services/saveListing';

import { updateMysql } from 'pages/mysql/updateMysql';

const RegEnd = ({ account, ActionFn }) => {

  const location = useLocation();
  let [searchParams] = useSearchParams()

  useEffect(() => {

    if (!account.loaded) {

      console.log('account', account)
      if (account.email && account.verificationSend && !JSON.parse(account.verificationSend)) {

        sendEmail(account, location);
      }
      else if (account.verificationCheck && !JSON.parse(account.verificationCheck)) {

        const verificationIdUrl = searchParams.get('verificationId');
        const verificationIdAccount = account.verificationId;

        if (verificationIdUrl) {
          if (verificationIdUrl === verificationIdAccount) {

            // saveListing({ verificationCheck: true }, account.uid, 'users');

            updateMysql({ ...account, verificationCheck: 1 });

            ActionFn('SET_INFO_ACCOUNT', { verificationCheck: 1 });
          }
        }
      }


    }
  }, [account]);





  const renderMailSend = () => {
    return (
      <>
        <h3>Поздравляем!<br />Вы успешно создали аккаунт.</h3>
        <h4>Остался последний шаг. Мы отправили вам на почту письмо с подтверждением вашего email</h4>
        <div className="reg-end">
          <h3>Пожалуйста, проверьте ящик {account.email} и перейдите по ссылке, которую Вам прислали на Вашу почту.</h3>
          <h3>Внимание, если письмо не пришло в течение 5 минут, проверьте папку "Спам"</h3>
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
        <Link className='btn btn--blue' to="/cabinet">В кабинет</Link>
      </>
    )
  }


  if (account.email && account.verificationCheck && JSON.parse(account.verificationCheck)) {
    return renderMailSending()
  }
  else if (account.email) {
    return renderMailSend()
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

export default connect(mapStateToProps, { ActionFn })(RegEnd);