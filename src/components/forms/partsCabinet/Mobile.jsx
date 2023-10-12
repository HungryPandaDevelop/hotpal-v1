import UserTop from 'pages/users/detail/UserTop';
import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainerCabinet'
import Travel from 'pages/cabinet/Travel';
import { calculateAge } from 'pages/users/hooks/calculateAge';
const Mobile = ({
  user,
  fields,
  checkErrorSubmit,

  btnSubmiText,
  waitAnsw,
  onSubmit,
  newValue,
  dirty

}) => {
  return (
    <>
      <div className="col-xs-6">
        <RenderFields
          type="single"
          fields={fields.imgsAccount}
        />
      </div>
      <div className="col-xs-6">
        {!user.verificationCheck && <div className="verification-hint">Вы не верифицированы</div>}
        <UserTop user={user} />

        <RenderFields
          type="single"
          fields={fields.goals}
        />
      </div>
      <div className="col-xs-6">
        <div className='input-box'>
          <RenderFields
            type="single"
            fields={fields.dateBerth}
            checkErrorSubmit={checkErrorSubmit}
          />
          {newValue && calculateAge(newValue.values.dateBerth) < 18 && <span className='err-date-cabinet'>Вам нету 18 лет, Ваша анкета не участвует в поиске</span>}


        </div>
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
      <div className="col-xs-6">
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
      </div>
      <div className="col-xs-6">
        <RenderFields
          type="single"
          fields={fields.interests}
        />
      </div>
      <div className="col-xs-6">
        <div className="travel-story">
          <h3>Будущие путешествия</h3>
          <Travel />
        </div>
      </div>
      <div className="col-xs-12">
        <RenderFields
          type="single"
          fields={fields.description}
          checkErrorSubmit={checkErrorSubmit}

        />
      </div>
      <div className={`btn-save-outer ${dirty ? 'active' : ''}`}>
        <RenderBtnContainer
          btnSubmitText={btnSubmiText}
          waitAnsw={waitAnsw}
          onSubmit={onSubmit}

        />
      </div>
    </>
  )
}

export default Mobile
