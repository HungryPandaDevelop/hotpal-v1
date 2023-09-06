import RenderForm from 'components/forms/RenderForm';
import RenderFormChat from 'components/forms/RenderFormChat';

import { useState } from 'react';
import { connect } from 'react-redux';

import { chatFields } from 'base/forms/chatFields';
import { chatPopupFields } from 'base/forms/chatPopupFields';

import { sendMessage } from 'services/chatEvents';


const Form = ({ formData, uid, roomId, type }) => {



  const submitSuccess = () => {

    let message = {
      text: formData?.values.message ? formData.values.message : '',
      invite: formData?.values.invite ? formData.values.invite : '',
      imgs: formData?.values.fileMessage ? formData.values.fileMessage : ''
    }

    console.log('formData', message)

    sendMessage(roomId, uid, message);

  }


  return (
    <div className="chat-form">
      {type === 'page' ? (
        <RenderFormChat
          fields={chatFields}
          btnSubmitText="Отправить"
          submitSuccess={submitSuccess}
          colBtn="col-4"
        />
      ) : (
        <RenderForm
          fields={chatPopupFields}
          btnSubmitText="Отправить"
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
