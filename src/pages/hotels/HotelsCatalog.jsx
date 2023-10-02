
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





      <div className="catalog-grid main-grid">
        <div className="col-6">
          <HotelSearchPanel
            setListings={setListings}
            setLoading={setLoading}
            loading={loading}
            listingsCoords={listings}
          />
        </div>
        {loading ? <div className='col-6'><Preloader /></div> : (
          <div
            className="col-6">
            {listings ? listings.map((hotel, index) => (
              hotel.id && (<HotelsItem
                key={index}
                hotel={hotel}
                uid={uid}
                travelList={travelList}
              />)
            )) : <><h3>0 Отелей</h3></>}
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