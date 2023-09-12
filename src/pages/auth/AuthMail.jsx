import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import RenderForm from 'components/forms/RenderForm';
import Popup from 'components/Popup';

import { authFields } from 'base/forms/authFields';

import Section from "pages/main/Section"

import { authorizationAccount } from 'services/authorizationAccount';

const AuthMail = ({ formData }) => {

  const navigate = useNavigate();
  // const history = useHistory();

  const submitSuccess = () => {


    authorizationAccount(formData.values).then((res) => {

      if (!res) { return false };
      console.log('nav')
      navigate('/cabinet');
      // history.push('/cabinet')
    });


  }


  return (
    <>
      <Popup>
        <h3>Заполните анкету</h3>
        <RenderForm
          fields={authFields}
          btnSubmitText="Авторизация"
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

export default connect(mapStateToProps)(AuthMail);
