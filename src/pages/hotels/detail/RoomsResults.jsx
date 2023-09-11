import { Link } from "react-router-dom"
import RoomItem from "./RoomItem"
const RoomsResults = () => {
  return (
    <div className="rooms-results">
      <div className="main-grid">
        <div className="col-9 col-xs-12">
          <RoomItem />
          <RoomItem />

        </div>
        <div className="col-3 col-xs-12">
          <div className="rooms-total">
            <span>Всего:</span>
            <ul className="ln">
              <li>
                <b>1</b> номер: Апартаменты с балконом
              </li>
              <li>
                <b>2</b> номер: Апартаменты с балконом
              </li>
              <li>
                <b>2</b> номер: Апартаменты с балконом
              </li>
              <li>
                <b>1</b> номер: Апартаменты с балконом
              </li>
            </ul>
            <div className="rooms-totlal-price">
              9800 руб.
            </div>
            <div className="btn-container">
              <Link to="/hotels-booking/test" className="btn btn--white-border">Забронировать</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RoomsResults
