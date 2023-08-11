import RenderFields from 'components/forms/RenderFields';

import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

let TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess,
    colBtn
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

  if (!fields) {
    return <>Empty Fields For Form...</>
  }

  return (
    <form
      className="form form-color main-grid"
    >
      <RenderFields
        fields={fields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
        onSubmit={onSubmit}
      />
      <div className={`${colBtn ? colBtn : 'col-12'} btn-container`}>
        <button className="btn btn--blue" onClick={(e) => { onSubmit(e) }} >
          {waitAnsw ? (<>Loading...</>) : (
            <><i></i><span>{btnSubmiText}</span></>
          )}
        </button>
      </div>
    </form >
  )
}

TemplateForm = reduxForm({
  form: 'singleInput'  // a unique identifier for this form
})(TemplateForm)

export default TemplateForm;


