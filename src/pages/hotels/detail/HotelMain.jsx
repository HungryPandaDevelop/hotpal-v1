import img1 from "default/frontend/images/hotels/1.jpeg"

import tempIco from 'default/frontend/images/icons-app/calendar-black.svg'



import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const settings = {
  lazyload: true,
  nav: false,
  controls: true,
  mouseDrag: true,
  loop: false,
  items: 2,
  gutter: 15,


};

const HotelMain = () => {
  return (
    <>
      <div className="hotel-main">
        <div className="hotel-main-top">
          <div className="main-grid">
            <div className="col-6 col-xs-12">
              <div className="hotels-raiting-num">8.9</div>
              <h1>
                Mercure
              </h1>

              <div className="hotels-stars">
                <div className="star active"></div>
                <div className="star active"></div>
                <div className="star active"></div>
                <div className="star active"></div>
                <div className="star"></div>
              </div>
            </div>
            <div className="col-6 col-xs-12">
              <div className="hotel-address">
                <i className="marker-ico"></i>
                <span>
                  Jumeirah Road, 2, Дубай
                </span>

                <a href="/" className="tag tag--link">Показать на карте</a>
              </div>
              <div className="hotel-from-price">
                <span>от 400 000 ₽</span>
                <a href="/" className="tag tag--link">Посмотреть цены</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-images">
          <div className="main-full">
            <TinySlider settings={settings} >
              <div className="images-item">
                <div className="images-item-container">
                  <img src={img1} alt="" />
                </div>
              </div>
              <div>
                <div className="images-item-grid">
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                </div>
              </div>
              <div>
                <div className="images-item-grid">
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                </div>
              </div>
              <div>
                <div className="images-item-grid">
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                  <div className="images-item-cell"><img src={img1} alt="" /></div>
                </div>
              </div>



            </TinySlider>
          </div>
        </div>
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
                <h3>Бронирование:</h3>
                <div>
                  <a href="#">+7 495 687 88 00</a>
                </div>
              </div>
            </div>
            <div className="col-3 col-xs-12">
              <div className="hotel-contacts">
                <h3>Контактные данные:</h3>
                <ul className="ln">
                  <li> <a href="#">
                    <i className="phone-ico"></i>
                    <span>+7 495 687 88 00</span>
                  </a></li>
                  <li><a href="#">
                    <i className="mail-ico"></i>
                    <span>mail@mail.ru</span>
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
