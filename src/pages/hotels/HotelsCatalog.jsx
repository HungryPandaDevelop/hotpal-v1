
// 5897
// a5a48d2b-2e25-4501-915a-c47d5d3292e0


import { useEffect, useState } from 'react'


import { connect } from 'react-redux';

import HotelSearchPanel from 'pages/hotels/catalog/HotelSearchPanel';
import HotelsItem from 'pages/hotels/catalog/HotelsItem';
import Preloader from 'components/Preloader';

import { getListing } from 'services/getListings';

const HotelsCatalog = ({ uid }) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);


  const [searchDate, setSearchDate] = useState(null);

  const [travelList, setTravelList] = useState([]);

  function toCaseCount(arg) {
    let last = arg.toString().split('').pop();
    if (last == 1) return ' вариант'
    else if (last >= 2 && last <= 4) return ' варианта'
    else if (last >= 5 && last <= 9) return ' вариантов'
    else return ' вариантов'
  }

  useEffect(() => {
    getListing('travel', 'travelAll', uid).then((res) => {
      setTravelList(res);
    });
  }, []);

  return (
    <>
      <div className="stub"></div>





      <div className="catalog-grid main-grid">
        <div className="col-6">
          <HotelSearchPanel
            setListings={setListings}
            setLoading={setLoading}
            loading={loading}
            listingsCoords={listings}
            setSearchDate={setSearchDate}
          />
        </div>
        {loading ? <div className='col-6'><Preloader /></div> : (
          <div
            className="col-6">
            <h2 className="hotels-topic">
              Найдено <span>{listings.length} {toCaseCount(listings.length)}
              </span>
            </h2>
            {listings.map((hotel, index) => (
              hotel.id && (<HotelsItem
                key={index}
                hotel={hotel}
                uid={uid}
                travelList={travelList}
                searchDate={searchDate}
              />)
            ))}
          </div>
        )}
      </div>
      <div className="stub"></div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid
  }
}

export default connect(mapStateToProps)(HotelsCatalog);