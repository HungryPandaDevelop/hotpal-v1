import { Link, useNavigate } from "react-router-dom";
import { getListing } from 'services/getListings';
import { useState, useEffect } from 'react'
import { deleteListing } from 'services/getListings';

const PageList = ({ account }) => {
  const navigate = useNavigate();


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  const onDelete = (id) => {
    deleteListing('travel', id).then(res => {
      setListings(listings.filter(el => el.id !== id))
    })
  };

  useEffect(() => {

    if (account.admin === true) {

    } else {
      navigate('/')
    }

    getListing('pages',).then((res) => {


      setListings(res);
      setLoading(false);
    });

  }, [account]);

  if (loading) { return 'Loading...' }



  return (

    <div>
      <div className="stub"></div>
      <div className="main-full">
        <h1>Список страниц</h1>
        <Link to="/page-list-new" className="btn btn--blue">Новая страница</Link>
        <ul className="ln">
          {listings.map((el, index) => (
            <li key={index}>
              <h3>{el.title}</h3>
              {/* <Link to={`/page/${el.id}`} className="btn btn--blue">смотреть</Link> */}
              <Link to={`/page-list/${el.id}`}>Редактировать</Link>
              {/* <div className="btn btn--blue-border" onClick={() => { onDelete(el.id) }}>Удалить</div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageList