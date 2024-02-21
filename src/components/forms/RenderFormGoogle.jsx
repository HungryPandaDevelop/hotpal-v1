import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer';

import { reduxForm } from 'redux-form';

import { useState } from 'react';



const TemplateForm = (props) => {

  const {
    fields,
    btnSubmitText,
    waitAnsw,
    submitSuccess,
    showErrPhoto,
    showErrAge,
    invalid,
    setShowBtn
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
      setShowBtn(true);
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
        type="single"
        fields={fields.dateBerth}
        checkErrorSubmit={checkErrorSubmit}
      />
      <RenderFields
        type="single"
        fields={fields.gender}
        checkErrorSubmit={checkErrorSubmit}
      />
      {showErrAge && <div className="col-12 err-hint">Вам нет 18 лет, регистрация невозможна!</div>}



      <RenderFields
        type="single"
        fields={fields.imgsAccount}
        checkErrorSubmit={checkErrorSubmit}
      />
      {showErrPhoto && <div className="col-12 err-hint">Добавьте хотя бы одно фото!</div>}



      <RenderBtnContainer
        btnSubmitText={btnSubmitText}
        waitAnsw={waitAnsw}
        onSubmit={onSubmit}
      />
    </form>

  )
}


export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);