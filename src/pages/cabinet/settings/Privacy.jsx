import RenderForm from 'components/forms/RenderForm';
import { settingsPrivacy } from 'base/forms/settingsFields';
import { saveListing } from 'services/saveListing';

const Privacy = ({ formData, uid, listings }) => {

  const submitSuccess = () => {

    saveListing(formData.values, uid, 'users');

  }

  return (
    <RenderForm
      fields={settingsPrivacy}
      btnSubmiText="Сохранить"
      initialValues={listings}
      submitSuccess={submitSuccess}
    />
  )
}

export default Privacy;
