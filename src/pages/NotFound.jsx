import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div className="stub"></div>
      <div className="page-404 main-full">
        Страница не найдена
        <div className="btn-container">
          <Link className='btn btn--blue' to="/">Вернуться на главную</Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
