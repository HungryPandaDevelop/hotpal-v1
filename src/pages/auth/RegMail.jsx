import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFields } from 'base/forms/authFields';

import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';

import { v4 as uuidv4 } from 'uuid';

import { calculateAge } from 'pages/users/hooks/calculateAge';

import { timestampCustom } from 'services/timestampCustom';

const RegMail = ({ formData, ActionFn }) => {

  const navigate = useNavigate();

  const generateId = uuidv4();

  const [loading, setLoading] = useState(false);

  const [showErrAge, setShowArrAge] = useState(false);
  const [showErrPhoto, setShowArrPhoto] = useState(false);


  const submitSuccess = () => {


    setLoading(true);

    let imgsAccountCheck = formData.values.imgsAccount ? formData.values.imgsAccount : [];
    const imgsAccountSize = imgsAccountCheck.length;
    imgsAccountCheck = JSON.stringify(imgsAccountCheck);


    const regValues = { ...formData.values, verificationId: generateId, imgsAccount: imgsAccountCheck }

    const formattedDate = timestampCustom();

    regValues.timestamp = formattedDate;
    regValues.registration = formattedDate;
    regValues.age = calculateAge(regValues.dateBerth);



    console.log('regValues.age', regValues.age)

    if (regValues.age < 18) {
      setShowArrAge(true);
      return false;
    }


    if (imgsAccountSize < 1) {
      setShowArrPhoto(true);
      return false;

    }
    setLoading(false)
    registrationAccount(regValues).then((res) => {
      // console.log(regValues);

      setLoading(false)
      if (!res) { return false };
      ActionFn('SET_INFO_ACCOUNT', regValues);
      navigate('/reg-end', {
        state:
          { verificationId: generateId }
      });
    });


  }


  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        <h3>Заполните анкету</h3>
        {showErrAge && <div className="err-hint">Вам нет 18 лет, регистрация невозможна!</div>}
        {showErrPhoto && <div className="err-hint">Добавьте хотя бы одно фото!</div>}

        <RenderForm
          fields={regFields}
          btnSubmitText={loading ? 'Loading..' : "Регистрация"}
          submitSuccess={submitSuccess}

        />
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

export default connect(mapStateToProps, { ActionFn })(RegMail);
