import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('sub form')

    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 10000);


    if (errCheck) {
      submitSuccess();
    } else {
      console.log('Ошибка полей')
    }


  };


  return (
    <form>
      <div className="main-grid">
        <div className="col-8">
          <div className="form-container">
            <RenderFields
              type="single"
              fields={fields.message}
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
          <div className="invite-container">
            <RenderFields
              type="single"
              fields={fields.invite}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
            />
          </div>
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


