import UserTop from 'pages/users/detail/UserTop';
import RenderFields from 'components/forms/RenderFields';
import RenderBtnContainer from 'components/forms/formParts/RenderBtnContainerCabinet'


const Desktop = ({
  user,
  fields,
  checkErrorSubmit,
  setErrCheck,
  btnSubmiText,
  waitAnsw,
  onSubmit,
  newValue

}) => {
  return (
    <>
      <div className="col-8 col-xs-12">
        <UserTop user={user} />

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
        <div className={`btn-save-outer ${newValue ? 'active' : ''}`}>
          <RenderBtnContainer
            btnSubmitText={btnSubmiText}
            waitAnsw={waitAnsw}
            onSubmit={onSubmit}
            newValue={newValue}
          />
        </div>
      </div>
    </>
  )
}

export default Desktop
