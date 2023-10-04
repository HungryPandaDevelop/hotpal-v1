import tempIco from 'default/frontend/images/icons-app/calendar-black.svg'


const RoomsServices = () => {
  return (
    <div className="rooms-services">
      <div className="main-full">
        <h3>Все услуги и удобства</h3>
      </div>
      <div className="main-grid">
        <div className="col-4 col-xs-12">
          <div className="rooms-services-item">
            <img src={tempIco} className='rooms-services-ico' alt="" />
            <div className="rooms-services-text">
              Магазины, Компьютер, Кондиционер, Круглосуточная стойка регистрации, Места для курения
            </div>
          </div>
        </div>
        <div className="col-4 col-xs-12">
          <div className="rooms-services-item">
            <img src={tempIco} className='rooms-services-ico' alt="" />
            <div className="rooms-services-text">
              Магазины, Компьютер, Кондиционер, Круглосуточная стойка регистрации, Места для курения
            </div>
          </div>
        </div>
        <div className="col-4 col-xs-12">
          <div className="rooms-services-item">
            <img src={tempIco} className='rooms-services-ico' alt="" />
            <div className="rooms-services-text">
              Магазины, Компьютер, Кондиционер, Круглосуточная стойка регистрации, Места для курения
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default RoomsServices;
