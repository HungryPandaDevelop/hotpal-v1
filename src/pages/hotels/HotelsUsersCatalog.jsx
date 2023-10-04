import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import moment from "moment";
import { connect } from 'react-redux';

import { getListing } from 'services/getListings';

import { hotelPage, hotelsData } from 'pages/hotels/hooks/searchHotels';

import HotelsItem from 'pages/hotels/catalog/HotelsItem';
import TravelAddPanel from "pages/hotels/detail/TravelAddPanel";
import UserItem from 'pages/users/catalog/UsersItem';
import UsersSearchPanel from 'pages/users/catalog/UsersSearchPanel';

const HotelsUsersCatalog = ({ uid }) => {

  const params = useParams();
  const pageId = params.hotelId;

  const [listings, setListings] = useState([]);
  const [searchListing, setSearchListing] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();


  const [loadingHotel, setLoadingHotel] = useState(true);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {

    // load HOTEL 
    // console.log('searchParams', searchParams.get('from'), searchParams.get('from'))

    let dateFrom = searchParams.get('from') ? searchParams.get('from') : moment().format('YYYY-MM-DD');
    let dateTo = searchParams.get('to') ? searchParams.get('to') : moment().add(2, 'days').format('YYYY-MM-DD');

    hotelPage(pageId, dateFrom, dateTo, 1).then(res => {
      hotelsData(res).then(response => {
        setLoadingHotel(false)
        setHotel(response[0])
        // console.log('get detail hotels', response[0])
      })
    });
    // load HOTEL 



    const usersArray = [];
    getListing('travel', 'travel', pageId).then((res) => {
      let users = res;
      res.map(el => {
        if (el.userRef !== uid) {
          usersArray.push(el.userRef)
        }
      });
      if (usersArray.length > 0) {
        getListing('users', 'usersArray', usersArray).then((res) => {

          let tempUsers = [];
          console.log('users', usersArray, res)
          res.forEach(el => {
            tempUsers.push({ ...users.find(e => e.uid === el.uid), ...el })
          });

          setLoading(false);
          setSearchListing(tempUsers);
          setListings(tempUsers);
        });
      }

    });

  }, []);




  return (
    <>
      <div className="stub"></div>

      <div className="main-grid">
        <div className="col-6">
          <UsersSearchPanel
            listings={listings}
            searchListing={searchListing}
            setSearchListing={setSearchListing}
            miniPanel={true}
          />
        </div>
        <div className="col-6">
          <h3 className='hotels-topic'>Найдено <span>0 гостей</span></h3>
          {loadingHotel ? 'load...' : (
            <HotelsItem
              key={hotel.id}
              hotel={hotel}
              uid={uid}
              itemInner={true}
            />
          )}
        </div>
        <div className="col-12">
          {loadingHotel ? 'load...' : <TravelAddPanel hotel={hotel} />}
        </div>
      </div>
      {loading ? (<div className='main-full'>Loading...</div>) : (
        <div className="catalog-grid main-grid">
          {searchListing.map((user, index) => (
            <div key={index} className="col-4 col-xs-12">
              <UserItem
                user={user}
                uid={uid}
                dateTravel={user.dateTravel}
              />
            </div>
          ))}
        </div>
      )}

    </>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.account.uid
  }
}

export default connect(mapStateToProps)(HotelsUsersCatalog);