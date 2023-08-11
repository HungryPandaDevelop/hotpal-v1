import RenderForm from 'components/forms/RenderForm';
import { connect } from 'react-redux';

import { chatFields } from 'base/forms/chatFields';
import { chatPopupFields } from 'base/forms/chatPopupFields';

import { sendMessage } from 'services/chatEvents';


const Form = ({ formData, uid, roomId, type }) => {

  const submitSuccess = () => {
    // console.log(formData.values)

    sendMessage(roomId, formData.values.message, uid);
    formData.values.message = '';
  }


  return (
    <div className="chat-form">
      {type === 'page' ? (
        <RenderForm
          fields={chatFields}
          btnSubmiText="Отправить"
          submitSuccess={submitSuccess}
          colBtn="col-4"
        />
      ) : (
        <RenderForm
          fields={chatPopupFields}
          btnSubmiText="Отправить"
          submitSuccess={submitSuccess}
          colBtn="col-12"
        />
      )}

    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.account.uid,
    formData: state.form.singleInput,
  }
}

export default connect(mapStateToProps)(Form);
