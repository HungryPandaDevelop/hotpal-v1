
import axios from 'axios';

// const Hotels = () => {

//   const getApi = () => {


//   }
// }



import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';

import { connect } from 'react-redux';

import HotelSearchPanel from 'pages/hotels/catalog/HotelSearchPanel';
import HotelsItem from 'pages/hotels/catalog/HotelsItem';

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


  const getApi = () => {
    axios.get("http://hotpal.sait.website/api.php").then(res => {
      console.log('res', res.data.data)
    });
  }

  // if (loading) { return 'Loading...' }


  return (
    <>
      <div className="stub"></div>
      <div className="btn" onClick={getApi}>getApi</div>
      <HotelSearchPanel
      // listings={listings}
      // searchListing={searchListing}
      // setSearchListing={setSearchListing}
      />
      <div className="catalog-grid main-grid">
        {/* {searchListing.map((user, index) => ( */}
        <div
          // key={index} 
          className="col-6">
          <HotelsItem
          // user={user}
          // uid={uid}
          />
        </div>
        {/* ))} */}
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid
  }
}

export default connect(mapStateToProps)(HotelsCatalog);