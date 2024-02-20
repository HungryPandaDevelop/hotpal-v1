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
    colBtn,
    invalid,
    children

  } = props;



  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  const onSubmit = (e) => {
    let idTimeCheck;
    e.preventDefault();

    if (invalid) {


      setCheckErrorSubmit(true);
      clearTimeout(idTimeCheck);

      idTimeCheck = setTimeout(() => {
        setCheckErrorSubmit(false);
      }, 3000);

    } else {

      submitSuccess();
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
        onSubmit={onSubmit}
      />
      <RenderBtnContainer
        colBtn={colBtn}
        btnSubmitText={btnSubmitText}
        waitAnsw={waitAnsw}
        onSubmit={onSubmit}
        children={children}
      />

    </form >
  )
}

TemplateForm = reduxForm({
  form: 'singleInput'  // a unique identifier for this form
})(TemplateForm)

export default TemplateForm;


