
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

  const [travelList, setTravelList] = useState([]);

  useEffect(() => {
    getListing('travel', 'travelAll', uid).then((res) => {


      setTravelList(res);

    });
  }, [])

  return (
    <>
      <div className="stub"></div>


      <HotelSearchPanel
        setListings={setListings}
        setLoading={setLoading}

      />

      {loading ? <Preloader /> : (
        <div className="catalog-grid main-grid">
          {listings.map((hotel, index) => (
            <div
              key={index}
              className="col-6 col-xs-12">
              <HotelsItem
                hotel={hotel}
                uid={uid}
                travelList={travelList}
              />
            </div>
          ))}</div>
      )}

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