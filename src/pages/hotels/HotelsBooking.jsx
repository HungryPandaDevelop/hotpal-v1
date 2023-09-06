import tempIco from 'default/frontend/images/icons-app/calendar-black.svg'


const HotelsBooking = () => {
  return (
    <>
      <div className="stub"></div>

      <div className="main-grid hotel-booking">
        <div className="col-4">
          <div className="form-booking border-container">
            <div className="input-box">
              <label htmlFor="">Электронная почта</label>
              <input type="text" className='input-decorate' placeholder='Ваша электронная почта' />
            </div>
            <div className="input-box">
              <label htmlFor="">Имя</label>
              <input type="text" className='input-decorate' placeholder='Ваше имя' />
            </div>
            <div className="input-box">
              <label htmlFor="">Фамилия</label>
              <input type="text" className='input-decorate' placeholder='Ваша фамилия' />
            </div>
            <div className="input-box">
              <label htmlFor="">Гражданство</label>
              <input type="text" className='input-decorate' placeholder='Ваше гражданство' />
            </div>
            <div className="input-box">
              <label htmlFor="">Телефон</label>
              <input type="text" className='input-decorate' placeholder='Ваш номер' />
            </div>
          </div>
          <div className="form-booking border-container">
            <div className="input-box">
              <label htmlFor="">1x ПОЛУЛЮКС</label>
              <div>
                <span>Пожалуйста, заполните все поля</span>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Имя гостя</label>
              <input type="text" className='input-decorate' placeholder='Ваше имя' />
            </div>
            <div className="input-box">
              <label htmlFor="">Фамилия гостя</label>
              <input type="text" className='input-decorate' placeholder='Ваша фамилия' />
            </div>
            <div className="input-box">
              <label htmlFor="">Гражданство</label>
              <input type="text" className='input-decorate' placeholder='Ваше гражданство' />
            </div>
          </div>
          <div className="form-booking border-container">
            <div className="input-box">
              <label htmlFor="">Информация о заезде</label>
              <div>
                <span>Время заезда</span>
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Время заезда</label>
              <input type="text" className='input-decorate' placeholder='Ваше время' />
            </div>
            <div className="input-box">
              <label htmlFor="">Пожелания</label>
              <textarea className='input-decorate' placeholder='Ваша пожелания' />
            </div>
          </div>
          <div className="btn-container">
            <div className="btn btn--blue">Продолжить</div>
          </div>
          <br />
          <div className="form-booking border-container">
            <div className="input-box">
              <label htmlFor="">Оплата</label>
            </div>
            <div className="input-box">
              <input type="text" className='input-decorate' placeholder='cvc' />
            </div>
            <div className="input-box">
              <input type="text" className='input-decorate' placeholder='Номер карты' />
            </div>
            <div className="input-box">
              <input type="text" className='input-decorate' placeholder='Имя на карте' />
            </div>
            <div className="input-box">
              <input type="text" className='input-decorate' placeholder='мм/гг' />
            </div>

          </div>
        </div>
        <div className="col-8">
          <div className="hotel-booking-info">
            <div className="hotels-img-container hotel-booking-img">
              <div className="hotels-img"></div>
              <div className="hotels-gradient"></div>
              <div class="hotels-raiting-container">
                <div>
                  <div class="hotels-raiting-num">8.9</div></div>
                <div class="hotels-stars">
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star active"></div>
                  <div class="star"> </div></div>
              </div>
            </div>
            <div className="hotel-booking-details">
              <div className="hotel-booking-details-name">
                <b>Отель Mercury</b>
                <span>Москва, м. Павелецкая, ул. Добровольная, д. 16</span>
              </div>
              <div className="hotel-booking-details-date">
                <b>Заезд</b>
                <span>14 сентября 2023</span>
              </div>
              <div className="hotel-booking-details-date">
                <b>Выезд</b>
                <span>18 сентября 2023</span>
              </div>
            </div>
          </div>
          <div className="hotel-main-bottom">
            <div className="main-grid">
              <div className="col-6">
                <div className="hotel-services">
                  <h3>Условия:</h3>
                  <ul className='ln'>
                    <li>
                      <img src={tempIco} alt="" />
                      <span>Оплата в отеле - Для бронирования нужна карта</span>
                    </li>
                    <li><img src={tempIco} alt="" />
                      <span>Нет бесплатной отмены</span>
                    </li>
                    <li><img src={tempIco} alt="" />
                      <span>Питание не включено</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-3">
                <div className="hotel-contacts">
                  <h3>Бронирование:</h3>
                  <div>
                    <a href="#">+7 495 687 88 00</a>
                  </div>
                </div>
              </div>
              <div className="col-3">
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
          <div className="hotel-booking-total">
            <span>
              К оплате за отель:
            </span>
            <b>
              9800 руб.
            </b>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelsBooking
