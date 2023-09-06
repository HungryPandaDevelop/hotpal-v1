import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer'
import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

let TemplateForm = (props) => {
  const {
    fields,
    btnSubmitText,
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
      className="form main-grid"
    >
      <RenderFields
        fields={fields}
        checkErrorSubmit={checkErrorSubmit}
        setErrCheck={setErrCheck}
        onSubmit={onSubmit}
      />
      <RenderBtnContainer
        colBtn={colBtn}
        btnSubmitText={btnSubmitText}
        waitAnsw={waitAnsw}
        onSubmit={onSubmit}
      />

    </form >
  )
}

TemplateForm = reduxForm({
  form: 'singleInput'  // a unique identifier for this form
})(TemplateForm)

export default TemplateForm;


