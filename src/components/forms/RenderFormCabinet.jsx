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
      <div className="border-container border-null-left account-main">
        <div className="main-grid">
          <div className="col-8">
            <div className="user-top-info">
              <RenderFields
                type="single"
                fields={fields.name}
                checkErrorSubmit={checkErrorSubmit}
                setErrCheck={setErrCheck}
              />
              <RenderFields
                type="single"
                fields={fields.dateBerth}
                checkErrorSubmit={checkErrorSubmit}
                setErrCheck={setErrCheck}
              />
              <RenderFields
                type="single"
                fields={fields.gender}
              />
            </div>
            <RenderFields
              type="single"
              fields={fields.goals}
            />
            <RenderFields
              type="single"
              fields={fields.currentLocation}
            />
          </div>
          <div className="col-4">
            <RenderFields
              type="single"
              fields={fields.imgsAccount}
            />
          </div>
          <div className="col-12">
            <div className="border-delimetr border-account"></div>
          </div>
          <div className="col-8">
            <RenderFields
              type="single"
              fields={fields.interests}
            />

          </div>
          <div className="col-4">
            <div className="personal-info">
              <ul className="ln">
                <li>
                  <div className="personal-info-name"><i className="portfel-ico"></i><b>Работа:</b></div>
                  <div className="personal-info-value">
                    <RenderFields
                      type="single"
                      fields={fields.work}
                      checkErrorSubmit={checkErrorSubmit}
                      setErrCheck={setErrCheck}
                    />
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="zodiak-ico"></i><b>Зодиак:</b></div>
                  <div className="personal-info-value">
                    <RenderFields
                      type="single"
                      fields={fields.zodiac}
                      checkErrorSubmit={checkErrorSubmit}
                      setErrCheck={setErrCheck}
                    />
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="celi-ico"></i><b>Цель поездки:</b></div>
                  <div className="personal-info-value">
                    <RenderFields
                      type="single"
                      fields={fields.tripPoint}
                      checkErrorSubmit={checkErrorSubmit}
                      setErrCheck={setErrCheck}
                    />
                  </div>
                </li>
                <li>
                  <div className="personal-info-name"><i className="orientacia-ico"></i><b>Ориентация:</b></div>
                  <div className="personal-info-value">
                    <RenderFields
                      type="single"
                      fields={fields.orientation}
                      checkErrorSubmit={checkErrorSubmit}
                      setErrCheck={setErrCheck}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 user-description">
            <RenderFields
              type="single"
              fields={fields.description}
              checkErrorSubmit={checkErrorSubmit}
              setErrCheck={setErrCheck}
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
      </div>
    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


