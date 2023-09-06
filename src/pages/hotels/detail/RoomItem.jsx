import tempIco from 'default/frontend/images/icons-app/calendar-black.svg'
import img1 from "default/frontend/images/hotels/1.jpeg"

const RoomItem = () => {
  return (
    <div className="room-item">
      <div className="room-item-head">
        <div className="room-head-img">
          <img src={img1} alt="" />
        </div>
        <div className="room-head-info">
          <h3>
            <b>Двухместный номер Standard</b>
            <span>двуспальная кровать</span>
          </h3>
          <div className="room-head-adv">
            <div className="room-adv-item">
              <img src={tempIco} alt="" />
              <span>25 м2</span>
            </div>
            <div className="room-adv-item">
              <img src={tempIco} alt="" />
              <span>Собственная ванная комната</span>
            </div>
            <div className="room-adv-item">
              <img src={tempIco} alt="" />
              <span>Сейф</span>
            </div>
          </div>
        </div>
      </div>
      <div className="room-item-variant">
        <div className="main-grid">
          <div className="col-4">
            <ul className="room-variant-services ln">
              <li>
                <img src={tempIco} alt="" />
                <span>Двуспальная кровать</span>
              </li>
              <li>
                <img src={tempIco} alt="" />
                <span>Завтрак включён</span>
              </li>
              <li>
                <img src={tempIco} alt="" />
                <span>Для некурящих</span>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="room-variant-services ln">
              <li>
                <img src={tempIco} alt="" />
                <span>При отмене стоимость не возвращается</span>
              </li>
              <li>
                <img src={tempIco} alt="" />
                <span>Оплата сейчас</span>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <input type="text" className='input-decorate' />
          </div>
          <div className="col-2">
            <div className="room-variant-price">
              10 000 руб.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomItem
