import { Link } from "react-router-dom"

const UserItem = () => {
  return (
    <Link to="/hotels-catalog/test" className="hotels-item">
      <div className="hotels-img-container">
        <div className="hotels-img"
        // style="background-image: url('/images/temp/hotel.jpg')"
        ></div>
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
          <div className="hotels-name">Mercure <br />Москва, м. Павелецкая</div>
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
    </Link>
  )
}

export default UserItem
