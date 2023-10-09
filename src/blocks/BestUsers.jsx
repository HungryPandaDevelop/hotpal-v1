import { getMaxListing } from 'components/getMaxListing';
import { useEffect, useState } from 'react'
import { getListing } from 'services/getListings';
import { userImg } from 'pages/users/catalog/UsersItem/userImg';
import { Link } from 'react-router-dom';
const BestUsers = () => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListing('likes').then((res) => {
      // 
      // getMaxListing(res, 'userRef').slice(0, 9)
      let usersArr = [];
      let loadLikes = getMaxListing(res, 'userLikes')//.slice(0, 9)


      loadLikes.map(item => {
        usersArr.push(item.userLikes)
      });

      setLoading(false);
      // console.log(getMaxListing(res, 'userRef').slice(0, 9))
      // console.log(usersArr)
      getListing('users', 'usersArray', usersArr).then((res) => {
        setListings(res)

      })
    });
  }, [])

  return (
    <div className='best-users'>
      <h3>Топ анкеты:</h3>
      {listings.map((user, index) => (
        <Link to={`/users-catalog/${user.id}`} key={index} className='best-user-item'>
          <div className="users-item-img img-use-bg" style={userImg(user)}></div>
        </Link>
      ))}
    </div>
  )
}

export default BestUsers