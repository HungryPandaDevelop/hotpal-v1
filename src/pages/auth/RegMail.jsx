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

import {timestampCustom} from 'services/timestampCustom';

const RegMail = ({ formData, ActionFn }) => {

  const navigate = useNavigate();

  const generateId = uuidv4();

  const [loading, setLoading] = useState(false);


  const submitSuccess = () => {


    setLoading(true);
    const regValues = { ...formData.values, verificationId: generateId }

    const formattedDate = timestampCustom();

    regValues.timestamp = formattedDate;
    regValues.registration = formattedDate;
    regValues.age = calculateAge(regValues.dateBerth);





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

export default connect(mapStateToProps,{ActionFn})(RegMail);
