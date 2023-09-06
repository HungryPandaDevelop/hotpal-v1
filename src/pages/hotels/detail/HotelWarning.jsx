import React from 'react'

const HotelWarning = () => {
  return (
    <div className="hotel-warning main-full">
      <h3>
        Важная информация
      </h3>
      <div className="hotel-warning-item">
        <h4>
          Заселение и выезд
        </h4>
        <div className="hotel-warning-info">
          Время заселения: с 14:00
          Время выезда: до 12:00
        </div>
      </div>
      <div className="hotel-warning-item">
        <h4>
          Отмена/предоплата
        </h4>
        <div className="hotel-warning-info">
          Для получения подробной информации о правилах отмены бронирования или предоплаты, пожалуйста, ознакомьтесь с условиями бронирования в деталях выбранного тарифа.
        </div>
      </div>
      <div className="hotel-warning-item">
        <h4>
          Заселение и выезд
        </h4>
        <div className="hotel-warning-info">
          Время заселения: с 14:00
          Время выезда: до 12:00
        </div>
      </div>
    </div>
  )
}

export default HotelWarning
