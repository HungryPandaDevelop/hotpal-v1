import RenderForm from 'components/forms/RenderForm';
import { settingsPrivacy } from 'base/forms/settingsFields';
import { saveListing } from 'services/saveListing';

import { updateMysql } from 'pages/mysql/updateMysql'

const Privacy = ({ formData, uid, account }) => {

  const submitSuccess = () => {

    let sendData = { ...account, ...formData.values };
    console.log('sendData', sendData)
    updateMysql(sendData);

    // saveListing(formData.values, uid, 'users');

  }

  return (
    <RenderForm
      fields={settingsPrivacy}
      btnSubmitText="Сохранить"
      initialValues={account}
      submitSuccess={submitSuccess}

    />
  )
}

export default Privacy;
