
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/main/Section"
import PolitksCheck from 'pages/auth/parts/PolitksCheck'
import GoogleAuth from 'pages/auth/parts/GoogleAuth';
import { useState } from 'react';

const RegStart = () => {
  const [checkStatus, setCheckStatus] = useState(false);

  const changeCheckStatus = () => {
    setCheckStatus(!checkStatus)
  }


  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        <h3>Знакомься в отелях и бронируй номера с кем тебе по душе!</h3>
        <PolitksCheck
          checkStatus={checkStatus}
          changeCheckStatus={changeCheckStatus}
        />

        <h4>Создайте аккаунт с помощью:</h4>
        <div className="btn-container">
          <GoogleAuth btnText="Создать через Gmail" checkStatus={checkStatus} />
          <Link to={checkStatus ? '/reg-mail' : '/reg-start'} className="btn btn-reg btn-mail"><i></i><span>Создать через почту</span></Link>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegStart;
