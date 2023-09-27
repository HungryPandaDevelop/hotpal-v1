import HotelsStars from 'pages/hotels/catalog/HotelsStars'


import tempIco from 'default/frontend/images/icons-app/calendar-black.svg'

import HotelImages from './HotelImages'



const HotelMain = ({ listing }) => {
  return (
    <>
      <div className="hotel-main">
        <div className="hotel-main-top">
          <div className="main-grid">
            <div className="col-6 col-xs-12">
              {/* <div className="hotels-raiting-num">8.9</div> */}
              <h1>
                {listing.name}
              </h1>
              <HotelsStars starRating={listing.star_rating} />

            </div>
            <div className="col-6 col-xs-12">
              <div className="hotel-address">
                <i className="marker-ico"></i>
                <span>
                  {listing.address}
                </span>

                <a href="/" className="tag tag--link">Показать на карте</a>
              </div>
              <div className="hotel-from-price">
                <span>от {listing.price[0].daily_prices[0]} ₽</span>
                <a href="/" className="tag tag--link">Посмотреть цены</a>
              </div>
            </div>
          </div>
        </div>

        <HotelImages allImages={listing.images} />


        <div className="hotel-main-bottom">
          <div className="main-grid">
            <div className="col-6 col-xs-12">
              <div className="hotel-services">
                <h3>Главные удобства отеля:</h3>
                <ul className='ln'>
                  <li>
                    <img src={tempIco} alt="" />
                    <span>Бесплатный интернет</span>
                  </li>
                  <li><img src={tempIco} alt="" />
                    <span>Подходит для детей</span>
                  </li>
                  <li><img src={tempIco} alt="" />
                    <span>Трансфер</span>
                  </li>
                  <li><img src={tempIco} alt="" />
                    <span>Бассейн</span>
                  </li>
                  <li><img src={tempIco} alt="" />
                    <span>Парковка</span>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-3 col-xs-12">
              <div className="hotel-contacts">
                <h3>Контактные данные:</h3>
                <ul className="ln">
                  <li> <a href={listing.phone}>
                    <i className="phone-ico"></i>
                    <span>{listing.phone}</span>
                  </a></li>
                  <li><a href="#">
                    <i className="mail-ico"></i>
                    <span>{listing.email}</span>
                  </a></li>
                </ul>

              </div>
            </div>
          </div>
        </div>


      </div>

    </>

  )
}

export default HotelMain
