
import { Link } from 'react-router-dom';
import Popup from 'components/Popup';
import Section from "pages/main/Section"
import PolitksCheck from 'pages/auth/parts/PolitksCheck'
// import GoogleAuth from 'pages/auth/parts/GoogleAuth';
import { useState } from 'react';
// import VkAuth from 'pages/auth/parts/VkAuth';

const RegStart = () => {
  const [checkStatus, setCheckStatus] = useState(true);

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
          {/* <GoogleAuth btnText="Создать через Gmail" checkStatus={checkStatus} /> */}
          <Link to="/reg-google" className="btn btn-reg btn-google"  ><i></i><span>Создать через Gmail</span></Link>
          <Link to="/reg-date/vk" className="btn btn-reg btn-vk"  ><i></i><span>Создать через Vk</span></Link>
          {/* <VkAuth btnText="Создать через Vk" /> */}
          <Link to={checkStatus ? '/reg-mail' : '/reg-start'} className="btn btn-reg btn-mail"><i></i><span>Создать через почту</span></Link>
        </div>
      </Popup>
      <Section />
    </>
  )
}

export default RegStart;
