import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderForm from 'components/forms/RenderFormMail';
// import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFields } from 'base/forms/authFields';

import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';

import { v4 as uuidv4 } from 'uuid';

import { calculateAge } from 'pages/users/hooks/calculateAge';

import { timestampCustomDayTime } from 'services/timestampCustom';

const RegMail = ({ formData, ActionFn }) => {

  const navigate = useNavigate();

  const generateId = uuidv4();

  // const [loading, setLoading] = useState(false);

  const [showErrAge, setShowArrAge] = useState(false);
  const [showErrPhoto, setShowArrPhoto] = useState(false);

  let imgsAccountSize;
  let regValues;
  const submitSuccess = () => {
    setShowArrAge(false);
    setShowArrPhoto(false);

    // setLoading(true);
    console.log('formData.values', formData)

    let imgsAccountCheck = formData.values.imgsAccount ? formData.values.imgsAccount : [];
    imgsAccountSize = imgsAccountCheck.length;
    imgsAccountCheck = JSON.stringify(imgsAccountCheck);


    regValues = {
      ...formData.values,
      verificationId: generateId,
      imgsAccount: imgsAccountCheck,
      entranceDate: timestampCustomDayTime(),
      registerationDate: timestampCustomDayTime(),
      age: calculateAge(formData.values.dateBerth),
    }


    // console.log('regValues.age', regValues.age)

    if (regValues.age < 18) {
      setShowArrAge(true);
      return false;
    }


    if (imgsAccountSize < 1) {
      setShowArrPhoto(true);
      return false;

    }
    // setLoading(false)
    registrationAccount(regValues).then((res) => {
      // console.log(regValues);

      // setLoading(false)
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

        <RenderForm
          fields={regFields}
          btnSubmitText="Регистрацию"
          submitSuccess={submitSuccess}
          showErrPhoto={showErrPhoto}
          showErrAge={showErrAge}
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
