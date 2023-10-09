import { getMaxListing } from 'components/getMaxListing';
import { getListing } from 'services/getListings';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const BestHotels = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getListing('travel', 'travelAll').then((res) => {
      setListings(getMaxListing(res, 'idHotel').slice(0, 9));
      setLoading(false)

    });
  }, []);

  return loading ? 'Loading...' : (
    <div className='bests-hotels'>
      <h3>Лучшие отели</h3>
      {listings.map((item, index) => (
        <Link key={index} to={`/hotels-users/${item.idHotel}`}>{item.nameHotel}</Link>
      ))}
    </div>
  )
}

export default BestHotels