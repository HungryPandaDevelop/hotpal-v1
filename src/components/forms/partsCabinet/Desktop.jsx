
import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainerCabinet'
import { calculateAge } from 'pages/users/hooks/calculateAge';
import Travel from 'pages/cabinet/Travel';

const Desktop = ({
  user,
  fields,
  checkErrorSubmit,
  btnSubmiText,
  waitAnsw,
  onSubmit,
  dirty,

}) => {
  return (
    <>
      <div className="col-8 col-xs-12">

        <div className="user-top-info--view">
          <h2>
            {user.name}, {calculateAge(user.dateBerth)}
            {!user.verificationCheck && <div className="verification-hint">Вы не верифицированы</div>}
          </h2>

          <RenderFields
            type="single"
            fields={fields.dateBerth}
            checkErrorSubmit={checkErrorSubmit}
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

      <div className="col-4 col-xs-12">
        <RenderFields
          type="single"
          fields={fields.imgsAccount}
          onSubmit={onSubmit}
        />
      </div>


      <div className="col-12">
        <div className="border-delimetr border-account"></div>
      </div>
      <div className="col-8 col-xs-12">
        <RenderFields
          type="single"
          fields={fields.interests}
        />

      </div>
      <div className="col-4 col-xs-12">
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
        <div className={`btn-save-outer ${dirty ? 'active' : 'active'}`}>
          <RenderBtnContainer
            btnSubmitText={btnSubmiText}
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
