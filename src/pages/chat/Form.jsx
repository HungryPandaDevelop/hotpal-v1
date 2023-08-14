import RenderForm from 'components/forms/RenderForm';
import RenderFormChat from 'components/forms/RenderFormChat';
import { connect } from 'react-redux';

import { chatFields } from 'base/forms/chatFields';
import { chatPopupFields } from 'base/forms/chatPopupFields';

import { sendMessage } from 'services/chatEvents';


const Form = ({ formData, uid, roomId, type }) => {

  const submitSuccess = () => {
    console.log(formData.values)

    sendMessage(roomId, uid, formData.values.message, formData.values.fileMessage, formData.values.invite,);
    formData.values.message = '';
    formData.values.fileMessage = [];
  }


  return (
    <div className="chat-form">
      {type === 'page' ? (
        <RenderFormChat
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
