import RenderForm from 'components/forms/RenderForm';
import { settingsPrivateData } from 'base/forms/settingsFields';
import { saveListing } from 'services/saveListing';
import { deleteListing } from 'services/getListings';

import { getAuth, deleteUser } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

const PersonalData = ({ formData, uid, listings, ActionFn }) => {



  const submitSuccess = () => {

    saveListing(formData.values, uid, 'users');


  }

  const auth = getAuth();

  const deleteAccount = () => {
    var user = auth.currentUser;

    deleteListing('users', user.uid).then(() => {
      auth.signOut();
      ActionFn('EXIT_ACCOUNT', null);
      // navigate('/auth-start');
      deleteUser(user);
    });
  }

  return (
    <>
      <RenderForm
        fields={settingsPrivateData}
        btnSubmitText="Сохранить"
        initialValues={listings}
        submitSuccess={submitSuccess}
      >
        <span className="link-delete-account" onClick={deleteAccount}>Удалить Аккант</span>
      </RenderForm>


    </>
  )
}

export default PersonalData
