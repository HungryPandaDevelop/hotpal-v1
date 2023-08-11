import RenderForm from 'components/forms/RenderForm';
import { settingsPrivateData } from 'base/forms/settingsFields';
import { saveListing } from 'services/saveListing';


const PersonalData = ({ formData, uid, listings }) => {

  const submitSuccess = () => {

    saveListing(formData.values, uid, 'users');


  }

  return (
    <RenderForm
      fields={settingsPrivateData}
      btnSubmiText="Сохранить"
      initialValues={listings}
      submitSuccess={submitSuccess}
    />
  )
}

export default PersonalData
