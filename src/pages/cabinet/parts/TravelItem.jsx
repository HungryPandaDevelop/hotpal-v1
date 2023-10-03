import { Link } from 'react-router-dom'
import { renderImgSingle } from 'pages/hotels/hooks/renderImg';

const TravelItem = ({ item, onDelete }) => {
  return (
    <div className='travel-item'>
      <div className="travel-img">
        {renderImgSingle(item)}
      </div>
      <h3>{item.nameHotel}</h3>
      <div className="travel-date">
        {item.dateTravel}
      </div>
      <div className="btn-container">
        <div className="btn btn--blue" onClick={() => onDelete(item.id)}>Удалить</div>
        <Link to={`/hotels-catalog/${item.idHotel}`} className="btn btn--black">Изменить</Link>
      </div>
    </div>
  )
}

export default TravelItem