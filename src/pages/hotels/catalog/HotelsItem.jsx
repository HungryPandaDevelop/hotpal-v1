import { Link } from "react-router-dom"

const UserItem = ({ hotel }) => {
  // console.log('hotel', hotel)
  // let startImg = hotel.images[0]

  // console.log('img', startImg)

  const renderImg = (hotelSingle) => {
    console.log('1111', hotelSingle.images.length)

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

  return (
    <Link to="/hotels-catalog/test" className="hotels-item">
      {/* {startImg} */}
      <div className="hotels-img-container">
        {renderImg(hotel)}
        <div className="hotels-gradient"></div>
        <div className="hotels-raiting-container">
          <div>
            <div className="hotels-raiting-num">8.9</div>
          </div>
          <div className="hotels-stars">
            <div className="star active"></div>
            <div className="star active"></div>
            <div className="star active"></div>
            <div className="star active"></div>
            <div className="star"> </div>
          </div>
          <div className="btn-container">
            <div className="btn btn--white-border">Забронировать</div>
          </div>
        </div>
      </div>
      <div className="hotels-info">
        <div className="hotels-name-container">
          <div className="hotels-name">{hotel.name} <br />{hotel.address}</div>
          <div className="hotels-goals">
            <h3>Развлечения:</h3>
            <div className="goals-ico"><i className="bokal-ico"></i></div>
            <div className="goals-ico"><i className="pribor-ico"></i></div>
            <div className="goals-ico"><i className="plag-ico"></i></div>
            <div className="goals-ico"><i className="padushka-ico"></i></div>
          </div>
        </div>
        <div className="hotels-price-container">
          <div className="hotels-guest">1560 гостей</div>
          <div className="btn btn--blue-border">Посмотреть всех</div>
          <div className="hotels-price">от 8000 р.</div>
        </div>
      </div>
    </Link >
  )
}

export default UserItem
