import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainer'

import { reduxForm } from 'redux-form';

import { useEffect, useState, useRef } from 'react';
import UserTop from 'pages/users/detail/UserTop';
import Mobile from './partsCabinet/Mobile';
import Desktop from './partsCabinet/Desktop';

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  const {
    fields,
    btnSubmiText,
    waitAnsw,
    submitSuccess,
    user,
    dirty,
    newValue,
    initialize,
    reset,
    dispatch,
    change
  } = props;


  const windowSize = useRef(window.innerWidth).current;

  const [checkErrorSubmit, setCheckErrorSubmit] = useState(false);
  const [errCheck, setErrCheck] = useState(true);

  // console.log('windowSize', windowSize)
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('sub form', newValue)
    // reset();
    // dispatch(change(newValue.values))
    // console.log('initialize', dispatch)
    // initialize(newValue.values)
    // setTimeout(() => {

    // }, 500)


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
    <form >
      <div className="border-container border-null-left mobile-user-container">
        <div className="main-grid">
          {windowSize < 576 && (
            <Mobile
              user={user}
              fields={fields}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              btnSubmiText={btnSubmiText}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              dirty={dirty}
            />
          )}
          {windowSize > 576 && (
            <Desktop
              user={user}
              fields={fields}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
              btnSubmiText={btnSubmiText}
              waitAnsw={waitAnsw}
              onSubmit={onSubmit}
              dirty={dirty}

            />
          )}

        </div>
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


