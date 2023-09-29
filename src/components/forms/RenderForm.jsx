import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer'
import { reduxForm } from 'redux-form';

import { useState } from 'react';

// --------------------------------------------------------------------

let TemplateForm = (props) => {
  const {
    fields,
    btnSaveText,
    waitAnsw,
    submitSuccess,
    colBtn,
    setSuccessSend,
    invalid
  } = props;


  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();

    console.log('sub form', invalid)

    setCheckErrorSubmit(true);

    setTimeout(() => {
      setCheckErrorSubmit(false);
      setSuccessSend(true)
    }, 10000);

    if (!invalid) {
      submitSuccess();

    } else {
      setSuccessSend(false)
      // console.log('Ошибка полей')
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
        btnSaveText={btnSaveText}
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


