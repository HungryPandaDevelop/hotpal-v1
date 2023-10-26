
import { reduxForm } from 'redux-form';

import { useState } from 'react';


import Desktop from './partsCabinet/Desktop';
// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    waitAnsw,
    submitSuccess,
    user,
    dirty,
    invalid,
    newValue,

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


  return (
    <form >
      <div className="border-container border-null-left">

        <div className="main-grid">

          <Desktop
            user={user}
            fields={fields}
            checkErrorSubmit={checkErrorSubmit}
            btnSubmitText={'Сохранить'}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            newValue={newValue}
            dirty={dirty}


          />


        </div>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'formCabinet',
  enableReinitialize: true,
})(TemplateForm);


