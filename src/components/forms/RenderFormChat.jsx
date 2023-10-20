import RenderFields from 'components/forms/RenderFields';
import RederBtnChatContainer from 'components/forms/formParts/RederBtnChatContainer'

import { reduxForm } from 'redux-form';

import { useState, useEffect, useRef } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmitText,
    waitAnsw,
    submitSuccess,
    reset,
    colText,
    colBtn,
    invalid,
    dispatch,
    account,
    roomUserInfo
  } = props;

  const messageRef = useRef(null);

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);



  const ignoreTextSubmit = (e) => {
    e.preventDefault();
    submitSuccess();
    reset();
  }

  const onSubmit = (e) => {





    let idTimeCheck;
    e.preventDefault();
    // if (sendValue.)
    if (invalid) {
      setCheckErrorSubmit(true);
      clearTimeout(idTimeCheck);

      idTimeCheck = setTimeout(() => {
        setCheckErrorSubmit(false);
      }, 3000);

    } else {
      submitSuccess();
      reset();
    }


  };

  const customFieldImg = {
    ...fields.fileMessage,
    dispatch: dispatch,
    messageRef: messageRef
  }
  const customFieldMessage = {
    ...fields.message,
    messageRef: messageRef,
    onSubmit: onSubmit
  }
  const customFieldsInv = {
    ...fields.invite,
    // dispatch: dispatch,
    onSubmit: onSubmit,
    ignoreTextSubmit: ignoreTextSubmit,
    // setInviteMessage: setInviteMessage
  }

  const renderBtnInvite = () => {
    // console.log(roomUserInfo.setting_invites, account.orientation)
    // if (roomUserInfo.setting_invites) {
    //   if (roomUserInfo.setting_invites !== account.orientation) {
    //     return false;
    //   }
    // }
    return <RenderFields
      type="single"
      fields={customFieldsInv}
    />
  }

  return (
    <form>

      <div className="main-grid">
        <div className={`${colText ? colText : 'col-8'} col-xs-12`}>
          <div className="form-container">
            <RenderFields
              type="single"
              fields={customFieldMessage}
              checkErrorSubmit={checkErrorSubmit}

            />
            <RenderFields
              type="single"
              fields={customFieldImg}
              dispatch={dispatch}


            />
          </div>
        </div>
        <div className={`${colBtn ? colBtn : 'col-4'} col-xs-12 chat-btns-outer`}>



          {renderBtnInvite()}

          <RederBtnChatContainer
            btnSubmitText={btnSubmitText}
            waitAnsw={waitAnsw}
            btnClass="btn--blue-border"
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'chatForm',
  enableReinitialize: true,
})(TemplateForm);


