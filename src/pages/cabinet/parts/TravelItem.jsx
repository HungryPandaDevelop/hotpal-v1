import { Link } from 'react-router-dom'
import { renderCountTravel } from 'pages/hotels/hooks/renderCountTravel';

const TravelItem = ({ item, onDelete, uid, travelList }) => {
  return (
    <div className='travel-item'>
      <div className="btn-trash" onClick={() => onDelete(item.id)}></div>
      <div className="travel-line">
        <div className='travel-name'>
          <i className='marker-ico'></i>
          <b>{item.nameHotel} </b>
          <span>{item.address}</span>
        </div>
        <div className="travel-guest">
          {travelList ? renderCountTravel(travelList, item.idHotel, uid) : 0} гостей
        </div>
      </div>
      <div className="travel-line">
        <div className="travel-date">
          <i className='calendar-ico'></i> {item.dateTravel}
        </div>
        <div className="btn-container">
          <Link to={`/hotels-catalog/${item.idHotel}`} className="btn btn--black-border">перейти</Link>
        </div>
      </div>

    </div>
  )
}

export default TravelItem