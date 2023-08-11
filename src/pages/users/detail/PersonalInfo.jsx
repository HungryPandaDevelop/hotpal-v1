
const PersonalInfo = ({ user }) => {
  const {
    work,
    zodiac,
    tripPoint,
    orientation
  } = user;
  return (
    <>
      <h3></h3>
      <div className="personal-info">
        <ul className="ln">
          <li>
            <div className="personal-info-name"><i className="portfel-ico"></i><b>Работа:</b></div>
            <div className="personal-info-el">{work}</div>
          </li>
          <li>
            <div className="personal-info-name"><i className="zodiak-ico"></i><b>Зодиак:</b></div>
            <div className="personal-info-el">{zodiac}</div>
          </li>
          <li>
            <div className="personal-info-name"><i className="celi-ico"></i><b>Цель поездки:</b></div>
            <div className="personal-info-el">{tripPoint}</div>
          </li>
          <li>
            <div className="personal-info-name"><i className="orientacia-ico"></i><b>Ориентация:</b></div>
            <div className="personal-info-el">{orientation}</div>
          </li>
        </ul>
      </div></>
  )
}

export default PersonalInfo