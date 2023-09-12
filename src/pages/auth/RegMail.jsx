import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';
// import RegEnd from 'pages/auth/parts/RegEnd';
import { regFields } from 'base/forms/authFields';
import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';
const RegMail = ({ formData }) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  // const [successSend, setSuccessSend] = useState(false);
  // const [successMail, setSuccessMail] = useState(false);

  const submitSuccess = () => {
    setLoading(true);

    registrationAccount(formData.values).then((res) => {
      setLoading(false)
      if (!res) { return false };
      // console.log('res.email', res.email)

      // setSuccessSend(true)
      // setSuccessMail(res.email)
      navigate('/reg-end', { replace: true });
    });


  }


  return (
    <>
      <Popup>
        <h3>Заполните анкету</h3>
        <RenderForm
          fields={regFields}
          // btnSubmitText={"Регистрация"}
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
