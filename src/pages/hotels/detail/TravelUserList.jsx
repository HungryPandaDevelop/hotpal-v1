import { useState, useEffect } from 'react'

import { getListing } from 'services/getListings';


import UserItem from 'pages/users/catalog/UsersItem';

const TravelUserList = ({ uid, travelList }) => {

  const [listings, setListings] = useState([]);


  useEffect(() => {

    console.log(travelList)
    const usersArray = [];

    travelList.map(el => {
      if (el.uid !== uid) {
        usersArray.push(el.uid)

      }
    })

    getListing('users', 'usersArray', [uid, usersArray]).then((res) => {

      setListings(res);

    });

  }, []);


  return (
    <>
      <div className="main-full">
        <h3>
          Люди в отеле
        </h3>
      </div>
      <div className="catalog-grid main-grid">
        {listings.map((user, index) => (
          <div key={index} className="col-4 col-xs-12">
            <UserItem
              user={user}
              uid={uid}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default TravelUserList
