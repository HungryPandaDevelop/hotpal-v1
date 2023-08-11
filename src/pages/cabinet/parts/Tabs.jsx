import { Link } from "react-router-dom";

const Tabs = ({ active }) => {

  const allTabs = [
    ['Кабинет', '/cabinet'],
    ['Настройки', '/cabinet/settings'],
    ['Чат', '/cabinet/chat'],
    ['Симпатии', '/cabinet/likes'],
    ['Избранное', '/cabinet/favorites'],
    ['Черный список', '/cabinet/dislikes'],
  ];

  return (
    <div className="border-tabs-container">
      {allTabs.map((item, index) => (<Link
        key={index}
        className={`border-tab ${(index === active) ? 'active' : ''}`}
        to={item[1]}
      >{item[0]}</Link>))}


    </div>
  )
}

export default Tabs
