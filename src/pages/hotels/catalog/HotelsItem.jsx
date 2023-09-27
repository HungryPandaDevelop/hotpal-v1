import { Link } from "react-router-dom"
import HotelsStars from 'pages/hotels/catalog/HotelsStars'
const UserItem = ({ hotel }) => {
  console.log('hotel', hotel.star_rating)
  // let startImg = hotel.images[0]

  // console.log('img', startImg)

  const renderImg = (hotelSingle) => {
    // console.log('1111', hotelSingle.images.length)

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
  // let start = 3;
  return (
    <Link to={`/hotels-catalog/${hotel.id}`} className="hotels-item">
      {/* {startImg} */}
      <div className="hotels-img-container">
        {renderImg(hotel)}
        <div className="hotels-gradient"></div>
        <div className="hotels-raiting-container">
          {/* <div>
            <div className="hotels-raiting-num">8.9</div>
          </div> */}
          <HotelsStars starRating={hotel.star_rating} />

          {/* <div className="btn-container">
            <div className="btn btn--white-border">Забронировать</div>
          </div> */}
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
          {/* <div className="btn btn--blue-border">Посмотреть всех</div> */}
          <div className="hotels-price">от {hotel.price[0].daily_prices[0]} р.</div>
        </div>
      </div>
    </Link >
  )
}

export default UserItem
