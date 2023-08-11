import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';
import RegEnd from 'pages/auth/parts/RegEnd';
import { regFields } from 'base/forms/authFields';
import Section from "pages/main/Section"

import { registrationAccount } from 'services/registrationAccount';
const RegMail = ({ formData }) => {

  const [loading, setLoading] = useState(false);
  const [successSend, setSuccessSend] = useState(false);
  const [successMail, setSuccessMail] = useState(false);

  const submitSuccess = () => {
    setLoading(true);

    registrationAccount(formData.values).then((res) => {
      console.log('res.email', res.email)
      setLoading(false)
      setSuccessSend(true)
      setSuccessMail(res.email)
    });


  }


  return (
    <>
      <Popup>
        {successSend ?
          <RegEnd successMail={successMail} /> :
          <>
            <h3>Заполните анкету</h3>
            <RenderForm
              fields={regFields}
              btnSubmiText={loading ? 'Loading..' : "Регистрация"}
              submitSuccess={submitSuccess}
            />
          </>}

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
