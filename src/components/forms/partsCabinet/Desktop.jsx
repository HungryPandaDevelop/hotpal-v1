import UserTop from 'pages/users/detail/UserTop';
import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainerCabinet'
import { calculateAge } from 'pages/users/hooks/calculateAge';


const Desktop = ({
  user,
  fields,
  checkErrorSubmit,
  setErrCheck,
  btnSubmiText,
  waitAnsw,
  onSubmit,
  dirty,

}) => {
  return (
    <>
      <div className="col-8 col-xs-12">

        <div className="user-top-info--view">
          <h2>{user.name}, {calculateAge(user.dateBerth)}</h2>
          <RenderFields
            type="single"
            fields={fields.dateBerth}
          />
          <div className="user-info-gender">
            {user.gender && user.gender === 'man' ? (
              <div><span>Пол:</span><b>M</b>
                <div className="man-ico"></div>
              </div>) : (
              <div><span>Пол:</span><b>Ж</b>
                <div className="woman-ico"></div>
              </div>
            )}
          </div>
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
        <div className={`btn-save-outer ${dirty ? 'active' : ''}`}>
          <RenderBtnContainer
            btnSubmitText={btnSubmiText}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}

          />
        </div>
      </div>
    </>
  )
}

export default Desktop
