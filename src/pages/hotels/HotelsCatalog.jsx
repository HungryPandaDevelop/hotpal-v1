
import axios from 'axios';

// import { MongoClient } from 'mongodb';

// 5897
// a5a48d2b-2e25-4501-915a-c47d5d3292e0
// const Hotels = () => {

//   const getApi = () => {


//   }
// }

// import { decompress } from 'simple-zstd';

import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';

import { connect } from 'react-redux';

import HotelSearchPanel from 'pages/hotels/catalog/HotelSearchPanel';
import HotelsItem from 'pages/hotels/catalog/HotelsItem';


// import zsTfile from 'data/test.json';

const HotelsCatalog = ({ uid }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);



  const [searchListing, setSearchListing] = useState();

  // useEffect(() => {

  //   // console.log(region)

  //   getListing('users', 'noUserRef', uid).then((res) => {

  //     setSearchListing(res);
  //     setListings(res);
  //     setLoading(false);
  //   });

  // }, []);

  const [regionList, setRegionList] = useState([]);
  const [hotelListLoad, setHotelListLoad] = useState(false);
  const [hotelList, setHotelList] = useState([]);

  const getRegion = (term) => {
    axios.get("http://hotpal.sait.website/api/api-region.php", {
      params: {
        query: term
      }
    }).then(res => {

      console.log('res', res)
      const response = res.data.data.regions;
      setRegionList(response)
    });
  }
  const getHotels = (id) => {
    console.log('loading....')
    axios.get("http://hotpal.sait.website/api/api-hotels.php", {
      params: {
        regionId: id
      }
    }).then(res => {
      console.log('loaded')
      console.log('hotel', res)

    });
  }

  // if (loading) { return 'Loading...' }

  let searchTimeId = null;
  let [regionId, setRegionId] = useState(0);

  const onTempVal = (e) => {

    if (searchTimeId) { clearTimeout(searchTimeId) };
    searchTimeId = setTimeout(() => {

      getRegion(e.target.value)
    }, 1000)

  }
  let onChoiseRegion = (id) => {
    setRegionId(id)
    getHotels(id)
  }
  // const MongoClient = new MongoClient()
  let getMongo = () => {
    // console.log('get mongo')
    // mongodb://localhost:27017/
    setHotelListLoad(true)
    axios.get("/main", {
      params: {
        // regionId: id
      }
    }).then(res => {
      console.log('loaded')
      console.log('hotel', res.data)
      setHotelListLoad(false)
      setHotelList(res.data)
    });


  }
  // "moscow_marriott_imperial_plaza_hotel"


  // const onSearch = (term) => {

  //   console.log('get', sVal)
  // }

  // const [downloading, setDownloading] = useState(false);



  // const [jsonData, setJsonData] = useState(null);
  // const getBaseInner = () => {




  // }
  return (
    <>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="btn" onClick={getRegion}>getApi</div>
      <input type='text' onKeyUp={onTempVal} />
      {
        regionList.map(item => (
          <div
            key={item.id}
            onClick={() => { onChoiseRegion(item.id) }}
          >{item.name}</div>
        ))
      }
      <hr />
      <div className="btn btn--blue" onClick={getMongo}>Mongo</div>
      {/* <h3>regiond id</h3> */}
      {/* {regionId} */}
      {/* <div className="btn btn--blue" onClick={getBaseInner}>{downloading ? 'Скачивается...' : 'Скачать файл'}</div> */}
      {/* <div className="btn btn--blue" onClick={getBaseInner}>Посмотреть</div> */}
      {/* <div className="btn btn--blue">search</div> */}
      {/* <HotelSearchPanel
      // listings={listings}
      // searchListing={searchListing}
      // setSearchListing={setSearchListing}
      /> */}

      {hotelListLoad ? 'Load...' : (
        <div className="catalog-grid main-grid">
          {hotelList.map((hotel, index) => (
            <div
              key={index}
              className="col-6 col-xs-12">
              <HotelsItem
                hotel={hotel}
                uid={uid}
              />
            </div>
          ))}</div>
      )}


    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid
  }
}

export default connect(mapStateToProps)(HotelsCatalog);