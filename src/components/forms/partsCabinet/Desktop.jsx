import { useState, useEffect } from 'react';
import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainerCabinet'
import { calculateAge } from 'pages/users/hooks/calculateAge';
import Travel from 'pages/cabinet/Travel';

const Desktop = ({
  user,
  fields,
  checkErrorSubmit,
  btnSubmitText,
  waitAnsw,
  onSubmit,
  dirty,
  newValue
}) => {

  const [windowSize, setWindowSize] = useState(0);

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
    // console.log(window.innerWidth)
  }




  const renderSlider = (windowSize, screen) => {

    // const renderEmpty = () => {
    //   if (newValue) {
    //     if (!newValue.values.imgsAccount) {
    //       return false;
    //     }
    //     if (newValue.values.imgsAccount.length === 0) {
    //       return false;
    //     }
    //     return true;
    //   }
    // }

    const renderInput = () => (
      <div className="col-4 col-sm-6 col-xs-12">
        {/*!renderEmpty() && <div className='hit-img-null'>
          Ваша анкета не отобразиться в поиске, пока вы не добавите фото!
        </div>*/}
        <RenderFields
          type="single"
          fields={fields.imgsAccount}
          onSubmit={onSubmit}
        />
      </div>
    );

    if (windowSize > 576 && screen === 'desktop') {
      return renderInput();
    }

    if (windowSize < 576 && screen === 'mobile') {
      return renderInput();
    }

  }
  useEffect(() => {

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);


  return (
    <>

      {renderSlider(windowSize, 'mobile')}

      <div className="col-8 col-sm-6 col-xs-12">

        <div className="user-top-info--view">
          <h2>
            {user.name} {user.verificationCheck ? (<div className="verification-ico"></div>) : ''}{user.dateBerth && ', ' + calculateAge(user.dateBerth)}
            {!user.verificationCheck && <div className="verification-hint">Вы не верифицированы</div>}

          </h2>

          <div className='input-box'>
            <RenderFields
              type="single"
              fields={fields.dateBerth}
              checkErrorSubmit={checkErrorSubmit}
            />

            {newValue && calculateAge(newValue.values.dateBerth) < 18 && <span className='err-date-cabinet'>Вам нет 18 лет, Ваша анкета не участвует в поиске</span>}

          </div>
          <RenderFields
            type="single"
            fields={fields.gender}
          />

        </div>
        <RenderFields
          type="single"
          fields={fields.goals}
        />
        <div className="travel-user">
          <div className='travel-current'>
            <RenderFields
              type="single"
              fields={fields.hotelFind}
            />
            <RenderFields
              type="single"
              fields={fields.hotelDate}
            />
          </div>
          <div className="travel-story">
            <h3>Будущие путешествия</h3>
            <Travel />
          </div>
        </div>
      </div>

      {renderSlider(windowSize, 'desktop')}

      <div className="col-12 hidden-xs">
        <div className="border-delimetr border-account"></div>
      </div>
      <div className="col-8  col-sm-6 col-xs-12">
        <RenderFields
          type="single"
          fields={fields.interests}
        />

      </div>
      <div className="col-4  col-sm-6 col-xs-12">
        <div className="personal-info">
          <ul className="ln">
            <li>
              <div className="personal-info-name"><i className="portfel-ico"></i><b>Работа:</b></div>
              <div className="personal-info-value">
                <RenderFields
                  type="single"
                  fields={fields.work}
                  checkErrorSubmit={checkErrorSubmit}

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

        />
        <div className={`btn-save-outer ${dirty ? 'active' : ''}`}>
          <RenderBtnContainer
            btnSubmitText={btnSubmitText}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            checkErrorSubmit={checkErrorSubmit}
          />
        </div>
      </div>
    </>
  )
}

export default Desktop
