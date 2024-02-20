import { useState } from 'react';
// import {
// useParams,
// useNavigate
// } from 'react-router-dom';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFieldsGoogle } from 'base/forms/authFields';

import Section from "pages/main/Section"

// import { registrationAccount } from 'services/registrationAccount';

// import { v4 as uuidv4 } from 'uuid';

import { calculateAge } from 'pages/users/hooks/calculateAge';

// import { timestampCustom } from 'services/timestampCustom';

import GoogleAuth from 'pages/auth/parts/GoogleAuth';
// import VkAuth from 'pages/auth/parts/VkAuth';

const RegDate = ({ formData, ActionFn }) => {
  // const params = useParams();
  // const currentReg = params.regId;
  // const navigate = useNavigate();

  // const generateId = uuidv4();



  const [showErrAge, setShowArrAge] = useState(false);
  const [showErrPhoto, setShowArrPhoto] = useState(false);

  const [showBtn, setShowBtn] = useState(false);

  const renderBtn = () => {

    return (<>
      <h3>Регистрация</h3>
      {<GoogleAuth btnText="Создать через Gmail" checkStatus={true} />}
    </>)
  }

  const submitSuccess = () => {

    const { gender, dateBerth, imgsAccount } = formData.values;

    let imgsAccountCheck = imgsAccount ? imgsAccount : [];
    const imgsAccountSize = imgsAccountCheck.length;
    imgsAccountCheck = JSON.stringify(imgsAccountCheck);
    const regValues = { dateBerth: dateBerth, age: calculateAge(dateBerth), imgsAccount: imgsAccountCheck, gender: gender }

    console.log('formData.age', regValues)

    if (regValues.age < 18) {
      setShowArrAge(true);

    } else {
      setShowArrAge(false);
    }
    if (imgsAccountSize < 1) {
      setShowArrPhoto(true);

    } else {
      setShowArrPhoto(false);
    }

    console.log('imgsAccountSize', imgsAccountSize)

    if (regValues.age < 18 || imgsAccountSize === 0) {
      setShowBtn(false)
    }
    else {
      setShowBtn(true)
    }


    ActionFn('SET_INFO_ACCOUNT', regValues);

  }


  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        {!showBtn ?
          (
            <>
              <h3>Введите дату</h3>
              {showErrAge && <div className="err-hint">Вам нет 18 лет, регистрация невозможна!</div>}
              {showErrPhoto && <div className="err-hint">Добавьте хотя бы одно фото!</div>}


              <RenderForm
                fields={regFieldsGoogle}
                btnSubmitText="Продолжить регистрацию"
                submitSuccess={submitSuccess}

              /></>) : renderBtn()}



      </Popup>
      <Section />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps, { ActionFn })(RegDate);
