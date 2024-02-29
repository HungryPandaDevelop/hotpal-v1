import { useState } from 'react';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

// import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFieldsGoogle } from 'base/forms/authFields';
import RenderForm from 'components/forms/RenderFormGoogle';
import Section from "pages/main/Section"

import { timestampCustomDayTime } from 'services/timestampCustom';
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
  const [googleValue, setGoogleValue] = useState([]);
  const renderBtn = () => {

    return (<>
      <h3>Регистрация</h3>
      {<GoogleAuth googleValue={googleValue} btnText="Создать через Gmail" checkStatus={true} />}
    </>)
  }
  let imgsAccountSize;
  let regValues;
  const submitSuccess = () => {

    const { gender, dateBerth, imgsAccount } = formData.values;

    let imgsAccountCheck = imgsAccount ? imgsAccount : [];
    imgsAccountSize = imgsAccountCheck.length;
    imgsAccountCheck = JSON.stringify(imgsAccountCheck);


    regValues = {
      dateBerth: dateBerth,
      age: calculateAge(dateBerth),
      imgsAccount: imgsAccountCheck,
      gender: gender,
      entranceDate: timestampCustomDayTime(),
      registerationDate: timestampCustomDayTime(),

    }

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

    // console.log('imgsAccountSize', imgsAccountSize)


    setGoogleValue(regValues);

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

              <RenderForm
                fields={regFieldsGoogle}
                btnSubmitText="Продолжить регистрацию"
                imgsAccountSize={imgsAccountSize}
                regValues={regValues}
                setShowBtn={setShowBtn}
                submitSuccess={submitSuccess}
                showErrPhoto={showErrPhoto}
              />
            </>) : renderBtn()}



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
