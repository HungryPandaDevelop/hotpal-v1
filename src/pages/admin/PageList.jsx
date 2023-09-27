import { Link } from "react-router-dom";

const PageList = () => {

  const arrayPages = [['about', 'О компании'], ['contacts', 'Котакты']];

  return (
    <div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Список страниц</h1>
        <ul className="ln">
          {arrayPages.map(el => (
            <li key={el[0]}><Link to={`page-${el[0]}`}>{el[1]}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageList