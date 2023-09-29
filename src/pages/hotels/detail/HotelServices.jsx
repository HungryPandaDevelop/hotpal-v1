
const HotelServices = ({ listing }) => {

  //Бесплатный интернет
  //Кондиционер
  //Парковка
  //Кухня
  //Бар или ресторан
  //Трансфер
  //Пляж рядом
  //Бассейн
  //Фитнес
  //Конференц-зал
  //Для гостей с ограниченными возможностями
  //Спа-услуги
  //Подходит для детей
  const arrayServices = {
    'has_internet': ['internet', 'Бесплатный интернет'],
    'air_conditioning': ['air-conditioning', 'Кондиционер'],
    'has_parking': ['parking', 'Парковка'],
    'kitchen': ['meal', 'Кухня'],
    'has_meal': ['meal', 'Бар или ресторан'],
    'has_airport_transfer': ['shuttle', 'Трансфер'],
    'beach': ['beach', 'Пляж рядом'],
    'has_pool': ['pool', 'Бассейн'],
    'has_fitness': ['fitness', 'Фитнес'],
    'has_business': ['busyness', 'Конференц-зал'],
    'has_disabled_support': ['disabled-support', 'Для гостей с ограниченными возможностями'],
    'has_spa': ['barber-shop', 'Спа-услуги'],
    'has_smoking': ['barber-shop', 'Спа-услуги'],
    'has_kids': ['kids', 'Подходит для детей'],
  }

  return (
    <div className="hotel-services">
      <h3>Главные удобства отеля:</h3>
      <ul className='ln'>
        {listing.serp_filters.map((el, index) => {
          if (index > 4) { return false; }
          return (
            <li key={arrayServices[el][0]}>
              <i className={`ico-serv-hotel ${arrayServices[el][0]}`}></i>
              <span>{arrayServices[el][1]}</span>
            </li>
          )
        })}

      </ul>
    </div>
  )
}

export default HotelServices
