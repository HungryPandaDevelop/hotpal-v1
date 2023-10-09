import RenderFields from 'components/forms/RenderFields';
import RederBtnChatContainer from 'components/forms/formParts/RederBtnChatContainer'

import { reduxForm } from 'redux-form';

import { useState, useEffect } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmitText,
    waitAnsw,
    submitSuccess,
    setInviteMessage,
    reset,
    dispatch,
    colText,
    colBtn,
    invalid
  } = props;



  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);


  const [ignoreText, setIgnoreText] = useState(false);

  const onSubmit = (e) => {
    let idTimeCheck;
    e.preventDefault();

    setTimeout(() => {
      setCheckErrorSubmit(true);
    }, 10000);

    // console.log('errCheck', errCheck)

    if (invalid && ignoreText) {

      setCheckErrorSubmit(true);

      clearTimeout(idTimeCheck);

      idTimeCheck = setTimeout(() => {
        setCheckErrorSubmit(false);
      }, 10000);

    } else {
      setIgnoreText(false)
      submitSuccess();
      reset();
    }




  };

  const customFieldMessage = {
    ...fields.message,
    // dispatch: dispatch,
    onSubmit: onSubmit
  }
  const customFieldsInv = {
    ...fields.invite,
    // dispatch: dispatch,
    onSubmit: onSubmit,
    setIgnoreText: setIgnoreText,
    // setInviteMessage: setInviteMessage
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
              fields={fields.fileMessage}
              checkErrorSubmit={checkErrorSubmit}

            />
          </div>
        </div>
        <div className={`${colBtn ? colBtn : 'col-4'} col-xs-12 chat-btns-outer`}>
          <RenderFields
            type="single"
            fields={customFieldsInv}
          />

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
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


