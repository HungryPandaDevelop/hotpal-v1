
import { reduxForm, reset } from 'redux-form';

import { useState, useRef } from 'react';

import Mobile from './partsCabinet/Mobile';
import Desktop from './partsCabinet/Desktop';
// import { onSubmit } from 'components/forms/formParts/onSubmit';
// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    waitAnsw,
    submitSuccess,
    user,
    dirty,
    dispatch,
    invalid,
    newValue,
    initialize
  } = props;

  const windowSize = useRef(window.innerWidth).current;

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    let idTimeCheck;
    e.preventDefault();

    // console.log('sub form invalid check', invalid)

    if (invalid) {
      setCheckErrorSubmit(true);
      clearTimeout(idTimeCheck);
      idTimeCheck = setTimeout(() => {
        setCheckErrorSubmit(false);
      }, 10000);
    } else {

      submitSuccess();

    }
  };


  return (
    <form >
      <div className="border-container border-null-left mobile-user-container">
        <div className="main-grid">
          {windowSize < 576 && (
            <Mobile
              user={user}
              fields={fields}
              checkErrorSubmit={checkErrorSubmit}
              btnSubmiText={'сохранить'}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              newValue={newValue}
              dirty={dirty}
            />
          )}
          {windowSize > 576 && (
            <Desktop
              user={user}
              fields={fields}
              checkErrorSubmit={checkErrorSubmit}
              btnSubmiText={'сохранить'}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              newValue={newValue}
              dirty={dirty}


            />
          )}

        </div>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'formCabinet',
  enableReinitialize: true,
})(TemplateForm);


