
import { connect } from 'react-redux';
import { useState, useEffect } from "react"
import Popup from 'components/Popup';
import Section from "pages/main/Section"
import RenderForm from 'components/forms/RenderForm';
import { changePasswordNoAuth } from 'services/changePassword';
import { settingsPassword } from 'base/forms/authFields';
import { useSearchParams } from 'react-router-dom';

// import { getSingleListing } from "services/getSingleListing"
import { getUserSingle } from 'servicesMysql/getUserSingle';

import { useNavigate } from 'react-router-dom';

const ChangeForgotPassword = ({ formData }) => {

  const navigate = useNavigate();

  let [searchParams] = useSearchParams()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('1', searchParams.get('uid'))


    getUserSingle(searchParams.get('uid')).then((getuser) => {
      console.log(getuser)
      setUser(getuser);
      setLoading(false);
    })
  }, []);

  const submitSuccess = () => {

    changePasswordNoAuth(formData.values, user).then(res => {
      if (res) {
        navigate('/cabinet')
      }
    });

  }


  return (
    <>
      <Popup
        showStart={true}
        linkBack={true}
      >
        <RenderForm
          fields={settingsPassword}
          btnSubmitText={loading ? 'Loading..' : "Поменять пароль"}
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

export default connect(mapStateToProps)(ChangeForgotPassword);
