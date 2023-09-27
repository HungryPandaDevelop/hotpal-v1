import img from 'default/frontend/images/temp/1.jpg'

const TravelItem = ({ item }) => {
  return (
    <div className='travel-item'>
      <div className="travel-img">

      </div>
      <h3>{item.idHotel}</h3>
      <div className="travel-date">
        {item.dateTravel}
      </div>
      <div className="btn-container">
        <div className="btn btn--blue">Удалить</div>
        <div className="btn btn--black">Изменить</div>
      </div>
    </div>
  )
}

export default TravelItem