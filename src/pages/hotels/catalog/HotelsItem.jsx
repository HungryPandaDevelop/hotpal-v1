import { Link } from "react-router-dom"
import HotelsStars from 'pages/hotels/catalog/HotelsStars'
const UserItem = ({
  hotel,
  travelList,
  uid
}) => {

  const renderImg = (hotelSingle) => {

    let startImg = hotelSingle.images.length > 0 && hotelSingle.images[0]
    if (startImg) {
      let regex = /[{}]/g;
      startImg = startImg.replace(regex, "");
      startImg = startImg.replace(/size/g, "1024x768");
      return (
        <div className="hotels-img"
          style={{ backgroundImage: `url(${startImg})` }}
        >
        </div>
      )
    } else {
      return <div className="hotels-img"></div>
    }

  }

  const renderCountTravel = () => {
    let count = 0;
    travelList.map(item => {
      // console.log(item.idHotel, hotel.id)
      if (item.idHotel === hotel.id && item.uid !== uid) {
        count++
      }
    })

    return count;
  }

  return (
    <Link to={`/hotels-catalog/${hotel.id}`} className="hotels-item">
      {/* {startImg} */}
      <div className="hotels-img-container">
        {renderImg(hotel)}
        <div className="hotels-gradient"></div>
        <div className="hotels-raiting-container">

          <HotelsStars starRating={hotel.star_rating} />

        </div>
      </div>
      <div className="hotels-info">
        <div className="hotels-name-container">
          <div className="hotels-name">{hotel.name} <br />{hotel.address}</div>
          {/* <div className="hotels-goals">
            <h3>Развлечения:</h3>
            <div className="goals-ico"><i className="bokal-ico"></i></div>
            <div className="goals-ico"><i className="pribor-ico"></i></div>
            <div className="goals-ico"><i className="plag-ico"></i></div>
            <div className="goals-ico"><i className="padushka-ico"></i></div>
          </div> */}
        </div>
        <div className="hotels-price-container">
          {/* <div className="hotels-guest">1560 гостей</div> */}
          {renderCountTravel() > 0 && <Link to={`/hotels-users/${hotel.id}`} className="btn btn--blue-border">Гости отеля {renderCountTravel()}</Link>}

          <div className="hotels-price">от {hotel.price[0].daily_prices[0]} р.</div>
        </div>
      </div>
    </Link >
  )
}

export default UserItem
