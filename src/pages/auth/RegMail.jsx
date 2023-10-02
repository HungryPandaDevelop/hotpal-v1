import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { regFields } from 'base/forms/authFields';

import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';

const RegMail = ({ formData }) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [successSend, setSuccessSend] = useState(true);

  const submitSuccess = () => {

    if (successSend) {
      setLoading(true);
      registrationAccount(formData.values).then((res) => {
        setLoading(false)
        if (!res) { return false };
        navigate('/reg-end', { replace: true });
      });
    }

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
          setSuccessSend={setSuccessSend}
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
