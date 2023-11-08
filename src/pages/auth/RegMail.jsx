import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFields } from 'base/forms/authFields';

import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';

import { v4 as uuidv4 } from 'uuid';

const RegMail = ({ formData }) => {

  const navigate = useNavigate();

  const generateId = uuidv4();

  const [loading, setLoading] = useState(false);


  const submitSuccess = () => {


    setLoading(true);
    const regValues = { ...formData.values, vertificationId: generateId }
    registrationAccount(regValues).then((res) => {
      setLoading(false)
      if (!res) { return false };

      navigate('/reg-end', {
        state:
          { vertificationId: generateId }
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

export default connect(mapStateToProps)(RegMail);
