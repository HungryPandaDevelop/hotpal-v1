import RenderForm from 'components/forms/RenderForm';
import { settingsPrivateData } from 'base/forms/settingsFields';
import { saveListing } from 'services/saveListing';
import { deleteListing } from 'services/getListings';

import { getAuth, deleteUser } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

import { updateMysql } from 'pages/mysql/updateMysql';
import { deleteMysql } from 'pages/mysql/deleteMysql';

const PersonalData = ({ formData, uid, account, ActionFn }) => {

  // 

  const submitSuccess = () => {


    let sendData = { ...account, ...formData.values };


    updateMysql(sendData);

  }

  const auth = getAuth();

  const deleteAccount = async () => {
    try {
      const user = auth.currentUser;

      await deleteMysql(user.uid);
      await deleteUser(user);

      auth.signOut();
      ActionFn('EXIT_ACCOUNT', null);
    } catch (error) {
      // Обработка ошибок, например, вывод в консоль или уведомление пользователю
      console.error('Произошла ошибка при удалении аккаунта:', error);
    }

    // deleteListing('users', user.uid).then(() => {
    //   auth.signOut();
    //   ActionFn('EXIT_ACCOUNT', null);
    //   // navigate('/auth-start');
    //   deleteUser(user);
    // });
  };

  return (
    <>
      <RenderForm
        fields={settingsPrivateData}
        btnSubmitText="Сохранить"
        initialValues={account}
        submitSuccess={submitSuccess}
      >
        <span className="link-delete-account" onClick={deleteAccount}>Удалить Аккант</span>
      </RenderForm>


    </>
  )
}

export default PersonalData
