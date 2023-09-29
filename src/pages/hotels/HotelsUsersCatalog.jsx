import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getListing } from 'services/getListings';


import UserItem from 'pages/users/catalog/UsersItem';
import UsersSearchPanel from 'pages/users/catalog/UsersSearchPanel';

const HotelsUsersCatalog = ({ uid }) => {

  const params = useParams();
  const pageId = params.hotelId;

  const [listings, setListings] = useState([]);
  const [searchListing, setSearchListing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    const usersArray = [];

    getListing('travel', 'userRef', pageId).then((res) => {
      let users = res;
      res.map(el => {
        if (el.uid !== uid) {
          usersArray.push(el.uid)
        }
      })

      getListing('users', 'usersArray', [uid, usersArray]).then((res) => {

        let tempUser = [];
        // console.log(res, users)
        res.forEach(el => {
          tempUser.push({ ...users.find(e => e.uid === el.uid), ...el })
        })



        setListings(tempUser);
        setSearchListing(tempUser);
        setLoading(false);

      });

    });






  }, []);


  if (loading) { return 'Loading...' }

  return (
    <>
      <div className="stub"></div>
      <UsersSearchPanel
        listings={listings}
        searchListing={searchListing}
        setSearchListing={setSearchListing}
        disableTabs={true}
      />
      <div className="main-full">
        <h1>
          Люди в отеле {pageId}
        </h1>
      </div>
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
    </>
  )
}

export default HotelsUsersCatalog
