import React from 'react'

const HotelSearchPanel = () => {
  return (
    <div className="main-full border-search-outer">
      <div className="border-tabs-container">
        <div className="border-tab active">Поиск по людям</div>
        <div className="border-tab">Поиск по отелям</div>
      </div>
      <div className="border-container border-null-left border-container-search">
        <div className="main-grid">
          <div className="input-box col-3">
            <label>Город</label>
            <select className="style-select" data-text="Выбрать селект">
              <option>селект 1</option>
              <option>селект 2</option>
              <option>селект 3</option>
              <option>селект 4</option>
              <option>селект 5</option>
            </select>
          </div>
          <div className="input-box col-2">
            <label>Дата заезда</label>
            <input className="input-decorate undefined" type="text" placeholder="От" />
          </div>
          <div className="input-box col-2">
            <label>Дата выезда</label>
            <input className="input-decorate undefined" type="text" placeholder="До" />
          </div>
          <div className="input-box col-2">
            <label>Персон</label>
            <input className="input-decorate undefined" type="text" placeholder="Количество" />
          </div>
          <div className="col-3">
            <div className="btn-container">
              <div className="btn btn--blue-border">Еще фильтры</div>
              <div className="btn btn--blue">Найти</div>
            </div>
          </div>
          <div className="input-box col-3">
            <label>Тип Места</label>
            <select className="style-select" data-text="Выбрать селект">
              <option>селект 1</option>
              <option>селект 2</option>
              <option>селект 3</option>
              <option>селект 4</option>
              <option>селект 5</option>
            </select>
          </div>
          <div className="input-box col-2">
            <label>Комнат</label>
            <input className="input-decorate undefined" type="text" placeholder="Количество" />
          </div>
          <div className="input-box col-2">
            <label>Рейтинг места</label>
            <input className="input-decorate undefined" type="text" placeholder="Количество" />
          </div>
          <div className="input-box col-5">
            <label>Искать</label>
            <div className="switch-container"><span>По работе</span>
              <div className="switch-input"><i></i></div><span>Для отдыха</span>
            </div>
          </div>
          <div className="col-3 col-offset-10">
            <div className="btn-container btn-container--bottom">
              <div className="btn btn--blue-border">Свернуть</div>
              <div className="btn btn--blue">Найти</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelSearchPanel
