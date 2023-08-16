import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState, useEffect } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess,
    setInviteMessage,
    reset,
    dispatch
  } = props;



  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(false);

  let errCheckExtra = false;

  const setErrCheckExtra = (param) => {
    errCheckExtra = param;
  }

  const onSubmit = (e) => {
    e.preventDefault();



    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);

    // console.log('errCheck', errCheck)

    if (errCheck) {
      submitSuccess();
      setErrCheck(false);
      setCheckErrorSubmit(false);
      reset();
    } else {
      console.log('Ошибка полей')
    }

    if (errCheckExtra) {
      setCheckErrorSubmit(false);
      submitSuccess();
      // console.log('send extra')
      reset();
    }


  };

  const customFieldMessage = {
    ...fields.message,
    dispatch: dispatch,
    onSubmit: onSubmit
  }
  const customFieldsInv = {
    ...fields.invite,
    dispatch: dispatch,
    onSubmit: onSubmit,
    setErrCheckExtra: setErrCheckExtra,
    setInviteMessage: setInviteMessage
  }



  return (
    <form>

      <div className="main-grid">
        <div className="col-8">
          <div className="form-container">
            <RenderFields
              type="single"
              fields={customFieldMessage}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
            />
            <RenderFields
              type="single"
              fields={fields.fileMessage}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
            />
          </div>
        </div>
        <div className="col-4">
          <RenderFields
            type="single"
            fields={customFieldsInv}


          />
          <div className="btn-container">
            <button className="btn btn--blue" onClick={(e) => { onSubmit(e) }} >
              {waitAnsw ? (<>Loading...</>) : (
                <><i></i><span>{btnSubmiText}</span></>
              )}
            </button>
          </div>
        </div>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


